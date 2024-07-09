/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import styles from './register.module.css';

const Register: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [countryCode, setCountryCode] = useState('+234');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const auth = getAuth(); // Initialize Firebase auth instance

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) { // Adjust the minimum password length as needed
      setError('Your password is too short, please increase your password length');
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User registered successfully');
      navigate('/login'); // Navigate to login page after successful registration
    } catch (err: any) {
      handleFirebaseError(err); // Handle Firebase authentication error
    } finally {
      setLoading(false);
    }
  };

  const handleFirebaseError = (err: any) => {
    const errorCode = err.code;
    const errorMessage = err.message;

    switch (errorCode) {
      case 'auth/email-already-in-use':
        setError('Email address is already in use');
        break;
      case 'auth/invalid-email':
        setError('Invalid email address');
        break;
      case 'auth/weak-password':
        setError('Password is too weak');
        break;
      default:
        setError(errorMessage || 'Registration failed. Please try again later.');
        break;
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleRegister}>
        <h2>Create an account</h2>
        <p>
          Create an Account Today and Unlock the Full Potential of Cryptocurrency with Secure, Fast, and Global Transactions
        </p>
        <label className={styles.label}>Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={styles.input}
          required
        />
        <label className={styles.label}>Email Address</label>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <label className={styles.label}>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          required
        />
        <label className={styles.label}>Choose country</label>
        <div className={styles.select_input_container}>
          <select
            className={styles.select}
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="+234">+234</option>
            <option value="+234">+1</option>

          </select>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={styles.text_input}
            required
          />
        </div>
        <label className={styles.label}>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <label className={styles.label}>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Loading...' : "Let's go"}
        </button>
        <div className={styles.footer}>
          Already have an account? <a href="/login" className={styles.link}>Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
