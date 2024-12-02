import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import './SignUp.css'; // Import your CSS file

const SignUp = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });
      console.log('Registered:', res.data);
      alert('Registered successfully!');
      setName('');
      setEmail('');
      setPassword('');
      navigate('/'); // Navigate to the home page after successful registration
    } catch (err) {
      console.error('Error registering:', err.response ? err.response.data : err.message);
      setError(err.response ? err.response.data.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Sign Up</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <div className="auth-footer">
          {/* <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
