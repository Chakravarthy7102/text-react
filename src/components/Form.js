import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState("");
  const [btnClass, setClass] = useState("btn btn-outline-success");
  const [copy, setCopied] = useState("copy");

  const handleUpperCase = () => {
    if (text !== "") {
      const newText = text.toUpperCase();
      setText(newText);
      props.showAlert("success", "Converted to Upper Cases");
    } else {
      props.showAlert("danger", "Please Enter Something to Operate on");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerCase = () => {
    if (text !== "") {
      const newText = text.toLowerCase();
      setText(newText);
      props.showAlert("success", "Converted to Lower Cases");
    } else {
      props.showAlert("danger", "Please Enter Something to Operate on");
    }
  };
  //handling the clear button
  const handleClear = () => {
    setText("");
    setClass("btn btn-outline-success");
    setCopied("copy");
    props.showAlert("success", "Text Area is Cleared");
  };

  //handling copy button
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setClass("btn btn-success");
    setCopied("copied");
    props.showAlert("success", "Copied to Clipboard!!!");
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <div className="d-grid gap-2 d-md-block">
            <label htmlFor="myBox" className="form-label">
              <h5>{props.title}</h5>
              <button className={btnClass} onClick={handleCopy}>
                {copy}
              </button>
            </label>
          </div>

          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
            placeholder="Enter your Text here"
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-danger mx-2"
          type="submit"
          onClick={handleClear}
        >
          Clear
        </button>
        <button className="btn btn-primary " onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert to Lowerrcase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length === 1 && text.length === 0
            ? 0
            : text.split(" ").length}{" "}
          letters and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} total minutes to read</p>
        <h2>Preview</h2>
        <p>{text === "" ? "Enter text to see Preview" : text}</p>
      </div>
    </>
  );
}

export default Form;
