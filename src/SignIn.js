import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      
      const response = await axios.post(`${process.env.REACT_APP_URL}/signin`, {
        email,
        password,
      });

      
      console.log('Login Successful', response.data.token);
localStorage.setItem("token", response.data.token)
localStorage.setItem("id", response.data.user._id)

setSuccessMessage('Logged in successfully! Redirecting...');

      
      setTimeout(() => {
        setSuccessMessage('');
       
      }, 2000);
      setEmail('');
      setPassword('');
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Login Failed', error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <label style={styles.label}>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <label style={styles.label}>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
      {successMessage && (
        <div style={styles.successMessage}>{successMessage}</div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
  successMessage: {
    marginTop: '10px',
    color: 'green',
    textAlign: 'center',
  },
};

export default SignIn;
