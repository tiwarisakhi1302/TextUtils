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
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copyed", "success");
  }

  let wordsCount = (text)=>{
    let count=0;
    let arr = text.split(" ");
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]!=="") count++;
    }
    console.log(count);
    return count;
  }
  const [text, setText] = useState(''); //useState is a hook
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==="light" ? "white" : "#282828" , color: props.mode==="light" ? "#282828" : "white"}} value={text}></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn  my-3 mx-2" style={{backgroundColor: props.mode==="light" ? "#0000FF" : "#282828", color:  "white"}} onClick={handleUPClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} type="button" className="btn  my-3 mx-2" style={{backgroundColor: props.mode==="light" ? "#0000FF" : "#282828", color:  "white"}} onClick={handleLWClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} type="button" className="btn  my-3 mx-2" style={{backgroundColor: props.mode==="light" ? "#0000FF" : "#282828", color:  "white"}} onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} type="button" className="btn  my-3 mx-2" style={{backgroundColor: props.mode==="light" ? "#0000FF" : "#282828" , color:  "white"}} onClick={handleCopyClick}>Copy Text</button>
    </div>
    {/*div.container*/}
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{wordsCount(text)} words and {text.length} characters</p>
        <p>Reading Time : {0.008*wordsCount(text)} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}
