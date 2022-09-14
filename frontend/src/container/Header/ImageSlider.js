import React, { useState } from "react";
import "./ImageSlider.scss"



const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)



const slideStyles = {
  backgroundImage: `url(${slides[currentIndex].url})`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRadius: "10px",
}

const slider = {
  height: "100%",
  position: "relative",
}
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};
const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return(
    <div style={slider}>
      <div classname="slides" style={slideStyles}>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider;
