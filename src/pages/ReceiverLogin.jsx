import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthPage.css";


function ReceiverLogin() {
  return (
    <div className="auth-page">
      <div className="auth-box">
      <h2>Receiver Login</h2>
      <form style={styles.form}>
        <input type="email" placeholder="Email" required style={styles.input} />
        <input type="password" placeholder="Password" required style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p>Not registered? <Link to="/register-receiver">Register</Link></p>
    </div>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', maxWidth: '400px', margin: 'auto' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.8rem' },
  button: { padding: '0.8rem', background: '#6a4cff', color: '#fff', border: 'none', borderRadius: '5px' }
};

export default ReceiverLogin;
