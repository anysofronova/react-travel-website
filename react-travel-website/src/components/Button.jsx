import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const STYLES = ["btn__primary", "btn__outline"];
const SIZES = ["btn__medium", "btn__large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn__mobile">
      <button
        className={`${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
