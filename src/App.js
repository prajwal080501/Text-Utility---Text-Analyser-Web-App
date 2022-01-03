import "./App.css";
import React, { useState } from "react";

import Header from "./components/Navbar/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { Alert } from "react-bootstrap";
import Popup from "./components/Alert/Popup";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(true);

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)  => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }
      , 3000);
  }

  const handleDarkMode = () => {
    if (darkMode === false) {
      setDarkMode(true);
      showAlert("Dark Mode Activated", "dark");
      document.title = "Text Utility | Dark Mode";
    } else {
      setDarkMode(false);
      showAlert("Dark Mode Deactivated", "success");
      document.title = "Text Utility | Light Mode";
      
    }
  };

  let myStyle = {
    transition: "all 0.4s linear",
    backgroundColor: `${darkMode ? "#3d3b3b " : "white "}`,
    color: `${darkMode ? "white" : "black"}`,
    borderColor: `${darkMode ? "white" : "black"}`,
  };

  return (
    <Router>
      <div className="App" style={myStyle}>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleDarkMode={handleDarkMode}
          title="Text Utility"
        />
        <Popup alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                showAlert = {showAlert}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                handleDarkMode={handleDarkMode}
                myStyle={myStyle}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                handleDarkMode={handleDarkMode}
                title="Text Utility"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
