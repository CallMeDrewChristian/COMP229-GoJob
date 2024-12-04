import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
const URL = "http://192.168.0.18:8000"
function Signup() {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    dateOfBirth: '',
    phoneNumber: '',
    educationLevel: '',
    jobPosition: '',
    company: '',
    companyWebsite: ''
  });

  function selectRoleEvent(event) {
    setSelectedOption(event.target.value);
  }

  function handleChange(event) {
    const { name, value, type, files } = event.target;
    let updatedValue;
    if (type === 'file') {
      updatedValue = files[0];
    } else {
      updatedValue = value;
    }
    setFormData(prevData => ({
      ...prevData,
      [name]: updatedValue
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
    const dataToSubmit = {
      ...formData,
      role: selectedOption,
    };
  
    try {
      const response = await fetch(`${URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });
      const data = await response.json();
      console.log(data.success);
      if (data.user) {
        window.location.href = '/employees';
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  let signupForm = "";

  if (selectedOption === "jobapplicant") {
    signupForm = (
      <form onSubmit={handleSubmit}>
        <h2>Job Applicant Registration</h2>
        <label>Email:&nbsp;
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Password:&nbsp;
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <hr />
        <label>First Name:&nbsp;
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Last Name:&nbsp;
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Address:&nbsp;
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Date of Birth:&nbsp;
          <input
            type="date"
            name="dateOfBirth"
            required
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Phone Number:&nbsp;
          <input
            type="tel"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Education Level:&nbsp;
          <select
            name="educationLevel"
            required
            value={formData.educationLevel}
            onChange={handleChange}
          >
            <option value="">Select Education Level</option>
            <option value="highschool">High School</option>
            <option value="college">College</option>
            <option value="university">University</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br /><br />
        <button type="submit">Sign Up for Job Applicant</button>
      </form>
    );
  } else if (selectedOption === "employer") {
    signupForm = (
      <form onSubmit={handleSubmit}>
        <h2>Employer Registration</h2>
        <label>Email:&nbsp;
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Password:&nbsp;
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <hr />
        <label>First Name:&nbsp;
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Last Name:&nbsp;
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Phone Number:&nbsp;
          <input
            type="tel"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Job Position:&nbsp;
          <input
            type="text"
            name="jobPosition"
            value={formData.jobPosition}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Company Name:&nbsp;
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Company Website:&nbsp;
          <input
            type="url"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Address:&nbsp;
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <button type="submit">Sign Up for Employer</button>
      </form>
    );
  }

  return (
    <>
      <NavBar />
      <br/>      <br/>
      <div>
        <label>
          <h2>Role Selection</h2>
          <select name="roleselection" required value={selectedOption} onChange={selectRoleEvent}>
            <option value="">Select Role</option>
            <option value="employer">Employer</option>
            <option value="jobapplicant">Job Applicant</option>
          </select>
        </label>
      </div>
      {signupForm}
    </>
  );
}

export default Signup;
