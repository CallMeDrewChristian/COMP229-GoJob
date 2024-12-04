import React, { useState } from 'react';
import './App.css'
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
  else if (selectedOption == "employer") {
    signupform = (
      <form>
        <h2>Job Applicant Registration</h2>
        <label>
          First Name: 
          <input type='text' name='firstName' required/>
        </label>
        <label>
          Last Name: 
          <input type='text' name='lastName' required/>
        </label>
        <label>
          Phone Number: 
          <input type='tel' name='phonenumber' required/>
        </label>
        <label>
          Job Position: 
          <input type='text' name='jobposition'/>
        </label>
        <label>
          Company Name: 
          <input type='text' name='company'/>
        </label>
        <label>
          Company Website: 
          <input type='url' name='companywebsite'/>
        </label>
        <label>
          Address: 
          <input type='text' name='address'/>
        </label>
        <label>
          Company Logo: 
          <input type='file' name='companyLogo'/>
        </label>
        <button type="submit">Sign Up for Employer</button>
      </form>
    )
  }

  return (
    <>
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
