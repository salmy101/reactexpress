import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./Projects.scss";

export const ProjectCard = (props) => {
  const { title, url, imgUrl, stack, description } = props;
  const style = {
    height: "100%", 
    width: "100%",
    display: "block"
  };
  
  console.log(props)

  return (
    <>
  
    <div className="project-card">
      <div className="project-image">
        <a
          href={url}
          className="project-pic-wrap"
          target={"_blank"}
          data-category={title}
        >
          <img src={imgUrl} style={style}
          alt="project-pic" className="project-pic" />
        </a>
      </div>
      <div className="project-title">
        {title}
        </div>
      <div className="project-stack">
        {title}
        </div>
    </div>
    </>
  );
};
