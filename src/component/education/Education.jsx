import React from "react";
import Paragraph from "../paragraphinformation/Paragraph";
import "./education.css";
import EducationCard from "../educationCard/EducationCard";
export default function Education() {
  const information = [
    {
      title: "Education University",
      date: "2023-2027",
      heading: "Bs Computer Science",
      paragraph:
        "Computer Science (CS) is the study of computers and computational systems, focusing on programming, algorithms, and software development. A BS in CS equips students with the skills needed to solve complex problems and innovate in the tech industry.",
    },
    {
        title: "Saylani Mass It Training ",
        date: "2024-2025",
        heading: "UI & UX Design",
        paragraph:
          "UI/UX Design focuses on creating user-friendly and visually appealing digital interfaces. It involves understanding user behavior, designing intuitive navigation, and ensuring a seamless user experience across devices.",
      },
      {
        title: "Education University",
        date: "2023-2027",
        heading: "Java & c++",
        paragraph:
          "Computer Science (CS) is the study of computers and computational systems, focusing on programming, algorithms, and software development. A BS in CS equips students with the skills needed to solve complex problems and innovate in the tech industry.",
      },
  ];
  return (
    <>
      <div className="educationsetting">
        <div className="educationFirst ">
          <Paragraph
            heading="Education"
            paragraph="My education qualification"
          />
        </div>
        <div className="setEducationCard">
          {information.map((item, index) => (
            <EducationCard
              key={index}
              title={item.title}
              date={item.date}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </div>
      <hr style={{height:'1px',color:'white', border:'2px solid white'}}/>
    </>
  );
}
