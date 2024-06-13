import React, { useState, useEffect } from 'react';
import './mail.css';
import { getCurrentDate } from './date';
import { getCurrentTime } from './time';

const Mail = () => {
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  const [formData, setFormData] = useState({
    referenceId: '',
    department: '',
    receiptDate: '',
    category: '',
    sender: '',
    request: '',
    mailDate: getCurrentDate(),
    time: getCurrentTime(),
  });

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      const time = getCurrentTime();
      setCurrentTime(time);
      setFormData((prevData) => ({
        ...prevData,
        time: time,
      }));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{}}>
        <div className="hero-image">
          <img
            src="https://i.pinimg.com/736x/25/47/e4/2547e41487634d272a78471c0ae64121.jpg"
            alt="Hero"
            style={{ marginTop: '' }}
          />
        </div>
        <br />
        <div className="form-group fullname">
          <label>Reference ID</label>
          <input
            type="text"
            name="referenceId"
            placeholder="Enter issue no. of issuing dept."
            value={formData.referenceId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group posting">
          <label>DEPARTMENT</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="" disabled>Select Department</option>
            <option value="Office of The Chairman">Office of The Chairman</option>
            <option value="Office of The DG">Office of The DG</option>
            <option value="Cartography Department">Cartography Department</option>
            <option value="Population Management">Population Management</option>
            <option value="General Services">General Services</option>
            <option value="Procurement">Procurement</option>
            <option value="Secretary to the Commission">Secretary to the Commission</option>
            <option value="Human Resource Management and Administration">Human Resource Management and Administration</option>
            <option value="Public Relations Department">Public Relations Department</option>
            <option value="Vital Registration Department">Vital Registration Department</option>
            <option value="Legal Department">Legal Department</option>
            <option value="Population Institute and Studies Department">Population Institute and Studies Department</option>
            <option value="Public Administration Department">Public Administration Department</option>
            <option value="Account Department">Account Department</option>
            <option value="ICT Department">ICT Department</option>
            <option value="Special Duties Department">Special Duties Department</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="form-group posting">
          <label>CATEGORY</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" disabled>Select Category</option>
            <option value="Incoming">Incoming</option>
            <option value="Outgoing">Outgoing</option>
          </select>
        </div>
        <div className="form-group fullname">
          <label>WHO FROM</label>
          <input
            type="text"
            name="sender"
            placeholder="Enter who mail is coming from"
            value={formData.sender}
            onChange={handleChange}
          />
        </div>
       

        <div className="form-group date">
          <label>DATE OF RECEIPT</label>
          <input
            type="date"
            name="mailDate"
            value={formData.mailDate}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group time">
          <label>TIME</label>
          <input
            type="text"
            name="time"
            placeholder="Current time"
            value={formData.time}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group">
  <label htmlFor="userRequest">Explain your request:</label>
  <textarea
    id="userRequest"
    value={formData.userRequest}
    onChange={handleChange}
    placeholder="Enter your request here"
    style={{ width: '100%', height: '150px' }}
  ></textarea>
</div>
        <br />
        <div className="form-group submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Mail;
