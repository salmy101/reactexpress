import React from "react";
import "./Skills.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="Skills">
      <div className="main-header">
        <div className="skills-container">
            {/* <div className="skills-info">stuff about my skills and whee i learnt them</div> */}
          <div className="skills-carosel">
          <Carousel responsive={responsive} infinite={true} className="carosel">
            <div>1</div>
            <div>4</div>
            <div>2</div>
            <div>6</div>
            <div>5</div>
          </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
