import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Textform.css";

export default function Textform({
  darkMode,
  setDarkMode,
  showAlert,
  myStyle,
}) {
  const [input, setInput] = useState("");
  const [wordCount, setWordCount] = useState(0);

  //Functions

  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  const handleUpClick = () => {
    setInput(input.toUpperCase());
    showAlert("Converted to uppercase", "success");
  };

  const clearText = () => {
    setInput("");
    showAlert("Text Cleared", "success");
  };

  const words = () => {
    return input.split(" ").length;
  };

  const reverseText = () => {
    setInput(input.split("").reverse().join(""));
    showAlert("Text reversed", "success");
  };

  const capSelectedText = () => {
    if (window.getSelection) {
      let selectedText = window.getSelection.toString();
      setInput(input.replace(selectedText, selectedText.toUpperCase()));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);
    showAlert("Text copied to clipboard", "success");
  };
  const handleLowClick = () => {
    setInput(input.toLowerCase());
    showAlert("Text converted to lowercase", "success");
  };

  return (
    <>
      <div className="container1">
        <div className="textform-container">
          <Form className="form">
            <Form.Group
              className="mb-5 my=5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                value={input}
                onChange={handleChange}
                as="textarea"
                placeholder="Enter or paste text"
                className={
                  darkMode ? "bg-dark text-light" : "bg-light text-dark"
                }
                rows={3}
              />
            </Form.Group>
          </Form>
          <div className="button-container">
            <Button
              onClick={copyToClipboard}
              variant={darkMode ? "dark" : "danger"}
              className="btn"
              disabled={!input}  
            >
              Copy Text
            </Button>
            <Button
              onClick={handleUpClick}
              variant={darkMode ? "dark" : "danger"}
              disabled={!input}  
              className="btn"
            >
              Capitalize Text
            </Button>
            <Button
              onClick={handleLowClick}
              disabled={!input}
              variant={darkMode ? "dark" : "danger"}
              className="btn"
            >
              Convert to lowercase
            </Button>
            <Button
              onClick={clearText}
              disabled={!input}
              variant={darkMode ? "dark" : "danger"}
              className="btn"
            >
              Clear Text
            </Button>
          </div>
          <div className="button-container">
            <Button
              onClick={reverseText}
              disabled={!input}
              variant={darkMode ? "dark" : "danger"}
              className="btn"
            >
              Reverse Text
            </Button>
          </div>
        </div>
        <div className="container2">
          <div className="preview" style={myStyle}>
            <h3 className="title">Preview</h3>
            <p>{input.length>0 ? input : "Notihing to preview!"}</p>
          </div>
          <div className="text-analyser" style={myStyle}>
            <h3 className="title">Your text summary</h3>
            <p className="data">
              Word Count:{" "}
              {
                input.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
            </p>
            <p className="data">
              Character Count (including spaces): <b>{input.length}</b>
            </p>
            <p className="data">
              Character Count (excluding spaces):{" "}
              <b>{input.length - input.split(" ").length + 1}</b>
            </p>

            <p className="data">
              Read Time: Will take{" "}
              <b>
                {input.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length * 0.08}
              </b>{" "}
              minutes to read
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
