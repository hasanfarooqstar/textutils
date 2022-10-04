import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLoClick = () => {
    console.log("Lower case was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleClearClick = () => {
    console.log("Clear was Clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text is Removed", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are removed from text", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <button className="button btn btn-primary my-3" onClick={handleUpClick}>
          Convert to UPPER case
        </button>
        <button
          className="button btn btn-primary my-3 ms-3"
          onClick={handleLoClick}
        >
          Convert to Lower case
        </button>
        <button
          className="button btn btn-primary my-3 ms-3"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className="button btn btn-primary my-3 ms-3"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="button btn btn-primary my-3 ms-3"
          onClick={handleExtraSpaces}
        >
          Remove Exrta Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Some text to preview"}</p>
      </div>
    </>
  );
}
