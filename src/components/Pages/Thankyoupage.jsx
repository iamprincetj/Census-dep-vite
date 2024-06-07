import React from 'react';
import './App.css'; // Assuming you place your styles in App.css

const FormComponent = () => {
  return (
    <div className="form-container">
      <form action="/thank-you.html">
        <div className="hero-image">
          <img
            src="https://img.freepik.com/free-vector/lettering-design-with-positive-message_23-2149008841.jpg?t=st=1715781582~exp=1715785182~hmac=f90e81885fc18a23be350aab9094e50bf526884a6047806e71832f9d5c5359ca&w=740"
            alt="Hero"
          />
        </div>
        <h3>Form Title</h3>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div className="form-group submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
