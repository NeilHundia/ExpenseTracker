import React, { useState } from 'react';
import TabSelector from './TabSelector';
import './AEF.css';

const ExpenseForm = ({ onExpenseAdd }) => {
  const [selectedTab, setSelectedTab] = useState('expense');
  const [account, setAccount] = useState('default');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      account,
      date,
      amount: Number(amount),
      category,
      note,
    };

    // Update expenses list with new expense
    setExpenses([...expenses, newExpense]);

    // Pass the new expense data to the parent component
    onExpenseAdd(selectedTab, newExpense);

    // Reset form fields
    setAccount('default');
    setDate('');
    setAmount('');
    setCategory('');
    setNote('');
  };

  const handleDeleteExpense = (index) => {
    // Create a copy of the expenses array
    const updatedExpenses = [...expenses];
    
    // Remove the expense at the specified index
    updatedExpenses.splice(index, 1);
    
    // Update the expenses state
    setExpenses(updatedExpenses);
  };

  return (
    <div className="expense-form-container">
      <div className="form-container">
        <h2>Add New Entry</h2>
        <h3>Choose type:</h3>
        <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>
              <h3>Account:</h3>
              <select value={account} onChange={(e) => setAccount(e.target.value)}>
                <option value="default">Choose Account</option>
                <option value="HDFC account ending **42">HDFC account ending **42</option>
                <option value="SBI account ending **88">SBI account ending **88</option>
                <option value="Cash">Cash</option>
              </select>
            </label>
            <label>
              <h3>Date:</h3>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            {selectedTab === 'income' && (
              <>
                <label>
                  <h3>Income Amount (Rs):</h3>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount' required />
                </label>
                <label>
                  <h3>Category:</h3>
                  <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="default">Choose Category</option>
                    <option value="Salary">Salary</option>
                    <option value="Bonus">Bonus</option>
                    <option value="Lend">Lend</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </>
            )}
            {selectedTab === 'expense' && (
              <>
                <label>
                  <h3>Expense Amount (Rs):</h3>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount' required />
                </label>
                <label>
                  <h3>Category:</h3>
                  <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="default">Choose Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Household">Household</option>
                    <option value="Lend">Lend</option>
                  </select>
                </label>
              </>
            )}
            <label>
              <h3>Note (optional):</h3>
              <textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder='Enter a Description'></textarea>
            </label>
          </div>
          <button type="submit">Add {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</button>
        </form>
      </div>
      <div className="expense-history">
        <h2>Expense History</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              <div>
                <div className='his'><strong>Date:</strong> {expense.date}</div>
                <br />
                <div className='his'><strong>Account:</strong> {expense.account}</div>
                <br />
                <div className='his'><strong>Amount:</strong> Rs.{expense.amount.toFixed(2)}</div>
                <br />
                <div className='his'><strong>Category:</strong> {expense.category}</div>
                <br />
                <div className='his'><strong>Note:</strong> {expense.note}</div>
              </div>
              <button className="delete-btn" onClick={() => handleDeleteExpense(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseForm;


// import React, { useState } from 'react';
// import TabSelector from './TabSelector';
// import './AEF.css';

// const ExpenseForm = ({ onExpenseAdd, extractedExpenses }) => {
//   const [selectedTab, setSelectedTab] = useState('expense');
//   const [account, setAccount] = useState('default');
//   const [date, setDate] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [note, setNote] = useState('');
//   const [expenses, setExpenses] = useState([]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const newExpense = {
//       account,
//       date,
//       amount: Number(amount),
//       category,
//       note,
//     };

//     if (selectedTab === 'expense') {
//       // Add the name to the note if it's an extracted expense
//       const extractedName = extractedExpenses.find((exp) => exp.date === date && exp.amount === Number(amount))?.name;
//       if (extractedName) {
//         newExpense.note = `${note} (${extractedName})`;
//       }
//     }

//     // Update manually added expenses
//     setExpenses([...expenses, newExpense]);

//     // Pass the new expense data to the parent component
//     onExpenseAdd(selectedTab, newExpense);

//     // Reset form fields
//     setAccount('default');
//     setDate('');
//     setAmount('');
//     setCategory('');
//     setNote('');
//   };

//   const handleDeleteExpense = (index) => {
//     const updatedExpenses = [...expenses];
//     updatedExpenses.splice(index, 1);
//     setExpenses(updatedExpenses);
//   };

//   return (
//     <div className="expense-form-container">
//       <div className="form-container">
//         <h2>Add New Entry</h2>
//         <h3>Choose type:</h3>
//         <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <label>
//               <h3>Account:</h3>
//               <select value={account} onChange={(e) => setAccount(e.target.value)}>
//                 <option value="default">Choose Account</option>
//                 <option value="HDFC account ending **42">HDFC account ending **42</option>
//                 <option value="SBI account ending **88">SBI account ending **88</option>
//                 <option value="Cash">Cash</option>
//               </select>
//             </label>
//             <label>
//               <h3>Date:</h3>
//               <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//             </label>
//             {selectedTab === 'income' && (
//               <>
//                 <label>
//                   <h3>Income Amount (Rs):</h3>
//                   <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" required />
//                 </label>
//                 <label>
//                   <h3>Category:</h3>
//                   <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                     <option value="default">Choose Category</option>
//                     <option value="Salary">Salary</option>
//                     <option value="Bonus">Bonus</option>
//                     <option value="Lend">Lend</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </label>
//               </>
//             )}
//             {selectedTab === 'expense' && (
//               <>
//                 <label>
//                   <h3>Expense Amount (Rs):</h3>
//                   <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" required />
//                 </label>
//                 <label>
//                   <h3>Category:</h3>
//                   <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                     <option value="default">Choose Category</option>
//                     <option value="Food">Food</option>
//                     <option value="Travel">Travel</option>
//                     <option value="Household">Household</option>
//                     <option value="Lend">Lend</option>
//                   </select>
//                 </label>
//               </>
//             )}
//             <label>
//               <h3>Note (optional):</h3>
//               <textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter a Description"></textarea>
//             </label>
//           </div>
//           <button type="submit">Add {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</button>
//         </form>
//       </div>
//       <div className="expense-history">
//         <h2>Expense History</h2>
//         <ul>
//           {/* Render manually added expenses */}
//           {expenses && expenses.map((expense, index) => (
//             <li key={index} className="expense-item">
//               <div>
//                 <div className="his"><strong>Date:</strong> {expense.date}</div>
//                 <br />
//                 <div className="his"><strong>Account:</strong> {expense.account}</div>
//                 <br />
//                 <div className="his"><strong>Amount:</strong> Rs.{expense.amount.toFixed(2)}</div>
//                 <br />
//                 <div className="his"><strong>Category:</strong> {expense.category}</div>
//                 <br />
//                 <div className="his"><strong>Note:</strong> {expense.note}</div>
//               </div>
//               <button className="delete-btn" onClick={() => handleDeleteExpense(index)}>
//                 Delete
//               </button>
//             </li>
//           ))}
//           {/* Render extracted expenses */}
//           {extractedExpenses && extractedExpenses.map((extractedExpense, index) => (
//             <li key={`extracted-${index}`} className="expense-item">
//               <div>
//                 <div className="his"><strong>Date:</strong> {extractedExpense.date}</div>
//                 <br />
//                 <div className="his"><strong>Account:</strong> {extractedExpense.account}</div>
//                 <br />
//                 <div className="his"><strong>Amount:</strong> Rs.{extractedExpense.amount.toFixed(2)}</div>
//                 <br />
//                 <div className="his"><strong>Category:</strong> {extractedExpense.category}</div>
//                 <br />
//                 <div className="his"><strong>Note:</strong> {`${extractedExpense.note} (${extractedExpense.name})`}</div>
//               </div>
//               {/* Optional: Include delete button for extracted expenses */}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ExpenseForm;
