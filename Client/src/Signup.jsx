import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, role } = formData;

    try {
      const res = await fetch('http://192.168.0.15:8000/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password, role }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (data.user) {
        window.location.href = '/employees';
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Signup failed. Please check your details.',
        }));
        console.log('Signup failed');
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <div className="email error">{errors.email}</div>

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <div className="password error">{errors.password}</div>

      <label>
        Job Seeker
        <input
          type="radio"
          name="role"
          value="Job-Seeker"
          checked={formData.role === 'Job-Seeker'}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Employer
        <input
          type="radio"
          name="role"
          value="Employer"
          checked={formData.role === 'Employer'}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Sign</button>
    </form>
  );
};

export default Signup;
