import React from "react";
import './Post.css';

function Post({ title, company, location, salary, description, deadline, isAuth}) {
  let apply = ""
  if (isAuth) {
    apply = <>
     <button className="sendApp">Apply</button>
     </>
  }  
  else {
    apply = <>
    <h2>Please log in to apply!</h2>
    </>
  }
  return (
      <div className="jobBox">
        <h2>{title}</h2>
        <p><strong>Company:</strong> {company}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Salary:</strong> {salary}</p>
        <p><strong>Description:</strong> {description}</p>
        
        {apply}
      </div>
    );
  }

export default Post;
