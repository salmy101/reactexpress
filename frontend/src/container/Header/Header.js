import React from "react";
import "./Header.scss";
import ImageSlider from "./ImageSlider"

import Typewriter from "typewriter-effect";
const Header = () => {
  const slides = [
    {url:"http://localhost:3000/mountain.jpeg", title:"mountain"},
    {url:"http://localhost:3000/bench.jpeg", title:"bench"},
    {url:"http://localhost:3000/toronto.jpeg", title:"toronto"},
  ];

  return (
    <div className="main-header">
      <div className="intro">
        <p>SALMA IBRAHIM</p>
        <p>Full Stack Web Developer</p>

      </div>

      <div className="intro-main">
        <div className="intro-msg">
          <Typewriter className="typewriter"
          onInit={(typewriter)=> {
  
            typewriter
            .typeString("Welcome To My Portfolio...")   
            .pauseFor(200)
            .deleteAll()
            .typeString("Welcome To My Portfolio...")
            .start();
            }}
            />
        </div>
        <div className="intro-image">
          <ImageSlider slides={slides} />
        </div>
      </div>

      <div className="intro-2">
        <p>NOTES: PROGRAMMER, READER, AND CREATIVE</p>
        <p>LOCATION: EDMONTON, ALBERTA</p>
      </div>
    </div>
  );
};

export default Header;
