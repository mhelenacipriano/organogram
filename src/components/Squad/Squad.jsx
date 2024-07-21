import React from "react";
import "./Squad.css";
import EmployeeCard from "../EmployeeCard";

export const Squad = ({ name, backgroundColor, borderColor, employeeList }) => {
  return (
    employeeList.length > 0 && (
      <section
        style={{ backgroundColor: backgroundColor }}
        className="squad-container"
      >
        <h3 style={{ borderColor: borderColor }}>{name}</h3>
        <div className="squad">
          {employeeList.map((employee) => (
            <EmployeeCard
              name={employee.name}
              image={employee.image}
              position={employee.position}
              primaryColor={borderColor}
            />
          ))}
        </div>
      </section>
    )
  );
};
