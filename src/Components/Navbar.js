import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-brand">
        <h2>Expense Tracker</h2>
      </div>
      <div className="nav-links">
        <Link to="/homepage">Home</Link>
        <Link to="/addExpense">Add Expense</Link>
        <Link to="/expenseHistory">Expense History</Link>
        <Link to="/currencyconverter">Currency Converter</Link>
      </div>
    </div>
  );
};

export default Navbar;
