/*
default button


inverted button

google signin button  
*/

import React from "react";
// import "./button.styles.scss";
import { BaseButton, GoogleButton, InvertedButton } from "./button.styles";

// const BUTTON_TYPES_CLASSES = {
//   google: "google-sign-in",
//   inverted: "inverted",
// };

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  // console.log(children,"SujanChildren");
  const CustomButton = getButton(buttonType);
  return (
    <>
      <CustomButton {...otherProps}>{children}</CustomButton>

      {/* <button
        className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button> */}
    </>
  );
};

export default Button;
