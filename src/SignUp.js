import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/signup`, {
        name,
        email,
        password,
      });

      console.log('Sign Up Successful', response.data);
      setSuccessMessage('Sign Up Successful!');
      setTimeout(() => {
        setSuccessMessage('');
        setName('');
        setEmail('');
        setPassword('');
        navigate('/signin'); 
      }, 3000);
    } catch (error) {
      console.error('Sign Up Failed', error.message);
    }
  };

  return (
    <div style={styles.container}>
      {successMessage && (
        <div style={styles.successMessage}>{successMessage}</div>
      )}
      <h2 style={styles.title}>Sign Up</h2>
      <label style={styles.label}>Username:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
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
      <button onClick={handleSignUp} style={styles.button}>
        Sign Up
      </button>
      
      <p style={styles.link}>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
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
    backgroundColor: '#3498db',
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
  link: {
    marginTop: '15px',
    textAlign: 'center',
  },
};

export default SignUp;
