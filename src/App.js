import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("DarkMode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title='TextUtils is Amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title='TextUtils';
      // }, 700);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Textutils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Switch>
          
            <Route exact path="/">
              <TextForm
                heading="Enter Text"
                mode={mode}
                showAlert={showAlert}
              ></TextForm>
              
            </Route>
            <Route exact path="/about" >
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
