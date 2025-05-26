import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleUserLogin = () => {
    navigate('/user');
  };

  const handleReceiverLogin = () => {
    navigate('/receiver');
  };

  const handleSOSClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const callEmergency = () => {
    window.location.href = 'tel:112'; // Replace with actual emergency number
  };

  const callMunicipality = () => {
    window.location.href = 'tel:1800123456'; // Replace with municipality number
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

      {/* SOS Button */}
      <button
        onClick={handleSOSClick}
        className="sos-button"
        style={{
        position: 'fixed',
        top: '5rem',
        right: '25px',
        backgroundColor: '#ff4d4f',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        fontSize: '20px',
        fontWeight: 'bold',
        boxShadow: '0 0 15px rgba(255, 77, 79, 0.6)',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1000
    }}
>
 SOS
</button>

      {/* SOS Popup Modal */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1001
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              maxWidth: '300px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)'
            }}
          >
            <h2>Need Help?</h2>
            <p>Choose a service to call:</p>
            <button onClick={callEmergency} style={{ margin: '10px' }}>
              Call Emergency Services
            </button>
            <button onClick={callMunicipality} style={{ margin: '10px' }}>
              Call Municipality Helpline
            </button>
            <br />
            <button onClick={closePopup} style={{ marginTop: '20px', color: 'gray' }}>
              Cancel
            </button>
          </div>
        </div>
      )}

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
            <a href="https://github.com/avinashsinghpal/stay-safe.git" target="_blank" rel="noopener noreferrer">GitHub</a>
            {" | "}
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
