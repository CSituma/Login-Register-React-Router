import React from "react";


export const Toggler = (props) => {
  return (
    <div className="toggler"
     ref={props.togglerRef}
       onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
