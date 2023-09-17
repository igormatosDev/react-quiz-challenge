import React from "react";
import "./Button.css";

const Button = (props) => {
  const { onClickAction, customClass = "btn-default" } = props;
  return (
    <button
      type="button"
      className={`btn ${customClass || ""}`}
      onClick={onClickAction}>
      {props.children}
    </button>
  );
};

export default Button;
