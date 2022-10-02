import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import "./Skills.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  const { ref: myRef, inView: visible } = useInView();

  // const myRef = useRef()
  // const [visible, setVisible] = useState()
  // console.log("is element visible", visible)
  // useEffect(() => {
  //   console.log("MyRef", myRef.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setVisible(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current)

  // }, []);
  return (
    <section id="Skills">
      <div className="skills-section">
        <div className="skills__header">
        <h2>My Skills</h2>
        <span>my technical level</span>
        </div>
        <div className="skills__container container grid">
          <Frontend />
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default Skills;
