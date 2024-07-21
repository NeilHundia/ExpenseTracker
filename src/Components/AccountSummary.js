import React, { useState } from 'react';
import './AS.css';
import { CgSelect } from 'react-icons/cg';

const AccountSummary = ({ totalBalance, bankAmount1, bankAmount2, cashAmount }) => {
  const [showSplit, setShowSplit] = useState(false);

  const toggleSplitView = () => {
    setShowSplit((prevState) => !prevState);
  };

  return (
    <div className="account-summary">
      <h2>Account Summary</h2>
      <div className="total-balance" onClick={toggleSplitView}>
        <h3>Total Balance</h3>
        <p>Rs. {totalBalance}</p>
        <CgSelect />
      </div>
      <div className={`balance-details ${showSplit ? 'show' : ''}`}>
        <div className="bd1">
          <h4>HDFC account ending **42</h4>
          <p>Rs. {bankAmount1}</p>
        </div>
        <div className="bd1">
          <h4>SBI account ending **88</h4>
          <p>Rs. {bankAmount2}</p>
        </div>
        <div className="bd1">
          <h4>Amount in Cash</h4>
          <p>Rs. {cashAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
