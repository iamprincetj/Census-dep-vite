import React, { useState, useEffect } from 'react';
import './request.css';
import { getCurrentDate } from './date';
import { getCurrentTime } from './time';

const Request = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phoneNumber: '',
    address: '',
    email: '',
    state: '',
    lga: '',
    date: getCurrentDate(),
    time: getCurrentTime(),
    status: '',
    gender: '',
    userRequest: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
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
        </div><br />
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Visitor's Address (Office Address is Most Preferred)</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            id="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="" disabled>Select State</option>
            <option value="Abia">Abia State</option>
            <option value="Adamawa">Adamawa State</option>
            <option value="AkwaIbom">Akwa Ibom State</option>
            <option value="Anambra">Anambra State</option>
            <option value="Bauchi">Bauchi State</option>
            <option value="Bayelsa">Bayelsa State</option>
            <option value="Benue">Benue State</option>
            <option value="Borno">Borno State</option>
            <option value="CrossRiver">Cross River State</option>
            <option value="Delta">Delta State</option>
            <option value="Ebonyi">Ebonyi State</option>
            <option value="Edo">Edo State</option>
            <option value="Ekiti">Ekiti State</option>
            <option value="Enugu">Enugu State</option>
            <option value="FCT">Federal Capital Territory</option>
            <option value="Gombe">Gombe State</option>
            <option value="Imo">Imo State</option>
            <option value="Jigawa">Jigawa State</option>
            <option value="Kaduna">Kaduna State</option>
            <option value="Kano">Kano State</option>
            <option value="Katsina">Katsina State</option>
            <option value="Kebbi">Kebbi State</option>
            <option value="Kogi">Kogi State</option>
            <option value="Kwara">Kwara State</option>
            <option value="Lagos">Lagos State</option>
            <option value="Nasarawa">Nasarawa State</option>
            <option value="Niger">Niger State</option>
            <option value="Ogun">Ogun State</option>
            <option value="Ondo">Ondo State</option>
            <option value="Osun">Osun State</option>
            <option value="Oyo">Oyo State</option>
            <option value="Plateau">Plateau State</option>
            <option value="Rivers">Rivers State</option>
            <option value="Sokoto">Sokoto State</option>
            <option value="Taraba">Taraba State</option>
            <option value="Yobe">Yobe State</option>
            <option value="Zamfara">Zamfara State</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lga">LGA</label>
          <input
            type="text"
            id="lga"
            value={formData.lga}
            onChange={handleChange}
            placeholder="Enter LGA"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Select your date"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time of Entry</label>
          <input
            type="text"
            id="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="Current time"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="" disabled>Status</option>
            <option value="Processing">Processing</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="NotAvailable">Not Available</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
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

        <div className="form-group submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};


export default Request;
