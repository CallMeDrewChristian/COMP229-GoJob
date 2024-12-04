import React from "react";
import './Post.css';

function Post({ title, company, location, salary, description }) {
    return (
      <div className="jobBox">
        <h2>{title}</h2>
        <p><strong>Company:</strong> {company}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Salary:</strong> {salary}</p>
        <p><strong>Description:</strong> {description}</p>
        <button className="sendApp">More Info</button>
      </div>
    );
  }

export default Post;
