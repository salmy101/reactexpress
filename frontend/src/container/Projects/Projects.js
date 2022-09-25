import React from "react";
import "./Projects.scss";
import bookdup from "../docs/bookdup.png";
import poller from "../docs/poller.png";
import scheduler from "../docs/scheduler.png";
import tweeter from "../docs/tweeter.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const projects = [
    {
      url: "https://github.com/salmy101/Bookd-Up-Final",
      imgUrl: bookdup,
      title: "Book'd Up",
      stack: "React, Express, Axios, PostgreSQl, Google Books API",
      description: "A book lovers hub to make  bookshleves, and bookclubs",
    },
    {
      url: "https://github.com/salmy101/Poller",
      title: "Poller",
      imgUrl: poller,

      stack: "Express, EJS, PostgreSQL",
      description:
        "A polling app to create polling question, share with friends to vote, and see results",
    },
    {
      url: "https://github.com/salmy101/scheduler",
      title: "Scheduler",
      imgUrl: scheduler,

      stack: "React, Storybook, Express, Axios, Cypress, Jest Testing",
      description:
        "A React app where users can book, edit and cancel an interview",
    },
    {
      url: "https://github.com/salmy101/tweeter",
      title: "Tweeter",
      imgUrl: tweeter,

      stack: "HTML/CSS/JS, jQuery, AJAX, Node, Express",
      description: "A single page Twitter clone",
    },
  ];
  return (
    <section id="Projects">
      <div className="main-header">
        <div className="projects-container">
          {/* <Carousel responsive={responsive} infinite={true}> */}
            {/* <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div> */}

            {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
          {/* </Carousel> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
