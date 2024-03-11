import React, { useState } from 'react';
import axios from 'axios';

function AddMeter() {
  const [userId, setUserId] = useState();
  const [billingAmount, setBillingAmount] = useState();
  const [registrationStatus, setRegistrationStatus] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("send with ", userId + " ", billingAmount);

    const formData = {
      userId,
      billingAmount,
    };
    console.log("send with ",userId+" ",billingAmount);

    try {
      // Make the POST request to the server API
      const response = await fetch('http://localhost:7778/addbill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        window.alert("Added Successfully");
        setRegistrationStatus('Registration successful!');
      } else {
        setRegistrationStatus('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setRegistrationStatus('An error occurred while registering. Please try again later.');
    }
  };

  return (
      <div>
        <h2>Billing Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">User ID:</label>
            <input
                type="text"
                id="userId"
                value={userId}
                onChange={(event) => setUserId(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="billingAmount">Billing Amount:</label>
            <input
                type="text"
                id="billingAmount"
                value={billingAmount}
                onChange={(event) => setBillingAmount(event.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default AddMeter;
