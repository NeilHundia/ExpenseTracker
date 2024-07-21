import React from 'react';
import './TS.css';
const TabSelector = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="tab-selector">
      <button className={selectedTab === 'income' ? 'active' : ''} onClick={() => setSelectedTab('income')}>Income</button>
      <button className={selectedTab === 'expense' ? 'active' : ''} onClick={() => setSelectedTab('expense')}>Expense</button>
      <button className={selectedTab === 'transfer' ? 'active' : ''} onClick={() => setSelectedTab('transfer')}>Transfer</button>
    </div>
  );
};

export default TabSelector;
