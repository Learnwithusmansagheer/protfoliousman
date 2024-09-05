import React from "react";
import "./educationcard.css";
import { IoCalendarNumber } from "react-icons/io5";
export default function EducationCard({title,date,heading,paragraph}) {
  return (
    <>
      <div className="maincard1 " >
        <div className="card_title ">
          <div className="card_heading"><p>{title}</p></div>
          <div className="date_set ">
            <div className="date_icon">
              <IoCalendarNumber />
            </div>
            <h1>{date}</h1>
          </div>
        </div>
        <div className="sub_heading"><h1>{heading}</h1></div>
        <div className="paragraph_education"><p>{paragraph}</p></div>
      </div>
    </>
  );
}
