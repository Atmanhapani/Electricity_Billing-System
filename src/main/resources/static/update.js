import React from 'react';

const UpdateDetails = ({ msg, id, customer }) => {
  return (
    <html>
      <head>
        <title>Termwork project</title>
      </head>
      <body>
        <h2>Update Your Details</h2>
        {msg && <div>{msg}</div>}
        <h3>Update User</h3>
        <form method="POST" name="update_customer" action={`/update/customer`}>
          <input type="hidden" name="id" value={id} />
          <label>
            FirstName:
            <input name="firstName" defaultValue={customer.firstName} type="text" />
          </label>
          <br />
          <br />
          <label>
            LastName:
            <input name="lastName" defaultValue={customer.lastName} type="text" />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input name="email" defaultValue={customer.email} type="text" />
          </label>
          <br />
          <br />
          <label>
            Phone Number:
            <input name="phoneNumber" defaultValue={customer.phoneNumber} type="text" />
          </label>
          <br />
          <br />
          <input value="Update User" type="submit" />
        </form>
      </body>
    </html>
  );
};

export default UpdateDetails;
