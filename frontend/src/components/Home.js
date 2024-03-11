import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ sessionScope }) => {
  useEffect(() => {
    const handleNavLinkClick = () => {
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");

      if (navbarToggler.classList.contains("collapsed") && !navbarCollapse.classList.contains("show")) {
        return;
      }

      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.classList.add("collapsed");
        navbarCollapse.classList.remove("show");
      } else {
        navbarToggler.classList.remove("collapsed");
        navbarCollapse.classList.add("show");
      }
    };

    document.querySelectorAll(".nav-link").forEach(navLink => {
      navLink.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      document.querySelectorAll(".nav-link").forEach(navLink => {
        navLink.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

  return (
      <>
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>ELECTRICITY BILLING SYSTEM | HOME </title>
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
          `}
          </style>
        </head>
        <body>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: 'blue', color: 'white' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Electricity Billing System</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              {sessionScope && sessionScope.username && sessionScope.type != null && (
                  <ul className="navbar-nav">
                    <li className="nav-item"><a href="<%=request.getContextPath()%>/" className="nav-link">HOME</a></li>
                    <li className="nav-item"><a href="<%=request.getContextPath()%>/addMeterData" className="nav-link">ADD METER DATA</a></li>
                    <li className="nav-item"><a href="<%=request.getContextPath()%>/logout" className="nav-link">LOGOUT</a></li>
                  </ul>
               )}
              {(!sessionScope || !sessionScope.username || sessionScope.type == null) && (
                  <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">HOME</Link></li>
                    <li className="nav-item"><Link to="/addCustomer" className="nav-link">REGISTER AS CUSTOMER</Link>
                    </li>
                    <li className="nav-item"><Link to="/login" className="nav-link">LOGIN AS CUSTOMER</Link></li>
                    <li className="nav-item"><Link to="/loginReader" className="nav-link">LOGIN AS READER</Link></li>
                  </ul>

              )}
              {sessionScope && sessionScope.username && sessionScope.type == null && (
                  <ul className="navbar-nav">
                    <li className="nav-item"><a href="<%=request.getContextPath()%>/" className="nav-link">HOME</a></li>
                    <li className="nav-item"><a href="<%=request.getContextPath()%>/addMeter" className="nav-link">REGISTER
                      A METER</a></li>
                    <li className="nav-item"><a href="<%=request.getContextPath()%>/logout" className="nav-link">LOGOUT</a></li>
                  </ul>
              )}
            </div>
          </div>
        </nav>

        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
          <div>
            <h1 className="text-center mb-4">Made Easier For You</h1>
            <p className="text-center mb-4">Experience hassle-free and efficient electricity billing with our reliable and user-friendly system</p>

                <div className="text-center">
                  <Link to="/billingform" className="pay_now btn btn-primary btn-lg">PAY BILL</Link>
                </div>

            {/*{(!sessionScope || !sessionScope.username) && (*/}
            {/*    <div className="text-center">*/}
            {/*      <Link to="/login" className="pay_now btn btn-primary btn-lg">PAY BILL</Link>*/}
            {/*    </div>*/}
            {/*)}*/}

          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-pzj9p1F2lCj9kgt6UkRAfIEQ+hTolviKxKqR6FcAib4Jk3D60ADK3cv0S+2D88xy" crossOrigin="anonymous"></script>
        </body>
      </>
  );
};

export default Home;
