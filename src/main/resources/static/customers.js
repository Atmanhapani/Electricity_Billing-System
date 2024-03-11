import React from 'react';

const CustomerDetails = ({ detail }) => {
  return (
    <div>
      <h2>Customer Details :</h2>
      <p>Id : {detail.id}</p>
      <p>Name : {detail.firstName} {detail.lastName}</p>
      <p>Email : {detail.email}</p>
      <p>PhoneNumber : {detail.phoneNumber}</p>
      <p>Username : {detail.username}</p>
    </div>
  );
};

export default CustomerDetails;
