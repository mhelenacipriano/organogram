import React from "react";
import "./Select.css";

export const Select = ({
  label,
  optionList,
  required,
  onChange,
  currentValue,
}) => {
  const handleSelect = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="select-menu">
      <label>{label}</label>
      <select onChange={handleSelect} required={required} value={currentValue}>
        {optionList.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};
