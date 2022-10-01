import React, { useEffect } from "react";
import "./Header.scss";
import ImageSlider from "./ImageSlider";
import baffle from "baffle";

import Typewriter from "typewriter-effect";
const Header = () => {
  useEffect(() => {
    const target = baffle("#obfuscated");
    target.set({
      characters:
      "!@#$%^&*)([]{};'<>?",
        // "ЪъФфЯя败/敗木月ش~ب!@#$%^&*()-+=[]{}|;:,./<>?~!@#$%^&*()-+=[]{}|;:,./<>?",
      speed: 100,
    });
    target.start();
    target.reveal(3000, 15);
  });
  const slides = [
    { url: "http://localhost:3000/mountain.jpeg", title: "mountain" },
    { url: "http://localhost:3000/bench.jpeg", title: "bench" },
    { url: "http://localhost:3000/toronto.jpeg", title: "toronto" },
  ];

  return (
    <section id="Home">
      <div className="main-header">
        <div className="intro" >
          <h1> Welcome To My Portfolio 
            {/* <Typewriter id="obfuscated"
              textStyle={{
                fontSize: "20px",
              }}
              className="typewriter"
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome To My Portfolio 🌺 ")
                  // .pauseFor(200)
                  // .deleteChars(5)
                  // .typeString("My Name is...")
                  .start();
              }}
            /> */}
          </h1>
           {/* <h3 id="obfuscated">Salma!</h3> */}
          
        </div>

        <div className="intro-main">
          <div className="intro-msg">
          <h1 id="obfuscated">My Name is <strong>Salma</strong></h1>

            <h3>
              I'm an aspiring{" "}
              <span style={{ fontWeight: "bold" }}>fullstack web devloper</span>{" "}
              based here in Canada. I enjoy the creativity that developing
              allows me, as well the satisfaction of building projects from
              scratch!{" "}
            </h3>
            <h3>
              Checkout this portfolio to see my projects, skills, and contact
              information.
            </h3>
          </div>
          <div className="intro-image">
            {/* <ImageSlider slides={slides} /> */}
          </div>
        </div>

        <div className="intro-2">
          <p>LOCATION: EDMONTON, ALBERTA</p>
          <p>NOTES: PROGRAMMER, READER, AND CREATIVE</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
