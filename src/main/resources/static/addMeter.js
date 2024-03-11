import React, { useState, useEffect } from 'react';

const AddMeter = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsg('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [msg]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const consumerNumber = formData.get('consumerNumber');
    const meterNumber = formData.get('meter_number');

    // Your add meter logic here
  };

  return (
    <div>
      {msg && (
        <div className="alert-success" role="alert">
          {msg}
        </div>
      )}
      <section className="vh-100 bg-image" style={{ backgroundColor: 'rgb(0, 0, 77)' }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Add meter</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input type="hidden" value={sessionStorage.getItem('username')} name="username" id="username" className="form-control form-control-lg" />
                      </div>
                      <div className="form-outline mb-4">
                        <input type="hidden" value={sessionStorage.getItem('consumerNumber')} name="consumerNumber" id="consumerNumber" className="form-control form-control-lg" />
                      </div>
                      <div className="form-outline mb-4">
                        <input type="number" name="meter_number" id="meter_number" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="meter_number">Meter Number</label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <input type="submit" className="buttonclass" value="Add Meter" style={{ backgroundColor: 'blue', color: 'white', borderRadius: '5px', padding: '10px' }} />
                      </div>
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

export default AddMeter;
