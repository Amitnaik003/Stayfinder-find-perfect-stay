import React from 'react';
import { Link } from "react-router-dom";
import About from './About';
import Home  from './Home';
export default function Contact() {
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
                
                {/* Hero Banner */}
                <div className="contact-banner">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop" alt="Contact Us" className="banner-image" />
                    <div className="banner-overlay">
                        <h1>Get In Touch With Us</h1>
                    </div>
                </div>

                <div className="contact-container">
                    <div className="contact-intro">
                        <p>If you have any questions or need assistance, please feel free to reach out to us:</p>
                    </div>

                    <div className="contact-cards">
                        {/* Email Card */}
                        <div className="contact-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbLfhT7wqXxJz8xZqE3jZvL_aGBE0TjPW7A&s" alt="Email" className="contact-icon" />
                            <h3>Email</h3>
                            <p>support@stayfinder.com</p>
                            <p>info@stayfinder.com</p>
                        </div>

                        {/* Phone Card */}
                        <div className="contact-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJV_VnC3YnJzU5zD8C3xL5K6vZJzL7O8eqQ&s" alt="Phone" className="contact-icon" />
                            <h3>Phone</h3>
                            <p>+91 9876 543 210</p>
                            <p>+91 9876 543 211</p>
                        </div>

                        {/* Address Card */}
                        <div className="contact-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT2S3CnqP4nGpG5hF8xZqY1M9K2L3N4O5P6&s" alt="Location" className="contact-icon" />
                            <h3>Address</h3>
                            <p>123 StayFinder Street</p>
                            <p>Bangalore, India 560001</p>
                        </div>
                    </div>

                    {/* Office Image */}
                    <div className="office-section">
                        <h2>Visit Our Office</h2>
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop" alt="Our Office" className="office-image" />
                        <p>We welcome you to visit our modern office space located in the heart of Bangalore.</p>
                    </div>
                </div>
                
                <div>
                 <footer className="footer">
                    <p>© 2025 StayFinder. All rights reserved.</p>
                </footer>
                </div>
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
  width: 100%;
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

/* Banner Section */
.contact-banner {
  position: relative;
  margin-top: 60px;
  height: 400px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-overlay h1 {
  color: white;
  font-size: 44px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Contact Container */
.contact-container {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.contact-intro {
  text-align: center;
  margin-bottom: 40px;
}

.contact-intro p {
  font-size: 18px;
  color: #666;
}

/* Contact Cards */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.contact-card {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.contact-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 50%;
  object-fit: cover;
}

.contact-card h3 {
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
}

.contact-card p {
  font-size: 16px;
  color: #666;
  margin: 8px 0;
}

/* Office Section */
.office-section {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.office-section h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
}

.office-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.office-section p {
  font-size: 16px;
  color: #666;
}

/* Footer */
.footer {
  background-color: white;
  color: #333;
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  margin-top: auto;
}

            `}
        </style>
        </>
    );
}