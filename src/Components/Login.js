import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'demo' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
      setUsername('');
      setPassword('');
    }
  };

  if (loggedIn) {
    return <Navigate to="/addexpense" />;
  }

  return (
    <div className='main'>
        <Navbar/>
        <div className="login-container">
      <h1>Login to Your Account</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          <h3>Username:</h3>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your Username' required/>
        </label>
        <label>
          <h3>Password:</h3>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' required/>
        </label>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginPage;
