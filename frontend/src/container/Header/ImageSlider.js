import React, { useState } from "react";
import "./ImageSlider.scss"



const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)



const slideStyles = {
  backgroundImage: `url(${slides[currentIndex].url})`,
  width: "100%",
  height: "100%"

}



  return(
    <div>
      <div style={slideStyles}>
      </div>
    </div>
  )
}

export default ImageSlider;
