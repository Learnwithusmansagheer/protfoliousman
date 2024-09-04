import React from "react";
import './tableinformation.css'
export default function Tableinformation({
  headingtable,
  paragraphtable,
  heading2,
  paragraph2,
}) {
  return (
    <>
      <table>
        <div className="row">
          <div className="col ">
            <h1>{headingtable}</h1>
            <p>{paragraphtable}</p>
          </div>
          <div className="col ">
            <h1>{heading2}</h1>
            <p>{paragraph2}</p>
          </div>
        </div>
      </table>
    </>
  );
}
