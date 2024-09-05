import React, { useState } from "react";
import './serviceslist.css';

export default function ServicesList({ title, id }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <>
      <div className="list flex items-center gap-1">
        <div className="checkbox-wrapper-19">
          <input 
            id={id} 
            type="checkbox" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
          />
          <label className="check-box" htmlFor={id}></label>
        </div>
        <div className="ll">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
}
