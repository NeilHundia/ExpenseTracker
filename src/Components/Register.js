import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Register.css'; 
import Navbar from './Navbar';
import Footer from './Footer';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    currencyType: '',
    agreeTerms: false
  });

  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegistrationComplete(true);
  };
  if (registrationComplete) {
    return <Navigate to="/addexpense" />;
  }

  return (
    <div className='registermain'>
      <Navbar/>
      <div className="register-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleRegister}>
        <label>
          <h3>Name:</h3>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          <h3>Password:</h3>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          <h3>Confirm Password:</h3>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>
        <label>
          <h3>Date of Birth:</h3>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </label>
        <label>
          <h3 className='pct'>Gender:</h3>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          <h3 className='pct'>Preferred Currency Type:</h3>
          <select  value={formData.currencyType} onChange={handleChange}>
                <option value="default">Choose Currency</option>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="Euros">Euros</option>
                <option value="Pounds">Pounds</option>
              </select>
        </label>
        {/* <label>
          <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
          <h3>I agree to the terms and conditions : </h3>
        </label> */}
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default RegisterPage;
