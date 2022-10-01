import React, {useEffect, useRef, useState} from "react";
import { useInView } from 'react-intersection-observer';

import "./Skills.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      <div className="main-header">
        <h2 ref={myRef} className={`${visible ? animateSlide : ''}`}> My Skills</h2>
        {visible ? <p>YESSS</p> : <p>NOOO</p>}
        
      </div>
    </section>
  );
};

export default Skills;
