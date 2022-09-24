import React from 'react';

import "./Projects.scss";

export const ProjectCard = (props) => {

  const { title, url, imgUrl, stack } = props;

  return(
          

      
        <div className="project-card">
          <div className="project-image">
            {/* <img src={imgUrl} alt="project-pic" className="project-pic" /> */}

          </div>
          <div className="project-title">
          {title}
          </div>
          <div className="project-stack">
          {stack}
          </div>
          </div>
  
  )
}