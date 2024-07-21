import React, { useState } from "react";
import TextField from "../TextField";
import "./InputForm.css";
import Select from "../Select";
import Button from "../Button";

export const InputForm = ({ onNewEmployee, squads }) => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewEmployee({ name, team, position, image });
    setName("");
    setTeam("");
    setPosition("");
    setImage("");
  };
  return (
    <section className="input-form">
      <form onSubmit={handleSubmit}>
        <h2>Fill in the data to create employee card</h2>
        <TextField
          required={true}
          label={"Name"}
          placeholder={"Type in your name"}
          onChange={setName}
          currentValue={name}
        />
        <TextField
          required={true}
          label={"Position"}
          placeholder={"Type in your job position"}
          onChange={setPosition}
          currentValue={position}
        />
        <TextField
          label={"Image"}
          placeholder={"Type in your image source"}
          onChange={setImage}
          currentValue={image}
        />
        <Select
          required={true}
          label={"Teams"}
          optionList={squads}
          onChange={setTeam}
          currentValue={team}
        />
        <Button label={"Create card"} />
      </form>
    </section>
  );
};
