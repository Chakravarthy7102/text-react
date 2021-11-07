import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alert, setalert] = useState(null);
  const [mode, setmode] = useState("light");
  const showAlert = (message, line) => {
    setalert({
      message: message,
      line: line,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light" || mode === "danger") {
      setmode("dark");
      document.body.style.background = "#212529";
      document.body.style.color = "white";
      showAlert("success", "Dark Mode is Enabled");
    } else {
      setmode("light");
      document.body.style.background = "white";
      document.body.style.color = "#212529";
      showAlert("success", "Light Mode is Enabled");
    }
  };

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Form
                title="Enter the Text To Render"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
