import logo from './assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
const URL = "http://localhost:8000" //NEXT TIME PLEASE UTILIZE .ENV 
 
    

function NavBar() {

    const goHome = () => {
      window.location.href = '/';
    }

    const handleLogout = async () => {
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
    }


    

    let webpage
    const [isAuth, setIsAuth] = useState(false);
    
    const checkAuth = async () => {
      try {
        const response = await fetch(`${URL}/auth`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        
        if (response.status === 201) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
        setIsAuth(false);
      }
    };
  
    useEffect(() => {
      checkAuth();
    }, []);

    const [cookieName, setCookieName] = useState('');

    useEffect(() => {
      const name = Cookies.get('name');
      if (name) {
        setCookieName(name);
      }
    }, []);
  
    
    const [cookieType, setCookieType] = useState('');

    useEffect(() => {
      const name = Cookies.get('type');
      if (name) {
        setCookieType(name);
      }
    }, []);
      console.log(cookieType)
    if (isAuth) {
        webpage = (
            <>
            <div className="Nav">
    
            
            <div className='logo'>
            <Link to="/">
            <img src={logo} alt='Gojob'/>
            </Link>
            </div>
            
            
            <div className='UserNav'>
            <p>Signed in as <strong>{cookieName} ({cookieType})</strong></p>
            </div>
            <br/>
    
    
            <div className="NavBar">
            <a href='Resume'>Your Resume</a>      
            <a href='UserProfile'>My Profile</a>
            <a href="/" onClick={handleLogout}>Logout</a>
            </div>
            
        </div>
    
            </> 
        )
    }
    else{
        webpage = (
            <>
        <div className="Nav">

        
        <div className='logo'>
        <Link>
        <img onClick={goHome} src={logo} alt='Gojob'/>
        </Link>
        </div>
        
        <div className='UserNav'>
            <p></p>
        </div>
        <br/>
        <br/>
        <br/>


        <div className="NavBar">
        <a href="Login">Login</a>
        <a href="Signup">Signup</a>
        </div>
        
    </div>

        </> 
        )
    }



    return(
        webpage
    )

}
export default NavBar