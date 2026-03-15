import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://trendique-b.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token); // Save token for authentication
      navigate("/"); // Redirect on successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <br />
          <hr />
          <div className="login-footer">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;