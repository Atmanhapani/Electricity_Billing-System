import React from 'react';

const Login = ({ username, password }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ELECTRICITY BILLING SYSTEM | LOGIN</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Candal&family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        />
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
        `}
        </style>
        <script>
          {`
          document.addEventListener("DOMContentLoaded", function () {
            const navLinks = document.querySelectorAll(".nav-link");

            navLinks.forEach(function (navLink) {
              navLink.addEventListener("click", function () {
                const navbarToggler = document.querySelector(".navbar-toggler");
                const navbarCollapse = document.querySelector(".navbar-collapse");

                if (
                  navbarToggler.classList.contains("collapsed") &&
                  !navbarCollapse.classList.contains("show")
                ) {
                  // Do nothing if the toggler is already collapsed and the collapse content is not shown
                  return;
                }

                if (navbarCollapse.classList.contains("show")) {
                  navbarToggler.classList.add("collapsed");
                  navbarCollapse.classList.remove("show");
                } else {
                  navbarToggler.classList.remove("collapsed");
                  navbarCollapse.classList.add("show");
                }
              });
            });
          });
        `}
        </script>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: 'blue', color: 'white' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Electricity Billing System</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><a href="/" className="nav-link">HOME</a></li>
                <li className="nav-item"><a href="/addCustomer" className="nav-link">REGISTER AS CUSTOMER</a></li>
                <li className="nav-item"><a href="/login" className="nav-link">LOGIN AS CUSTOMER</a></li>
                <li className="nav-item"><a href="/loginReader" className="nav-link">LOGIN AS READER</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5 pt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form method="POST" name="login_reader" action="/login/customer">
                <div className="form-outline mb-4">
                  <input type="text" value={username} name="username" id="username" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="username">Username</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={password} name="password" id="password" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="password">Password</label>
                </div>
                <div className="d-flex justify-content-center">
                  <input type="submit" className="buttonclass" value="Login" style={{ backgroundColor: 'blue', color: 'white', borderRadius: '5px', padding: '10px' }} />
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Don't have an account? <a href="/addCustomer" className="fw-bold text-body"><u>Register here</u></a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-pzj9p1F2lCj9kgt6UkRAfIEQ+hTolviKxKqR6FcAib4Jk3D60ADK3cv0S+2D88xy" crossorigin="anonymous"></script>
      </body>
    </html>
  );
};

export default Login;
