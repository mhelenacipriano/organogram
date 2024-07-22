import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import InputForm from "./components/InputForm";
import TextField from "./components/TextField";
import Squad from "./components/Squad";
import Footer from "./components/Footer";

function App() {
  const squads = [
    {
      name: "Cardiology",
      primaryColor: "#2bb2ff",
      secondaryColor: "#82CFFA",
    },
    {
      name: "Dermatology",
      primaryColor: "#01758a",
      secondaryColor: "#0097b2",
    },
    {
      name: "Gynecology",
      primaryColor: "#0cc0df",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "Oncology",
      primaryColor: "#3fab43",
      secondaryColor: "#82b884",
    },
    {
      name: "Pediatrics",
      primaryColor: "#18ada9",
      secondaryColor: "#60bfbc",
    },
    {
      name: "Cirurgy",
      primaryColor: "#183bad",
      secondaryColor: "#425aa6",
    },
  ];

  const [employees, setEmployees] = useState([]);

  const handleNewEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="App">
      <Banner />
      <InputForm
        squads={squads}
        onNewEmployee={(employee) => handleNewEmployee(employee)}
      />
      {squads.map((squad) => (
        <Squad
          employeeList={employees.filter(
            (person) => person.team === squad.name
          )}
          key={squad.name}
          name={squad.name}
          backgroundColor={squad.secondaryColor}
          borderColor={squad.primaryColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
