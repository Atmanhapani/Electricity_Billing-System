import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file here

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: 'blue', color: 'white' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Electricity Billing System</a>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end${isNavOpen ? ' show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/" className="nav-link">HOME</Link></li>
            <li className="nav-item"><Link to="/addCustomer" className="nav-link">REGISTER AS CUSTOMER</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link">LOGIN AS CUSTOMER</Link></li>
            <li className="nav-item"><Link to="/loginReader" className="nav-link">LOGIN AS READER</Link></li>
            <li className="nav-item"><Link to="/addMeterData" className="nav-link">ADD METER DATA</Link></li>
            <li className="nav-item"><Link to="/addMeter" className="nav-link">REGISTER A METER</Link></li>
            <li className="nav-item"><Link to="/logout" className="nav-link">LOGOUT</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="container mt-5 pt-4 mb-6">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2>Welcome to the Electricity Billing System</h2>
          <p>This is a system designed to manage electricity billing for customers. You can register as a customer, add meter data, and perform various other tasks related to electricity billing.</p>
          <p>Feel free to navigate through the system using the navigation bar above.</p>
        </div>
      </div>
    </div>
  );
}

function AddCustomer() {
  return <h2>Register as a Customer</h2>;
}

function Login() {
  return <h2>Login as a Customer</h2>;
}

function LoginReader() {
  return <h2>Login as a Reader</h2>;
}

function AddMeterData() {
  return <h2>Add Meter Data</h2>;
}

function AddMeter() {
  return <h2>Register a Meter</h2>;
}

function Logout() {
  return <h2>Logout</h2>;
}

function NotFound() {
  return <h2>404 - Not Found</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addCustomer" component={AddCustomer} />
          <Route path="/login" component={Login} />
          <Route path="/loginReader" component={LoginReader} />
          <Route path="/addMeterData" component={AddMeterData} />
          <Route path="/addMeter" component={AddMeter} />
          <Route path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
