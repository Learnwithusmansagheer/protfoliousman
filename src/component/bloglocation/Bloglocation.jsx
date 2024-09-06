import React from "react";
import './bloglocation.css'
export default function Bloglocation({ location, heading, paragraph }) {
  return (
    <>
      <div className="bloglocationset ">
        <div className="locationjj">
          <a href="https://class-04-git-second-learnwithusmansagheers-projects.vercel.app/">{location}</a>
        </div>
        <div className="blogadress">
          <h1>{heading}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
}
