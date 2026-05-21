import React from 'react';
import { Link } from "react-router-dom";
import About from './About';
import Home  from './Home';
export default function MyBookings() {
    return(
        <>
        <div>
            <header className="header">
                    <div className="header-content">
                        <Link to="/" className="logo">StayFinder</Link>
                        <div className="nav-links">
                            <Link to ="/contact">Contact Us</Link>
                            <Link to="/about">About Us</Link>  
                        </div>
                    </div>
                </header>
        </div>
        <style>
            {`
            body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Home Container */
.home-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
  .nav-links a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.nav-links a:hover {
  color: #ff5a5f;
}
            `}
        </style>
        </>
    );
}