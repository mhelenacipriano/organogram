import React from "react";
import "./TextField.css";

const TextField = ({ label, placeholder }) => {
  return (
    <div className="text-field">
      <label>{label}</label>
      <input placeholder={`${placeholder}...`} />
    </div>
  );
};

export default TextField;
