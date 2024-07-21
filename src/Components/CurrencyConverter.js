import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const conversionRates = {
    INR: {
      USD: 0.013,
      EUR: 0.012,
      GBP: 0.01,
    },
    USD: {
      EUR: 0.85,
      GBP: 0.72,
      INR: 75.0,
    },
    EUR: {
      USD: 1.18,
      GBP: 0.85,
      INR: 85.0,
    },
    GBP: {
      USD: 1.39,
      EUR: 1.17,
      INR: 99.0,
    },
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount.");
      return;
    }

    const rate = conversionRates[fromCurrency][toCurrency];
    const result = amount * rate;
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div className="ccmain">
      <Navbar />
      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div className="conversion-form">
          <div className="input-row">
            <label className="csinput">
              <h3>Amount:</h3>
            </label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="input-row">
            <label className="csinput">
              <h3>From:</h3>
            </label>
            <select value={fromCurrency} onChange={handleFromCurrencyChange}>
              {Object.keys(conversionRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="input-row">
            <label className="csinput">
              <h3>To:</h3>
            </label>
            <select value={toCurrency} onChange={handleToCurrencyChange}>
              {Object.keys(conversionRates[fromCurrency]).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <button className="csinputbtn" onClick={handleConvert}>
            Convert
          </button>
        </div>
        {convertedAmount && (
          <div className="conversion-result">
            <p>
              {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CurrencyConverter;
