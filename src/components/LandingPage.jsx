import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Optional: for component-specific styles

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
      <div className="overlay">
        <h1 className="welcome-line">Welcome to</h1>
        <h1 className="animated-title">GrievEase</h1>
        <div className="button-group">
          <button className="login-button" onClick={handleUserLogin}>
            Login as User
          </button>
          <button className="login-button" onClick={handleReceiverLogin}>
            Login as Receiver
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
