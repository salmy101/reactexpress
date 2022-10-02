import React from "react";

const Backend = () => {
  return(
    <div className="skills__content">
      <h3 className="skills__title">Backend Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <box-icon name="badge-check"></box-icon>
            <div>
              <h3 className="skill__name">Express</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <box-icon name="badge-check"></box-icon>
            <div>
              <h3 className="skill__name">Node JS</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
        </div>
        
        <div className="skills__group">
          <div className="skills__data">
            <box-icon name="badge-check"></box-icon>
            <div>
              <h3 className="skill__name">PostgreSQL</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <box-icon name="badge-check"></box-icon>
            <div>
              <h3 className="skill__name">Ruby + Rails</h3>
              <span className="skill__level">Beginner</span>
            </div>
          </div>
         
        </div>
      </div>
    </div>

  )
}

export default Backend;