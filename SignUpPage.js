import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log(`Signing up as ${role}:`, formData);
    alert('Sign-up successful! Navigating to login.');
    navigate('/login');
  };

  return (
    <div className="page-container signup-page">
      <h1>Sign Up</h1>
      {!role ? (
        <div className="role-selection">
          <button onClick={() => handleRoleSelect('Student')}>Sign Up as Student</button>
          <button onClick={() => handleRoleSelect('Tutor')}>Sign Up as Tutor</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>{role} Sign Up</h2>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
          {role === 'Tutor' && (
            <label>
              Subjects:
              <input type="text" name="subjects" onChange={handleChange} />
            </label>
          )}
          <button type="submit">Complete Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default SignUpPage;