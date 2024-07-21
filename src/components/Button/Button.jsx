import React from "react";
import "./Button.css";

export const Button = ({ label }) => {
  return (
    <button type="submit" className="button">
      {label}
    </button>
  );
};
