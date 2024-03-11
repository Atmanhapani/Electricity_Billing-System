import React, { useState, useEffect } from 'react';

function BillingForm({ customer, meter_number }) {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMsg('');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [msg]);

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ELECTRICITY BILLING SYSTEM | Billing form</title>
        <style>
          {`
            .alert {
              padding: 15px;
              margin-bottom: 20px;
              border: 1px solid transparent;
              border-radius: 4px;
            }

            .alert-success {
              color: #3c763d;
              background-color: #dff0d8;
              border-color: #d6e9c6;
            }

            .alert-danger {
              color: #a94442;
              background-color: #f2dede;
              border-color: #ebccd1;
            }
          `}
        </style>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <div id="messages" className="alert-success">
          {msg && msg}
        </div>
        <section className="vh-100 bg-image" style={{ backgroundColor: 'rgb(0, 0, 77)' }}>
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Generate Your Bill</h2>
                      <form method="POST" name="pay_bill_form" action="/generateBill">
                        <div className="form-outline mb-4">
                          <input type="hidden" value={customer.username} name="username" id="username" className="form-control form-control-lg" />
                        </div>
                        <div className="form-outline mb-4">
                          <input type="hidden" value={customer.consumerNumber} name="consumerNumber" id="consumerNumber" className="form-control form-control-lg" />
                        </div>
                        <div className="form-outline mb-4">
                          <input type="text" value={meter_number} name="meter_number" id="meter_number" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="meter_number">Meter Number</label>
                        </div>
                        <div className="d-flex justify-content-center">
                          <input type="submit" className="buttonclass" value="Generate Bill" style={{ backgroundColor: 'blue', color: 'white', borderRadius: '5px', padding: '10px' }} />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}

export default BillingForm;
