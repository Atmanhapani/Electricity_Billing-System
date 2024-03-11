// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/Register";
import LoginReader from "./components/loginReader";
import BillingForm from "./components/Billingform";
import PaymentDetails from "./components/billshow";
import Reader from "./components/readerHome";
import AddMeter from "./components/addMeter";


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // You can implement a function here to check if the user is already logged in
    // and set the user state accordingly.
  }, []);

  const handleLogout = () => {
    // Implement a function to log out the user and update the user state
  };

  return (
      <Router>


          <Routes>
            {/*<Route path="/login" element={<Login setUser={setUser} />} />*/}
            {/*<Route path="/signup" element={<Signup setUser={setUser} />} />*/}
            {/*<Route path="/add-item" element={<AddItem /> } />*/}
            {/*<Route path="/item" element={<ItemList user={user} />} />*/}
            {/*<Route path="/welcome" element={<Welcome  />} />*/}
            {/*<Route path="/my-items" element={<MyItems  />} />*/}

            <Route path="/" element={<Home  />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/addCustomer" element={<Register />} />
              <Route path="/home" element={<Home  />} />
              <Route path="/login" element={<Login  />} />
              <Route path="/loginReader" element={<LoginReader  />} />
              <Route path="/billingform" element={<BillingForm  />} />
            <Route path="/billshow" element={<PaymentDetails  />} />
            <Route path="/readerHome" element={< Reader />} />

            <Route path="/addMeaterData" element={< AddMeter />} />


          </Routes>

      </Router>
  );
};

export default App;
