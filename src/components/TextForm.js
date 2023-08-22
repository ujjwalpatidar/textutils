import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
    
  };
  const handleLoClick = () => {
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
   
  };
  const handleClearClick = () => {
    
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared","success");
  };
  const handleCopy = () => {
    
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied","success");
  };
  const handleExtraSpace = () => {
    // eslint-disable-next-line
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed","success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1 style={{color : props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor : props.mode==='dark'?'grey':'white',
            color : props.mode==='dark'?'white':'black'}}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to lowwercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h2 style={{color : props.mode==='dark'?'white':'black'}}>Your Text Summary</h2>
        <p style={{color : props.mode==='dark'?'white':'black'}}>
          {text.length>0?text.trimEnd().split(" ").length:text.length} words, {text.length} char
        </p>
        <p style={{color : props.mode==='dark'?'white':'black'}}>{0.008 * text.split(" ").length} Minutes read</p>
        <h2 style={{color : props.mode==='dark'?'white':'black'}}>Preview</h2>
        <p style={{color : props.mode==='dark'?'white':'black'}}>{text.length>0?text:'Enter something to preview here'}</p>
      </div>
    </>
  );
}
