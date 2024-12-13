import './Home.css';
import logo from './assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import JobPost from './JobPost'

function Home() {
    return(
        <>
    <NavBar/>

    <JobPost/>

        </>
    )

}
export default Home