import React from 'react';
import './LoginSignup.css';

const LoginPage = () => {
  return (
    <div className="form-container">
      <form>
        <h3>Login</h3>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group submit-btn">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
