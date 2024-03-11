import React from 'react';
import {Link} from "react-router-dom";

const HomePage = ({ sessionScope }) => {
    return (
        <html>
        <head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Home Page</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <style>
                {`
                    body {
                        background-image: url('/static/images/pexels-pixabay-258154.jpg');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                        align-items: center;
                        font-family: Montserrat, sans-serif;
                        text-align: center;
                    }

                    .username {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        color: white;
                        font-size: 16px;
                        display: inline-block;
                    }

                    .nav {
                        list-style: none;
                        margin-top: 80px;
                        text-align: center;
                    }

                    .nav li {
                        display: inline;
                        opacity: 1.0;
                    }

                    .nav a {
                        display: inline-block;
                        padding: 20px;
                        text-decoration: none;
                        color: white;
                        font-family: Arial, Helvetica, sans-serif;
                        font-size: 20px;
                        font-weight: bold;
                        text-shadow: 65px;
                        transition: font-size 0.4s;
                    }

                    .nav a:hover {
                        font-size: 25px;
                    }

                    .image {
                        background: rgba(0, 0, 77, 0.9);
                        padding: 50px;
                        position: relative;
                    }

                    h1, p {
                        color: white;
                        text-shadow: 65px;
                    }

                    .book_now {
                        background-color: rgba(0, 0, 77, 0.9);
                        padding: 10px;
                        color: white;
                        font-size: 18px;
                        font-weight: bold;
                        text-align: center;
                        margin-top: 80px;
                        border-radius: 5px;
                        text-shadow: 65px;
                        transition: font-size 0.4s;
                        text-decoration: none;
                    }
                `}
            </style>
        </head>
        <body>
        <center>
            <div>
                <div className="username">
                    <Link to="/" className="userClass">Welcome </Link>
                </div>
                <div className="image">
                    <ul className="nav">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/addMeaterData">ADD METER DATA</Link></li>
                        <li><Link to="/logout">LOGOUT</Link></li>
                    </ul>
                </div>
            </div>
            <h1>Made Easier For You</h1>
            <p>Experience hassle-free and efficient electricity billing with our reliable and user-friendly system</p>

        </center>
        </body>
        </html>
    );
};

export default HomePage;
