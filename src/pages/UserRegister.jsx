import React from "react";
import "../styles/AuthPage.css";

function UserRegister() {
  return (
    <div className="auth-page">
      <div className="auth-box">
      <h2>User Registration</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Full Name" required style={styles.input} />
        <input type="email" placeholder="Email" required style={styles.input} />
        <input type="tel" placeholder="Phone Number" required style={styles.input} />
        <input type="password" placeholder="Password" required style={styles.input} />
        <button type="submit" style={styles.button}>Register</button>
      </form>
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

export default UserRegister;
