import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

function Login() {
  const { login } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        login(data); // Update AuthContext
        alert('Login successful');
        navigate('/chat'); // Redirect to ChatArea
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        alert('Signup successful! Please login.');
        setIsLogin(true);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  return (
    <div id="container">
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLogin ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleSignup}>Signup</button>
        )}
      </form>
      <p>
        {isLogin ? (
          <>
            New user?{' '}
            <span className="toggle-link" onClick={() => setIsLogin(false)}>
              Signup here
            </span>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <span className="toggle-link" onClick={() => setIsLogin(true)}>
              Login here
            </span>
          </>
        )}
      </p>
    </div>
  );
}

export default Login;
