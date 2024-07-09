/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider'; // Adjust the import path as needed
import styles from './register.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const { login } = authContext;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      alert('User logged in successfully');
      navigate('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error) {
        if ((err as any).code === 'auth/user-not-found') {
          setError('No user with such email exists, kindly create a new account');
        } else if ((err as any).code === 'auth/invalid-credential') {
          setError('Wrong password, check your password and try again');
        } else {
          setError(err.message);
        }
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Login to your account</h2>
        <p>
          Unlock the Full Potential of Cryptocurrency with Secure, Fast, and Global Transactions
        </p>

        <label className={styles.label}>Email Address</label>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>

        <div className={styles.footer}>
          Don't have an account? <a href="/signup" className={styles.link}>Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
