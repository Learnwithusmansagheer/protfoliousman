import React from "react";
import './adress.css'
export default function Adress({ location,infome }) {
  return (
    <>
      <div className="street">
        <div className="location ">
          <h3 className=" ">{location}</h3>
        </div>
        <div className="parausa">
          <h2>{infome}</h2>
        </div>
      </div>
    </>
  );
}
