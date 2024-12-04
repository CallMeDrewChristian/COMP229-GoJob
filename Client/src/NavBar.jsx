import logo from './assets/images/logo.jpg';
import { Link } from 'react-router-dom';





function NavBar() {
    return(
        <>
        <div className="Nav">

        
        <div className='logo'>
        <Link to="/">
        <img src={logo} alt='Gojob'/>
        </Link>
        </div>
        
        
        <div className='UserNav'>
        <p>Signed in as <strong>email/username</strong></p>
        </div>
        <br/>


        <div className="NavBar">
        <a href='Resume'>Your Resume</a>   
        <a href='JobPost'>Job Listings</a>    
        <a href='UserProfile'>My Profile</a>
        </div>
        
    </div>

        </>        
    )

}
export default NavBar