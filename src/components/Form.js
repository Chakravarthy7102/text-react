import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    if (text !== "") {
      const newText = text.toUpperCase();
      setText(newText);
    } else {
      alert("Please Enter Something to Operate on");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h5>{props.title}</h5>
          </label>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
            placeholder="Enter your Text here"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
      </div>
    </>
  );
}

export default Form;
