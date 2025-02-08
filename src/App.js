import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textbar from "./components/Textbar";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const darkMode = () => {
    if (mode === "light") {
      setMode("black");
      document.body.style.backgroundColor = "#11152F";
      document.body.style.color = "white";
      showalert('Swicthed To Dark Mode', 'success')
      document.title = 'TitleUtils-Dark Mode'
      setTimeout(() => {
        document.title = 'TextUtils'
      }, 1000);



    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert('Swicthed To Light Mode', 'success');
      document.title = 'TitleUtils-White Mode'
      setTimeout(() => {
        document.title = 'TitleUtils'
      }, 1000);
    }
  };
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {


    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
       <Router> 
        <Navbar
          name="Textutils"
          aboutSection="About"
          mode={mode}
          darkmode="Dark Mode"
          toggleMode={darkMode}

        />
        <Alert alert={alert} />

        <Routes> 
        <Route path="/about" element={<About  mode={mode} />} />
        <Route path="/" element={ <Textbar
              btnText="Change To UpperCase"
              btn2Text="Change To LowerCase"
              heading="Enter Your Text Here:"
              textsummary="Your Text Summary:"
              preview="Preview Of Your Text:"
              placehold="Enter Your Text Here..."
              mode={mode}
              showalert={showalert}
            />}/>
          
           </Routes> 
      </Router> 
    </>
  );
}

export default App;
