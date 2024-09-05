import React from "react";
import Paragraph from "../paragraphinformation/Paragraph";
import Boyimg from "../../assets/images/boyimg.jpg";
import "./aboutme.css";
import ContantButton from "../contantbutton/ContantButton";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import Tableinformation from "../tableinformation/Tableinformation";
import Button from "../button/Button";
export default function Aboutme() {
  const abouticon = [
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
      icon: <CiLinkedin />,
    },
  ];
  const aboutdetails = [
    {
      headingtable: "Phone No:",
      paragraphtable: "03049469130",
      heading2: "Nationality : ",
      paragraph2: "Pakistan",
    },
    {
      headingtable: "Skype:",
      paragraphtable: "Muhammad Usman",
      heading2: "Email: ",
      paragraph2: "apnausmansagheer@gmail.com",
    },
    {
        headingtable: "Address:",
        paragraphtable: "Amin Town, Faisalabad, Pakistan",
        heading2: "Freelancer: ",
        paragraph2: "Available",
      },
  ];
  return (
    <>
      <div className="aboutMain">
        <div className="firstcontainer">
          <Paragraph
            heading="About me"
            paragraph="UI Designer based in Techloset, Pk since 2025"
          />
        </div>
        <div className="secondContainer">
          <div className="boyimg">
            <img src={Boyimg} alt="" className="boyset bg-white" />
            <div className="iconsetting2 ">
              {abouticon.map((item, index) => (
                <ContantButton id="jjj" key={index} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="aboutinformationset">
            <div className="about_heading">
              <h1>Hello, I'm Usman, Based in Pk</h1>
            </div>
            <div className="about_para">
              <p>
                My name is Usman, and I am passionate about learning web and app
                development. I'm constantly exploring new technologies and
                improving my skills to create functional and visually appealing
                digital experiences.
              </p>
            </div>
            <div className="about_information  ">
              {aboutdetails.map((item, index) => (
                <Tableinformation
                  key={index}
                  headingtable={item.headingtable}
                  paragraphtable={item.paragraphtable}
                  heading2={item.heading2}
                  paragraph2={item.paragraph2}
                />
              ))}
            </div>
            <div className="set_button">
                <Button title='Download Cv' />
            </div>
          </div>
        </div>
      </div>
      <hr style={{height:'1px',color:'white', border:'2px solid white'}}/>
    </>
  );
}
