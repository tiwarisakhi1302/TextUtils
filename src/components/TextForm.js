//import React from 'react'
import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUPClick = ()=>{
    //console.log("Uppercase is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Changed to Uppercase", "success");
  }
  //This is important
  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }

  const handleLWClick=() =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Changed to Lowercase", "success");
  }

  const handleClearClick = ()=>{
    setText("");
    props.showAlert("Text Cleared", "success");
  }

  const handleCopyClick = ()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copyed", "success");
  }
  const [text, setText] = useState(''); //useState is a hook
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==="light" ? "white" : "black" , color: props.mode==="light" ? "black" : "white"}} value={text}></textarea>
        </div>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleUPClick}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleLWClick}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleCopyClick}>Copy Text</button>
    </div>
    {/*div.container*/}
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Reading Time : {0.008*text.split(" ").length} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter the text to preview"}</p>
    </div>
    </>
  )
}
