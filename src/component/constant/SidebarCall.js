import React from "react";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { FaServicestack } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import Sidebar from "../sidebar/Sidebar";
export default function SidebarCall() {
  const informationSidebar = [
    {
      icon: <FaHome />,
      heading: "Home",
    },
    {
      icon: <SiAboutdotme />,
      heading: "About",
    },
    {
      icon: <FaServicestack />,
      heading: "Services",
    },
    {
      icon: <FaBlog />,
      heading: "Blog",
    },
    {
      icon: <BiSolidContact />,
      heading: "Contact",
    },
  ];
  return (
    <>
    <div className="sidbarset flex flex-col gap-2 w-48 justify-end items-end float-end">
      {informationSidebar.map((item, index) => (
        <Sidebar key={index} icon={item.icon} heading={item.heading} />
      ))}

    </div>
    </>
  );
}
