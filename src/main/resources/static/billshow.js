import React from 'react';

const PaymentDetails = ({ username, consumerNumber, meterNumber, previousReading, currentReading, amount }) => {
  return (
    <div className="container">
      <div className="card">
        <h3>Username: {username}</h3>
        <h3>Consumer Number: {consumerNumber}</h3>
        <h3>Meter Number: {meterNumber}</h3>
        <h3>Previous Reading: {previousReading}</h3>
        <h3>Current Reading: {currentReading}</h3>
        <p>Amount you are required to pay: {amount}</p>
        <br /> <br /> <a className="book_now" href="/payment">Pay {amount}</a>
      </div>
    </div>
  );
};

export default PaymentDetails;
