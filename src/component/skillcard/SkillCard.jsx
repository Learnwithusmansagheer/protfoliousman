import React from "react";
import './skillCard.css'
export default function SkillCard({iconskill, heading,paragraph }) {
  return (
    <>
      <div className="skills-item">
        <div className="skill_img">
         <h1>{iconskill}</h1>
        </div>
        <div className="skillCard_heading">
          <h1>{heading}</h1>
        </div>
        <div className="skill_paragraph">
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
}
