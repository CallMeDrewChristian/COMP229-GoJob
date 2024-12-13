import React, {useState, useEffect} from "react";
import NavBar from './NavBar';
import Post from './Post'; 

const URL = "http://localhost:8000"

function JobPost() {
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



  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      console.log("Starting?");
      try {
        const response = await fetch(`${URL}/jobpost`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        console.log("Response data:", data);

        if (data.jobs) {
          setJobs(data.jobs); 
        } else {
          console.error("Jobs data is missing in the response");
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    }

    getJobs();
  }, []);

  return (
    <>
      <NavBar />
      <br /> <br /> <br /> <br /> <br />
      <h1 className="Title">Job Board</h1>
      <div className='ResumeInfo'>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <Post
              key={index} 
              title={job.title}
              description={job.description}
              company={job.company}
              salary={job.salary}
              location={job.location}
              isAuth = {isAuth}
            />
          ))
        ) : (
          <p>No job posts available.</p> 
        )}
      </div>
    </>
  );
}
export default JobPost