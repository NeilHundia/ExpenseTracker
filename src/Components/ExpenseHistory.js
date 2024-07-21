import React, { useState } from 'react';
import './Exphis.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ScreenshotUploader from './ScreenshotUploader';

const ExpenseHistory = ({ expenses, onDeleteExpense }) => {
  const [showExpenseHistory, setShowExpenseHistory] = useState(false);

  const handleUploadComplete = () => {
    setShowExpenseHistory(true); 
  };

  return (
    <div className='ehmain'>
      <Navbar/>
      <div className="expense-history-container">
        <div className='ssupload'>
        <h2>Upload screenshot to add expenses</h2>
        <ScreenshotUploader onUploadComplete={handleUploadComplete} />
        </div>
        {showExpenseHistory && (
          <>
            <h2>Expense History</h2>
            {expenses.length === 0 ? (
              <p>No expenses recorded.</p>
            ) : (
              <div className='expense-listdiv'>
                <ul className="expense-list">
                {expenses.map((expense, index) => (
                  <li key={index} className="expense-item">
                    <div className="expense-details">
                      <div>
                        <h3>Date:</h3> {expense.date}
                      </div>
                      <div>
                        <h3>Account:</h3> {expense.account}
                      </div>
                      <div>
                        <h3>Amount:</h3> Rs.{expense.amount}
                      </div>
                      <div>
                        <h3>Category:</h3> {expense.category}
                      </div>
                      <div>
                        <h3>Note:</h3> {expense.note}
                      </div>
                    </div>
                    <button className="delete-button" onClick={() => onDeleteExpense(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              </div>
            )}
          </>
        )}
      </div>
      <Footer className='ehfooter'/>
    </div>
  );
};

export default ExpenseHistory;
