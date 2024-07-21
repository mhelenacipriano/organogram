import React, { useEffect, useState } from "react";
import "./TextField.css";

const TextField = ({
  label,
  placeholder,
  required,
  onChange,
  currentValue,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    console.log(currentValue);
  }, [currentValue]);

  return (
    <div className="text-field">
      <label>{label}</label>
      <input
        value={currentValue}
        onChange={handleChange}
        required={required}
        placeholder={`${placeholder}...`}
      />
    </div>
  );
};

export default TextField;
