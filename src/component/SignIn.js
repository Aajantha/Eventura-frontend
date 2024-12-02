import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import '../component/SignIn.css'; // Import your CSS file

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // To navigate between pages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to backend for login
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      // Extract token, role, and userId from the response
      const { token, role, userId } = res.data;

      // Save token, role, and userId in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId); // Store the userId in localStorage

      // Role-based navigation
      if (role === 'admin') {
        navigate('/admin'); // Navigate to admin dashboard
      } else if (role === 'user') {
        navigate('/'); // Navigate to user dashboard
      }

      console.log('Logged in:', res.data);
    } catch (err) {
      // Log the actual error message from response or catch the generic error
      console.error('Error logging in:', err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <div className="auth-footer">
          {/* <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
