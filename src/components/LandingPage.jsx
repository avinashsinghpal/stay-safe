import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/user');
  };

  const handleReceiverLogin = () => {
    navigate('/receiver');
  };

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div className="header-logo">GrievEase</div>
        <nav className="header-nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="overlay">
        <h1 className="welcome-line">Welcome to</h1>
        <h1 className="animated-title">GrievEase</h1>
        <p className="subtitle">Your voice, our responsibility — Submit issues, track progress, stay safe.</p>
        <div className="button-group">
          <button className="login-button" onClick={handleUserLogin}>
            Login as User
          </button>
          <button className="login-button" onClick={handleReceiverLogin}>
            Login as Receiver
          </button>
        </div>

        {/* Feature Cards Section */}
        <div className="feature-section" id="features">
          <div className="feature-card">
            <h3>📍Smart Location Detection</h3>
            <p>Automatically fetch your location while registering a complaint for quicker response.</p>
          </div>
          <div className="feature-card">
            <h3>📷 Image Support</h3>
            <p>Attach photos of the issue for better understanding and faster resolution.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Real-time Tracking</h3>
            <p>Track the status of your complaint directly from your dashboard.</p>
          </div>
          <div className="feature-card">
            <h3>🏛️ Municipality Interface</h3>
            <p>Complaints are routed to the appropriate receivers for action via a dedicated dashboard.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div>
            <strong>Contact:</strong> support@grievease.com | +91-12345-67890
          </div>
          <div>
            &copy; {new Date().getFullYear()} GrievEase. All rights reserved.
          </div>
          <div>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
            {" | "}
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
