import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/BillPage.css';
import moment from 'moment';
import bigInt from 'big-integer';


function BillPage() {
    const [bills, setBills] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        const t = sessionStorage.getItem("token");
        setToken(t);
    }, []);

    useEffect(() => {
        if (!token) return; // If token is not available, do nothing

        // Fetch bill data from your backend API
        axios.get('http://localhost:7778/getbills', {
            params: {
                token: token // Pass the token as a parameter in the request
            }
        })
            .then(response => {
                setBills(response.data);
            })
            .catch(error => {
                console.error('Error fetching bill data:', error);
            });
    }, [token]); // Include token in the dependency array

    // Function to format the timestamp to a human-readable format
    const formatTimestamp = (timestampComponents) => {
        if (!timestampComponents || timestampComponents.length !== 7) {
            return "Invalid Timestamp Components";
        }

        const [year, month, day, hour, minute, second, milliseconds] = timestampComponents;

        const date = new Date(year, month - 1, day, hour, minute, second, milliseconds / 1e6);

        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }

        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).format(date);
    };

    // Function to handle payment for a bill
    const handlePayment = (bill) => {
        // Make a POST request to the server to pay the bill
        axios.post('http://localhost:7778/pay', bill)
            .then(response => {
                console.log('Payment successful:', response.data);
                window.alert("Payment done");
                // Optionally, you can update the UI or handle the response accordingly
            })
            .catch(error => {
                console.error('Error paying bill:', error);
            });
    };

    return (
        <div>
            <h1>Bills</h1>
            <table className="bill-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Billing Time</th>
                    <th>Payment Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {bills.map(bill => (
                    <tr key={bill.id}>
                        <td>{bill.id}</td>
                        <td>{bill.customer.firstName} {bill.customer.lastName}</td>
                        <td>{bill.amount}</td>
                        <td>{formatTimestamp(bill.billingTime)}</td>
                        <td>{bill.status ? "Payment Done" : "Unpaid"}</td>
                        <td>
                            {!bill.status && (
                                <button onClick={() => handlePayment(bill)}>Pay</button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BillPage;
