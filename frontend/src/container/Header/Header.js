import React, { useEffect } from "react";
import "./Header.scss";
import ImageSlider from "./ImageSlider";
import baffle from 'baffle';


import Typewriter from "typewriter-effect";
const Header = () => {

  useEffect(() => {
    const target = baffle('#obfuscated')
    target.set({
      characters: 'ЪъФфЯя败/敗木月ش~ب!@#$%^&*()-+=[]{}|;:,./<>?~!@#$%^&*()-+=[]{}|;:,./<>?',
      speed: 150
    })
    target.start();
    target.reveal(2500, 100)
})
  const slides = [
    { url: "http://localhost:3000/mountain.jpeg", title: "mountain" },
    { url: "http://localhost:3000/bench.jpeg", title: "bench" },
    { url: "http://localhost:3000/toronto.jpeg", title: "toronto" },
  ];

  return (
    <div className="main-header">
      <h1 className="intro" id="obfuscated">
        WELCOME!
        {/* <p>SALMA IBRAHIM</p>
        <p>Full Stack Web Developer</p> */}
      </h1>

      <div className="intro-main">
        <div className="intro-msg">
          <h2>My name is Salma Ibrahim </h2>
          <span> Aspiring fullstack web devloper </span>
        
          <h3>I'm an based in 
            Canada. I enjoy the creativity that developing allows as well the satisfaction of builing projects from scratch.
            Checkout this portfolio to see my projects, skills, and contact.
          </h3>
          {/* <Typewriter
            textStyle={{
              fontSize: "20px",
            }}
            className="typewriter"
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome To My Portfolio...")
                .pauseFor(200)
                .deleteAll()
                .typeString("Welcome To My Portfolio...")
                .start();
            }}
          /> */}
        </div>
        <div className="intro-image">
          2
          {/* <ImageSlider slides={slides} /> */}
        </div>
          </div>

      <div className="intro-2">
        <p>LOCATION: EDMONTON, ALBERTA</p>
        <p>NOTES: PROGRAMMER, READER, AND CREATIVE</p>
      </div> 
    </div>
  );
};

export default Header;
