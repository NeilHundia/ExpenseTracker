import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import Navbar from './Navbar';
import Footer from './Footer';
import { GoArrowRight } from "react-icons/go";


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container">
      <div className='text'>
        <h1 className="heading">Track your expenses and manage your budget effectively!</h1>
        <p className="tagline"></p>
        <Link to="/login" className="get-started-btn">Get Started <GoArrowRight /></Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
