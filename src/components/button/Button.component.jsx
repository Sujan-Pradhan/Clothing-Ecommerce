/*
default button


inverted button

google signin button  
*/

import React from "react";
import "./button.styles.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  // console.log(children,"SujanChildren");
  return (
    <>
      <button
        className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
