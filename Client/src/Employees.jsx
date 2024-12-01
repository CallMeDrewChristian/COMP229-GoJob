import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

async function getAuth() {
    try {
        const response = await fetch('http://192.168.0.15:8000/auth', {
            method: 'GET',
        });
        if (response.ok) {
            console.log('Login successful');
            return true;
        } else {
            console.log('Nope');
            return false;
        }
    } catch (ex) {
        console.error('Error during login:', ex);
        return false;
    }
}

function Message() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const isAuth = await getAuth();
            if (!isAuth) {
                navigate('/login'); // Redirect to the login page if not authenticated
            }
        };

        checkAuth();
    }, [navigate]); // Dependency ensures `navigate` is stable


    return (
        <>
           <h1>Hello World!</h1>
        </>
    );
}

export default Message;
