import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful login
    // In a real app, you'd authenticate with the backend and get user role
    console.log('Login attempt:', formData);
    const userRole = 'student'; // Or 'tutor', based on backend response
    alert(`Login successful! Navigating to ${userRole} dashboard.`);
    if (userRole === 'student') {
      navigate('/student-dashboard');
    } else {
      navigate('/tutor-dashboard');
    }
  };

  return (
    <div className="page-container login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;