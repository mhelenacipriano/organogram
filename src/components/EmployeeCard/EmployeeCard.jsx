import React from "react";
import "./EmployeeCard.css";

export const EmployeeCard = ({ name, image, position, primaryColor }) => {
  return (
    <div className="employee-card">
      <div className="title" style={{ backgroundColor: primaryColor }}>
        <img src={image} alt={name}></img>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};
