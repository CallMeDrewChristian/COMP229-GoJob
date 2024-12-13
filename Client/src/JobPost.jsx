import React from "react";
import NavBar from './NavBar';
import Post from './Post'; // Make sure you import the Post component

function JobPost() {
  return (
    <>
      <NavBar />
      <br/>      <br/>      <br/>      <br/>      <br/>
      <h1 className="Title">Job Board</h1>
      <div className='ResumeInfo'>
        <Post 
          title="Software Engineer" 
          company="TechCorp" 
          location="Remote" 
          salary="$100k - $120k"
          description="Develop and maintain software solutions."
        />
        <Post 
          title="Product Manager" 
          company="Innova Inc." 
          location="New York, NY" 
          salary="$90k - $110k"
          description="Manage product lifecycle and teams."
        />
        <Post 
          title="Graphic Designer" 
          company="Creative Co." 
          location="Los Angeles, CA" 
          salary="$60k - $80k"
          description="Design digital and print materials."
        />
      </div>
    </>
  );
}
export default JobPost