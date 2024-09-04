import React from "react";
import Paragraph from "../paragraphinformation/Paragraph";
import images from "../../assets/images/man.png";
import "./herosection.css";
import Adress from "../adressinformation/Adress";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

import ContantButton from "../contantbutton/ContantButton";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
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
  const iconset = [
    {
      icon: <FiFacebook />,
    },
    {
      icon: <FiTwitter />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon:<CiLinkedin />,
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
            <div className="iconsetting1  flex gap-2">
              {iconset.map((item, index) => (
                <ContantButton id='kkkk' key={index} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr style={{height:'1px',color:'white', border:'2px solid white'}}/>
    </>
  );
}
