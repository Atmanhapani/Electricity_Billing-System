import React from 'react';

const AddMeterDataPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>ELECTRICITY BILLING SYSTEM | ADD METER DATA</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                      crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Candal&family=Montserrat:wght@400;500&display=swap"
                      rel="stylesheet"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: 'blue', color: 'white' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Electricity Billing System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="/" className="nav-link">HOME</a></li>
                            <li className="nav-item"><a href="/addMeterData" className="nav-link">ADD METER DATA</a></li>
                            <li className="nav-item"><a href="/logout" className="nav-link">LOGOUT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5" style={{ paddingTop: '60px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} name="login_customer">
                            <div className="form-outline mb-4">
                                <input type="number" name="consumerNumber" id="consumerNumber" className="form-control form-control-lg"/>
                                <label className="form-label" htmlFor="consumerNumber">Consumer Number</label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="number" name="meter_number" id="meter_number" className="form-control form-control-lg"/>
                                <label className="form-label" htmlFor="meter_number">Meter Number</label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="number" name="billingRate" id="billingRate" className="form-control form-control-lg"/>
                                <label className="form-label" htmlFor="billingRate"> Billing Rate </label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="number" name="previousReading" id="previousReading" className="form-control form-control-lg"/>
                                <label className="form-label" htmlFor="previousReading"> Previous Reading </label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="number" name="currentReading" id="currentReading" className="form-control form-control-lg"/>
                                <label className="form-label" htmlFor="currentReading"> Current Reading </label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="date" name="readingDate" id="readingDate" className="form-control form-control-lg"/>
                                <label className="form-label" htmlFor="readingDate"> Date </label>
                            </div>
                            <div className="d-flex justify-content-center">
                                <input type="submit" className="buttonclass" value="ADD" style={{ backgroundColor: 'blue', color: 'white', borderRadius: '5px', padding: '10px' }}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
                    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
                    crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
                    integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
                    crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-pzj9p1F2lCj9kgt6UkRAfIEQ+hTolviKxKqR6FcAib4Jk3D60ADK3cv0S+2D88xy"
                    crossOrigin="anonymous"></script>
            </body>
        </html>
    );
};

export default AddMeterDataPage;
