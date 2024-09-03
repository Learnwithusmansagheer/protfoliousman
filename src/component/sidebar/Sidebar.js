import React from "react";
import './sidebar.css'
export default function Sidebar({icon,heading}) {
  return (
    <div>
      <div className="sidebarSetting">
        <div className="home">
          <div className="homeimg">
              <p className="text  text-white">{icon}</p>
          </div>
          <div className="homeheading">
            <h2 className="curser cursor-pointer">{heading}</h2>

          </div>
        </div>
      </div>
    </div>
  );
}
