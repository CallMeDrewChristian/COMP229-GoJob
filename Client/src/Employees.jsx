import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function checkUserAuthentication() {
    const token = localStorage.getItem('jwt');

    if (token) {
        return true;
    } else {
        return false;
    }
}

function Message() {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = checkUserAuthentication();
        
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Welcome to the Dashboard!</h1>
        </div>
    );
}

export default Message;
