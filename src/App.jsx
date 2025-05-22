import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import ReceiverLogin from "./pages/ReceiverLogin";
import ReceiverRegister from "./pages/ReceiverRegister";
import UserPage from "./pages/UserPage";
import ReceiverPage from "./pages/ReceiverPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/receiver" element={<ReceiverPage />} />
        <Route path="/login-user" element={<UserLogin />} />
        <Route path="/register-user" element={<UserRegister />} />
        <Route path="/login-receiver" element={<ReceiverLogin />} />
        <Route path="/register-receiver" element={<ReceiverRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
