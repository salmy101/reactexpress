import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/bi";
import "boxicons";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <box-icon name="badge-check"></box-icon>
            <div>
              <h3 className="skill__name">HTML</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <box-icon name="badge-check"></box-icon>
            <div>
              <h3 className="skill__name">CSS</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
        </div>
        
        <div className="skills__group">
          <div className="skills__data">
            <box-icon name="badge-check"></box-icon>
            <div>
              <h3 className="skill__name">Javascript</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <box-icon name="badge-check"></box-icon>
            <div>
              <h3 className="skill__name">React</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <box-icon name="badge-check"></box-icon>
            <div>
              <h3 className="skill__name">Git</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
