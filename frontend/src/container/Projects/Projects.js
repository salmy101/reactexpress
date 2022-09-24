import React from "react";
import "./Projects.scss";
import bookdup from "../docs/bookdup.png";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      url: "https://github.com/salmy101/Bookd-Up-Final",
      imgUrl: bookdup,
      title: "Book'd Up",
      stack: "React, Express, Axios, PostgreSQl, Google Books API",
    },
    {
      url: "https://github.com/salmy101/Poller",
      title: "Poller",
      stack: "Express, EJS, PostgreSQL",
    },
    {
      url: "https://github.com/salmy101/scheduler",
      title: "Scheduler",
      stack: "React, Storybook, Express, Axios, Cypress, Jest Testing",
    },
    {
      url: "https://github.com/salmy101/tweeter",
      title: "Tweeter",
      stack: "HTML/CSS/JS, jQuery, AJAX, Node, Express",
    },
  ];
  return (
    <section id="Projects">
      <div className="main-header">
        <div className="projects">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
