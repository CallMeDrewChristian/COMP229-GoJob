import logo from './assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import Post from './Post'




function JobPost() {
    return(
        <>
           <NavBar/>
    
    <div className='ResumeInfo'>
    
       <Post/>
                
    </div>

        </>        
    )

}
export default JobPost