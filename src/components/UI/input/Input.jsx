import React from "react";
import "./Input.css"

const Input = ({ onChange, style, inputType, placeholder }) => {
  return (
    <input
      onChange={onChange}
      style={style}
      type={inputType}
      placeholder={placeholder}
    />
  );
};

export default Input;
