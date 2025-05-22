import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserPage from './pages/UserPage';
import ReceiverPage from './pages/ReceiverPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/receiver" element={<ReceiverPage />} />
      </Routes>
    </Router>
  );
}

export default App;

