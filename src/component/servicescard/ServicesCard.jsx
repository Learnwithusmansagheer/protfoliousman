import React from "react";
import ServicesList from "../serviceslist/ServicesList";
import './servicescard.css';

export default function ServicesCard({ iconservices, heading, paragraph }) {
    const list = [
        { title: 'UI/UX Design', id: 'checkbox-1' },
        { title: 'Web Development', id: 'checkbox-2' },
        { title: ' Research', id: 'checkbox-3' },
   
    ];

  return (
    <>
      <div className="servicescard">
        <div className="iconservices">
            <p>{iconservices}</p>
        </div>
        <div className="servicesHeading">
            <h1>{heading}</h1>
        </div>
        <div className="servicesParagraph">
            <p>{paragraph}</p>
        </div>
        <div className="serviceList_set">
            {list.map((item, index) => (
                <ServicesList
                    key={index}
                    id={item.id}
                    title={item.title}
                />
            ))}
        </div>
      </div>
    </>
  );
}

