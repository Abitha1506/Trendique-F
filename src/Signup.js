import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  
    if (password !== confirmpassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('https://trendique-b.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmpassword,
        }),
      });
  
      // const data = await response.json();
  
      if (!response.ok) {
        const errorData = await
        response.json();
        setErrorMessage(errorData.message || 'An error occurred. Please try again.');
        return;
      }

      const data = await response.json();
      alert(data.message || "account created successfully!")
      navigate("/");

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };
  

  return (
    <div>
      <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSignup}>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
           <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form><br></br>
          <hr></hr>
          <div className="signup-footer">
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

