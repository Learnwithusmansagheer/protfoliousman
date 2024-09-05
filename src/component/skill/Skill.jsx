import React from "react";
import Paragraph from "../paragraphinformation/Paragraph";
import { FaWordpress } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaSketch } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io";
import "./skill.css";
import SkillCard from "../skillcard/SkillCard";
export default function Skill() {
  const skillinformation = [
    {
      iconskill: <FaWordpress />,
      heading: "98%",
      paragraph: "wordpress",
    },
    {
      iconskill: <FaFigma />,
      heading: "40%",
      paragraph: "Figma",
    },
    {
      iconskill: <FaSketch />,
      heading: "70%",
      paragraph: "Sketch",
    },
    {
      iconskill: <FaElementor />,
      heading: "30%",
      paragraph: "Elementor",
    },
    {
      iconskill: <DiJavascript1 />,
      heading: "80%",
      paragraph: "JavaScript",
    },
    {
      iconskill: <IoLogoHtml5 />,
      heading: "98%",
      paragraph: "Html css",
    },
  ];
  return (
    <>
      <div className="skillSetting">
        <div className="skillPart1">
          <Paragraph heading="Skill" paragraph="My expertise skills" />
        </div>
        <div className="skillPart2">
          {skillinformation.map((item, index) => (
            <SkillCard
              key={index}
              iconskill={item.iconskill}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </div>
      <hr
        style={{ height: "1px", color: "white", border: "2px solid white" }}
      />
    </>
  );
}
