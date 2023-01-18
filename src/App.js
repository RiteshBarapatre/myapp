import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About"

import {
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const alertMsg = (msg, type) => {
    setAlert({
      message: msg,
      Artype: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById(
        "exampleFormControlTextarea1"
      ).style.backgroundColor = "black";
      document.getElementById("exampleFormControlTextarea1").style.color =
        "white";
      document.getElementById("exampleFormControlTextarea1").style.border =
        "2px solid white";
      alertMsg("Dark Mode is Enabled !!!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById(
        "exampleFormControlTextarea1"
      ).style.backgroundColor = "white";
      document.getElementById("exampleFormControlTextarea1").style.color =
        "black";
      document.getElementById("exampleFormControlTextarea1").style.border =
        "2px solid black";
      alertMsg("Light Mode is Enabled !!!", "success");
    }
  };

  return (
    <>
          <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <TextForm heading="Enter Your Text Here :" alertMsg={alertMsg} />
        <Routes>
        <Route path="/" element={<TextForm heading="Enter Your Text Here :" alertMsg={alertMsg} />}/>
        <Route path="/about" element={<About/>}/>  
        </Routes>
    </>
  );
}

export default App;
