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
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
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
