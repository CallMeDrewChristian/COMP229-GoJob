import React, { useState } from "react";
import './Post.css';


const jobData = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "Remote", salary: "$100k - $120k", description: "Develop and maintain software solutions." },
  { id: 2, title: "Product Manager", company: "Innova Inc.", location: "New York, NY", salary: "$90k - $110k", description: "Manage product lifecycle and teams." },
  { id: 3, title: "Graphic Designer", company: "Creative Co.", location: "Los Angeles, CA", salary: "$60k - $80k", description: "Design digital and print materials." },
];

function Post() {
  const [search, setSearch] = useState("");

  const Jobs = jobData.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="Title">Available Jobs for You:</h1>
      <input
        type="text"
        placeholder="Search for jobs!   "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
      />
      
      <div className="job-list">
        
       {Jobs.length > 0 ? (
          Jobs.map((job) => (
            <div key={job.id} className="jobBox">
              <h2>{job.title}</h2>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <button className="sendApp">Send Application</button>
            </div>
          ))

        ) : (
          <p>Couldn't find any specified jobs</p>
        )}

        
      </div>
    </>
  );
}
export default Post