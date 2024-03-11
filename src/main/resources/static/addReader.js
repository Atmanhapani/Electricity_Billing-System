import React from 'react';

const Register = () => {
  return (
    <div>
      <h2>Register Yourself</h2>
      {msg && <div>{msg}</div>}
      <section className="vh-100 bg-image" style={{ backgroundColor: 'rgb(0, 0, 77)' }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <form method="POST" name="add_customer" action={`${request.getContextPath()}/add/reader`}>
                      <div className="form-outline mb-4">
                        <input type="text" value={firstName} name="firstName" id="firstName" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="firstName">First name</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" value={lastName} name="lastName" id="lastName" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="lastName">Last name</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" value={userName} name="username" id="username" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="userusernameName">Username</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" value={password} name="password" id="password" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="email" value={email} name="email" id="email" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="email">Email</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" value={phoneNumber} name="phoneNumber" id="phoneNumber" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="phoneNumber">Phone number</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" value={address} name="address" id="address" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="address">Address</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" value={city} name="city" id="city" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="city">City</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" value={state} name="state" id="state" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="state">State</label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <input type="submit" className="buttonclass" value="Register" style={{ backgroundColor: 'rgb(0, 0, 77)', color: 'white', borderRadius: '5px', padding: '10px' }} />
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
