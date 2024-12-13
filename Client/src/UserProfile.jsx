import logo from './assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import './UserProfile.css';
import React, { useEffect, useState } from 'react';


function UserProfile() {
    const [userInfo, setUserData] = useState(null);

    useEffect(() => {
        const savedUserInfo = localStorage.getItem('userInfo')
        if (savedUserInfo) {
            setUserData(JSON.parse(savedUserInfo))
        }
    }, []);

    if (!userInfo) {
        return (
            <>
                <NavBar />
                    <h1>error loading user info</h1>
            </>
        );
    }
    return (
    <>
    <NavBar/>
    <div className='UserInfo'>
        <h1>User Info:</h1>
        <p>User First Name : {userInfo.firstName}</p>
        <p>User Last Name : {userInfo.lastName}</p>
        <p>User Address : {userInfo.address}</p>
        <p>Date of Birth : {userInfo.dateOfBirth}</p>
        <p>Education Level : {userInfo.educationLevel}</p>
        <p>phone number : {userInfo.phoneNumber}</p>
        </div>
        <br/>
        <br/>
        <button>Delete user account</button>    
    </>
    )
}

export default UserProfile