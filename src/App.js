import "./App.css";
import Banner from "./components/Banner";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label={"Name"} placeholder={"Type in your name"} />
      <TextField label={"Position"} placeholder={"Type in your job position"} />
      <TextField label={"Image"} placeholder={"Type in your image source"} />
    </div>
  );
}

export default App;
