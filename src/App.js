import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AddExpense from './Components/AddExpense';
import ExpenseHistory from './Components/ExpenseHistory';
import AccountSummary from './Components/AccountSummary';
import Login from './Components/Login';
import Register from './Components/Register';
import CurrencyConverter from './Components/CurrencyConverter';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2023-11-05', category: 'Household', amount: 70.0, account: 'HDFC account ending **42', note:'Paid at ALL MAART' },
    { id: 2, date: '2023-11-04', category: 'Transportation', amount: 8.0, account: 'Cash', note:'Travel to City' },
    { id: 3, date: '2023-11-03', category: 'Household', amount: 10.0, account: 'HDFC account ending **42', note:'Paid at ALL MAART' },
    { id: 4, date: '2023-11-03', category: 'Food', amount: 70.0, account: 'HDFC account ending **42',note:'Paid at ARASAN CATERERS AND CREATORS ' },
    { id: 5, date: '2023-11-01', category: 'Food', amount: 40.0, account: 'HDFC account ending **42 ',note:'Paid at ENZO SHOP' },
  ]);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/addExpense" element={<AddExpense />} />
          <Route path="/expenseHistory" element={<ExpenseHistory expenses={expenses} />} />
          <Route path="/currencyconverter" element={<CurrencyConverter />} />
          <Route path="/accountSummary" element={<AccountSummary />} />
          <Route path='/neilhundia' component={() => {window.location.href = 'https://neilhundia.github.io/Portfolio/';return null;}}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
