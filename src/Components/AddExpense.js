import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import AccountSummary from './AccountSummary';
import Navbar from './Navbar';
import Footer from './Footer';
import './AEF.css'; 

const AddExpense = () => {
  const [totalBalance, setTotalBalance] = useState(10000);
  const [bankAmount1, setBank1Amount] = useState(5000); 
  const [bankAmount2, setBank2Amount] = useState(2000); 
  const [cashAmount, setCashAmount] = useState(3000);
  const [expenses, setExpenses] = useState([]);

  const handleExpenseAddition = (expenseType, expenseData) => {
    const { amount, account } = expenseData;
  
    if (expenseType === 'income') {
      setTotalBalance((prevBalance) => prevBalance + amount);
      if (account === 'HDFC account ending **42') {
        setBank1Amount((prevAmount) => prevAmount + amount);
      } else if (account === 'SBI account ending **88') {
        setBank2Amount((prevAmount) => prevAmount + amount);
      } else if (account === 'Cash') {
        setCashAmount((prevAmount) => prevAmount + amount);
      }
    } else if (expenseType === 'expense') {
      setTotalBalance((prevBalance) => prevBalance - amount);
      if (account === 'HDFC account ending **42') {
        setBank1Amount((prevAmount) => prevAmount - amount);
      } else if (account === 'SBI account ending **88') {
        setBank2Amount((prevAmount) => prevAmount - amount);
      } else if (account === 'Cash') {
        setCashAmount((prevAmount) => prevAmount - amount);
      }
    }
    setExpenses([...expenses, expenseData]);
  };
  
  return (
    <div className="AddExpense-container">
      <Navbar />
      <ExpenseForm onExpenseAdd={handleExpenseAddition} />
      <AccountSummary
        totalBalance={totalBalance}
        bankAmount1={bankAmount1}
        bankAmount2={bankAmount2}
        cashAmount={cashAmount}
      />
      <Footer />
    </div>
  );
};

export default AddExpense;