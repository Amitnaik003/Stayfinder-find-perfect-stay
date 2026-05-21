import React from 'react';
import { Link } from "react-router-dom";
import Contact from './Contact';
import Home  from './Home';
export default function About() {
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
                <div className="about-banner">
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=400&fit=crop" alt="About StayFinder" className="banner-image" />
                    <div className="banner-overlay">
                        <h1>About StayFinder</h1>
                    </div>
                </div>

                <div className="about-container">
                    {/* Mission Section */}
                    <section className="mission-section">
                        <h2>Our Mission</h2>
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop" alt="Our Mission" className="section-image" />
                        <p>At StayFinder, our mission is to connect travelers with unique, comfortable, and affordable accommodations worldwide. We believe everyone deserves to experience the joy of traveling and staying in memorable places.</p>
                    </section>

                    {/* Vision Section */}
                    <section className="vision-section">
                        <h2>Our Vision</h2>
                        <img src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&h=300&fit=crop" alt="Our Vision" className="section-image" />
                        <p>We envision a world where finding the perfect stay is effortless and enjoyable. By leveraging technology and personal touch, we aim to revolutionize the way people travel and book accommodations globally.</p>
                    </section>

                    {/* Why Choose Us */}
                    <section className="why-section">
                        <h2>Why Choose StayFinder?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <img src="https://i.pravatar.cc/150?u=verified" alt="Verified Listings" className="feature-icon" />
                                <h3>Verified Listings</h3>
                                <p>All our listings are verified and authentic to ensure your safety and satisfaction.</p>
                            </div>
                            <div className="feature-card">
                                <img src="https://i.pravatar.cc/150?u=price" alt="Best Prices" className="feature-icon" />
                                <h3>Best Prices</h3>
                                <p>We guarantee competitive pricing with transparent booking process.</p>
                            </div>
                            <div className="feature-card">
                                <img src="https://i.pravatar.cc/150?u=support" alt="24/7 Support" className="feature-icon" />
                                <h3>24/7 Support</h3>
                                <p>Our dedicated team is always ready to help you with any queries.</p>
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="team-section">
                        <h2>Our Team</h2>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src="https://i.pravatar.cc/150?u=john" alt="John Doe" className="team-photo" />
                                <h3>John Doe</h3>
                                <p className="role">Founder & CEO</p>
                            </div>
                            <div className="team-member">
                                <img src="https://i.pravatar.cc/150?u=jane" alt="Jane Smith" className="team-photo" />
                                <h3>Jane Smith</h3>
                                <p className="role">Chief Technology Officer</p>
                            </div>
                            <div className="team-member">
                                <img src="https://i.pravatar.cc/150?u=mike" alt="Mike Johnson" className="team-photo" />
                                <h3>Mike Johnson</h3>
                                <p className="role">Head of Customer Support</p>
                            </div>
                            <div className="team-member">
                                <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Williams" className="team-photo" />
                                <h3>Sarah Williams</h3>
                                <p className="role">Marketing Director</p>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="stats-section">
                        <h2>By The Numbers</h2>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>10K+</h3>
                                <p>Happy Customers</p>
                            </div>
                            <div className="stat-card">
                                <h3>5K+</h3>
                                <p>Active Listings</p>
                            </div>
                            <div className="stat-card">
                                <h3>50+</h3>
                                <p>Cities Covered</p>
                            </div>
                            <div className="stat-card">
                                <h3>95%</h3>
                                <p>Customer Satisfaction</p>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="footer">
                    <p>© 2025 StayFinder. All rights reserved.</p>
                </footer>
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

/* About Banner */
.about-banner {
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

/* About Container */
.about-container {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Mission & Vision Sections */
.mission-section, .vision-section {
  margin-bottom: 60px;
  text-align: center;
}

.mission-section h2, .vision-section h2, .why-section h2, .team-section h2, .stats-section h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
}

.section-image {
  width: 100%;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.mission-section p, .vision-section p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Why Choose Us Section */
.why-section {
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 50%;
  object-fit: cover;
}

.feature-card h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 14px;
  color: #666;
}

/* Team Section */
.team-section {
  margin-bottom: 60px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.team-member {
  background-color: white;
  padding: 30px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
}

.team-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #ff5a5f;
}

.team-member h3 {
  font-size: 18px;
  color: #333;
  margin: 10px 0 5px 0;
}

.team-member .role {
  color: #ff5a5f;
  font-size: 14px;
  margin: 0;
}

/* Stats Section */
.stats-section {
  background-color: #ff5a5f;
  padding: 60px 20px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 60px;
}

.stats-section h2 {
  color: white;
  margin-bottom: 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.stat-card {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
  color: white;
}

.stat-card h3 {
  font-size: 36px;
  margin: 0 0 10px 0;
  font-weight: bold;
}

.stat-card p {
  font-size: 16px;
  margin: 0;
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