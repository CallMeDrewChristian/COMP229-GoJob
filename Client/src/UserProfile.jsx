import logo from './assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import './UserProfile.css';
import React, { useEffect, useState } from 'react';
const URL = "http://localhost:8000"
let deleteUserInfo = ""
async function deleteUserAccount() {
    const response = await fetch(`${URL}/deleteaccount`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: deleteUserInfo.email }),
        credentials: 'include',
      });
      
      const data = await response.json(); 
        console.log(data.user); 
        console.log("GONE")
        try {
            const response = await fetch(`${URL}/logout`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            });
            
          } catch (error) {
            console.error('Error during fetch:', error);
          }
          window.location.href = '/';
};

function UserProfile() {
    const [userInfo, setUserInfo] = useState(null);
    let userData = ""
    useEffect(async () => {
        const response = await fetch(`${URL}/getuser`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
          
          const data = await response.json(); 
            console.log(data.user); 
            deleteUserInfo = data.user 
        setUserInfo(data.user)
    }, []);

    
    if (!userInfo) {
        return (
            <>
                <NavBar />
                    <h1>Error Loading User Info</h1>
            </>
        );
    }
    else {
        if (userInfo.role == "employer")  {
            userData = (
            <>
                <p>Job Position : {userInfo.jobPosition}</p>
                <p>Company Name: {userInfo.company}</p>
                <p>Company Website : {userInfo.companyWebsite}</p>
                <p>Address : {userInfo.address}</p>
                </>
            )
        }
        else {
            userData = (
       <>
      
                <p>Address : {userInfo.address}</p>
                <p>Date of Birth : {userInfo.dateOfBirth}</p>
                <p>Education Level : {userInfo.educationLevel}</p>
                <p>Phone Number : {userInfo.phoneNumber}</p>
                </>
                )
        }
    
    }


  

    return (
    <>
    <NavBar/>
    <div className='UserInfo'>
        <h1>User Info</h1>
        <p>Email : {userInfo.email}</p>
        <p>First Name : {userInfo.firstName}</p>
        <p>Last Name : {userInfo.lastName}</p>
        <p>Role : {userInfo.role}</p>
        {userData}
        </div>
        <br/>
        <br/>
        <button>Edit User Account</button>
        <br/>
        <button>Change Password</button>
        <br/>
        <button onClick={deleteUserAccount}>Delete User Account</button>    
    </>
    )
}

export default UserProfile