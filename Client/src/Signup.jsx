import React, { useState } from 'react';
import './App.css'
import NavBar from './NavBar'

function Signup() {
  const [selectedOption, setSelectedOption] = useState(0)

  function selectRoleEvent(event) {
    setSelectedOption(event.target.value)
  }

  let signupform = "";

  if (selectedOption == "jobapplicant") {
    signupform = (
      <form>
        <h2>Job Applicant Registration</h2>
        <br/>  
        <label>
          Email:&nbsp;
          <input type='email' name='email' required/>
        </label>
        <br/>          <br/>  
        <label>
          Password:&nbsp;
          <input type='password' name='password' required/>
        </label>
        <br/> 
        <hr/>

        <label>
          First Name:&nbsp;
          <input type='text' name='firstName' required/>
        </label>
        <br/>   <br/>
        <label>
          Last Name:&nbsp;
          <input type='text' name='lastName' required/>
        </label>
        <br/>   <br/>
        <label>
          Address:&nbsp; 
          <input type='text' name='address' required/>
        </label>
        <br/>   <br/>
        <label>
          Date of Birth:&nbsp; 
          <input type='date' name='dateofbirth' required/>
        </label>
        <br/>   <br/>
        <label>
          Phone Number:&nbsp; 
          <input type='tel' name='phonenumber' required/>
        </label>
        <br/>   <br/>
        <label>
          Resume (File - pdf, doc recommended):&nbsp; 
          <input type='file' name='resume'/>
        </label>
        <br/>   <br/>
        <label>
          Cover Letter (File - pdf, doc recommended): &nbsp;
          <input type='file' name='coverletter'/>
        </label>
        <br/>   <br/>
        <label>
         Education Level:&nbsp;
            <select name="educationlevel" required>
              <option value="">Select Education Level</option>
              <option value="highschool">High School</option>
              <option value="College">College</option>
              <option value="University">University</option>
              <option value="Other">Other</option>
            </select>
        </label>
        <br/>   <br/>
        <button type="submit">Sign Up for Job Applicant</button>
      </form>
    )
  }
  else if (selectedOption == "employer")   {
    signupform = (
      <form>
        <h2>Employer Registration</h2>
        <br/>
        <label>
          First Name: &nbsp;
          <input type='text' name='firstName' required/>
        </label>
        <br/><br/>
        <label>
          Last Name: &nbsp;
          <input type='text' name='lastName' required/>
        </label>
        <br/><br/>
        <label>
          Phone Number: &nbsp;
          <input type='tel' name='phonenumber' required/>
        </label>
        <br/><br/>
        <label>
          Job Position: &nbsp;
          <input type='text' name='jobposition'/>
        </label>
        <br/><br/>
        <label>
          Company Name:&nbsp; 
          <input type='text' name='company'/>
        </label>
        <br/><br/>
        <label>
          Company Website: &nbsp;
          <input type='url' name='companywebsite'/>
        </label>
        <br/><br/>
        <label>&nbsp;
          Address: 
          <input type='text' name='address'/>
        </label>
        <br/><br/>
        <br/><br/>
        <button type="submit">Sign Up for Employer</button>
      </form>
    );
  }

  return (
    <>
    <NavBar/>
    <div>
    <label>
        <h2>Role Selection</h2>
            <select name="roleselection" required value={selectedOption} onChange={selectRoleEvent} >
              <option value="">Select Role</option>
              <option value="employer">Employer</option>
              <option value="jobapplicant">Job Applicant</option>
            </select>
        </label>
    </div>
    {signupform}
    </>

  ); 
}

export default Signup;
