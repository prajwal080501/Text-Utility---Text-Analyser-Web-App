import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Textform.css";

export default function Textform({ darkMode, setDarkMode, showAlert }) {
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

  const myStyle = {
    backgroundColor: `${darkMode ? "black" : "white"}`,
    color: `${darkMode ? "white" : "black"}`,
    borderColor: `${darkMode ? "white" : "black"}`,
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
                styles={myStyle}
                value={input}
                onChange={handleChange}
                as="textarea"
                placeholder="Enter or paste text"
                className="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
          <div class="button-container">
            <Button onClick={copyToClipboard} variant="danger" className="btn">
              Copy Text
            </Button>
            <Button onClick={handleUpClick} variant="danger" className="btn">
              Capitalize Text
            </Button>
            <Button onClick={handleLowClick} variant="danger" className="btn">
              Convert to lowercase
            </Button>
            <Button onClick={clearText} variant="danger" className="btn">
              Clear Text
            </Button>
          </div>
          <div class="button-container">
            <Button onClick={reverseText} variant="danger" className="btn">
              Reverse Text
            </Button>
            <Button onClick={capSelectedText} variant="danger" className="btn">
              Capitalize selected Text
            </Button>
          </div>
        </div>
        <div class="container2">
          <div class="preview" styles={myStyle}>
            <h3 className="title">Preview</h3>
            <p>{input}</p>
          </div>
          <div class="text-analyser" styles={myStyle}>
            <h3 className="title">Your text summary</h3>
            <p className="data">Word Count: {input.split(" ").length} </p>
            <p className="data">
              Character Count (including spaces): <b>{input.length}</b>
            </p>
            <p className="data">
              Character Count (excluding spaces):{" "}
              <b>{input.length - input.split(" ").length + 1}</b>
            </p>
            
            <p className="data">
              Read Time: Will take <b>{input.split(" ").length * 0.08}</b>{" "}
              minutes to read
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
