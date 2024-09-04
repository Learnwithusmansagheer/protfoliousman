import React from "react";
import './button.css'
export default function Button(props) {
  return (
    <>
      <div class="button">
        <a href="#" class="anchor">
          <span>{props.title}</span>
        </a>
      </div>
    </>
  );
}
