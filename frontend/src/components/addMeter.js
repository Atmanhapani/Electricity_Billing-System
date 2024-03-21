import React, { useState } from 'react';
import axios from 'axios';
import '../styles/addmeter.css';

function AddMeter() {
  const [userId, setUserId] = useState();
  const [billingAmount, setBillingAmount] = useState();
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [customer,setCustomer] =useState(null);


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
        const responseData = await response.json();
        const { customer } = responseData;
        console.log(customer);
        setCustomer(customer);
        window.alert("Bill Added Successfully");
        setRegistrationStatus('Registration successful!');
      } else {
        const errorMessage = await response.text(); // Extract error message from response
        console.error("Error:", errorMessage);
        setRegistrationStatus("Registration failed. Please try again.");
        window.alert(errorMessage); // Display error message
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

        {customer && (
            <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>Customer Details</h3>

              <p><strong>City:</strong> {customer.city}</p>
              <p><strong>Email:</strong> {customer.email}</p>
              <p><strong>First Name:</strong> {customer.firstName}</p>
              <p><strong>Last Name:</strong> {customer.lastName}</p>
              <p><strong>Address:</strong> {customer.address}</p>
              <p><strong>Phone Number:</strong> {customer.phoneNumber}</p>
            </div>
        )}


      </div>
  );
}

export default AddMeter;
