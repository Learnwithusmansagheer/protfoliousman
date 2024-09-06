import React from "react";
import Paragraph from "../paragraphinformation/Paragraph";
import { SiAdobecreativecloud } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";

import "./services.css";
import ServicesCard from "../servicescard/ServicesCard";
export default function Services() {
  const information = [
    {
      iconservices: <SiAdobecreativecloud />,
      heading: "Creative Design",
      paragraph: " My work focuses on combining aesthetics with functionality to meet clients' unique needs.",
    },
    {
      iconservices: <MdDeveloperMode />,
      heading: "Mobile Development",
      paragraph: " My work focuses on combining aesthetics with functionality to meet clients' unique needs.",
    },
    {
      iconservices:<FaDisplay />,
      heading: "Web Development",
      paragraph: " My work focuses on combining aesthetics with functionality to meet clients' unique needs.",
    },
  ];
  return (
    <>
      <div className="services_setting">
        <div className="servicesPart1">
          <Paragraph heading="My Services" paragraph="What I do for you" />
        </div>
        <div className="servicesPart2">
          {information.map((item, index) => (
            <ServicesCard key={index} iconservices={item.iconservices} heading={item.heading} paragraph={item.paragraph}/>
          ))}
        </div>
      </div>
    </>
  );
}
