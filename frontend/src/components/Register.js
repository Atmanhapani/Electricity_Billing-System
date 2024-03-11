import React, { useState } from 'react';

const Register = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [consumerNumber, setConsumerNumber] = useState(0);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("send with ", firstName + " ", consumerNumber, " ", email);

    const formData = {
      firstName,
      lastName,
      consumerNumber,
      username,
      password,
      email,
      phoneNumber,
      address,
      city,
      state
    };
    console.log("send with ",username+" ",consumerNumber, " ",email);

    try {
      // Make the POST request to the server API
      const response = await fetch('http://localhost:7778/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Registration successful
        setRegistrationStatus('Registration successful!');
      } else {
        // Registration failed
        setRegistrationStatus('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setRegistrationStatus('An error occurred while registering. Please try again later.');
    }
  };

  return (
      <>
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>ELECTRICITY BILLING SYSTEM</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Candal&family=Montserrat:wght@400;500&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/css/style.css" />
          <style>
            {`
            .social-links {
              margin-top: 20px;
            }

            .social-links a {
              color: white;
              margin-right: 10px;
              font-size: 20px;
            }

            .container {
              margin-top: 5rem;
              padding-top: 4rem;
              margin-bottom: 6rem;
            }

            .form-outline {
              position: relative;
            }

            .form-outline input[type="text"],
            .form-outline input[type="password"],
            .form-outline input[type="email"] {
              padding: 0.5rem 0.75rem;
            }

            .form-outline label {
              position: absolute;
              top: 0;
              left: 0;
              color: #777;
              background-color: #fff;
              padding: 0.5rem 0.75rem;
              transition: transform 0.3s ease-out, opacity 0.3s ease-out;
              pointer-events: none;
            }

            .form-outline input:focus ~ label,
            .form-outline input:not(:placeholder-shown) ~ label {
              transform: translateY(-1.5rem);
              font-size: 0.8rem;
              opacity: 0.5;
            }

            .btn-lg {
              padding: 1rem 1.5rem;
              font-size: 1.25rem;
            }

            .mt-5 {
              margin-top: 3rem;
            }

            .text-muted {
              color: #6c757d;
            }

            .fw-bold {
              font-weight: 700;
            }
          `}
          </style>
        </head>
        <body>
        <div className="container mt-5 pt-4 mb-6">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" id="firstName" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="firstName">First name</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" id="lastName" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="lastName">Last name</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={consumerNumber} onChange={(e) => setConsumerNumber(e.target.value)} name="consumerNumber" id="consumerNumber" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="consumerNumber">Consumer Number</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} name="username" id="username" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="userusernameName">Username</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="password">Password</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="email">Email</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phoneNumber" id="phoneNumber" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="phoneNumber">Phone number</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="address" id="address" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="address">Address</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} name="city" id="city" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="city">City</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={state} onChange={(e) => setState(e.target.value)} name="state" id="state" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="state">State</label>
                </div>
                <div className="d-flex justify-content-center">
                  <input type="submit" className="btn btn-primary btn-lg" value="Register" />
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  {registrationStatus}
                </p>
              </form>
            </div>
          </div>
        </div>
        </body>
      </>
  );
};

export default Register;
