import React from "react";
import Paragraph from "../paragraphinformation/Paragraph";
import images from "../../assets/images/man.png";
import "./herosection.css";
import Adress from "../adressinformation/Adress";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { info } from "autoprefixer";
export default function Herosection() {
  const informations = [
    {
      location: <IoLocation />,
      infome: "P681 W Canal Rd, Amin Town, Faisalabad, Pakistan",
    },
    {
      location: <MdEmail />,
      infome: "apnausmansagheer@gmail.com",
    },
    {
      location: <BsTelephone />,
      infome: "+92 3049469130",
    },
  
  ];
  return (
    <>
      <div className="herosection ">
        <div className="introduction">
          <h1 className=" font ">Technology</h1>
          <Paragraph
            heading="👋 Hello I'm Usman"
            paragraph="Creative Designer Based in Pk"
          />
        </div>
        <div className="informatonSecton1 ">
          <div className="image ">
            <img src={images} alt="" className=" " />
          </div>
          <div className="info_usman">
            <h1>Junior UI/UX Designer Developer</h1>
            <p className=" ">
              My name is Muhammad Usman, and I am a BS Computer Science (BS CS)
              student. Currently, I am focused on learning web development and
              practicing mobile app development.
            </p>
            <div className="adressthehome gap-3 flex flex-col">
              {informations.map((item, index) => (
                <Adress
                  key={index}
                  location={item.location}
                  infome={item.infome}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
