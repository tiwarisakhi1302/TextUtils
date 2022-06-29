import React from 'react'

export default function About(props) {
  return (
    <div className='container my-5' style={{backgroundColor: props.mode==="light" ? "white" : "#282828" , color: props.mode==="light" ? "#282828" : "white"}} >
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode==="light" ? "white" : "#282828" , color: props.mode==="light" ? "#282828" : "white"}}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button"  style={{backgroundColor: props.mode==="light" ? "white" : "#282828" , color: props.mode==="light" ? "#282828" : "white"}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyse Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==="light" ? "white" : "#282828" , color: props.mode==="light" ? "#282828" : "white"}}>
                    TextUtils gives the way to analyze your text quickly and efficiently. Be it word count, character count.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode==="light" ? "white" : "#282828" , color: props.mode==="light" ? "#282828" : "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==="light" ? "white" : "#282828" , color: props.mode==="light" ? "#282828" : "white"}}>
                TextUtils is the free character counter tool that provides the instant character count & word count statistics for the given text.
                TextUtils report the number of words and characters. Thus it is suitable for writing text with word and character limits.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode==="light" ? "white" : "#282828" , color: props.mode==="light" ? "#282828" : "white"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==="light" ? "white" : "#282828" , color: props.mode==="light" ? "#282828" : "white"}}>
                    This Word Counter Software works in any web browser such as chrome, Firefox, Internet Explorer, Safari, Opera.
                    It suits to count characters in facebook, blogs, books, excel documents, pdf documents, essays, etc.
                </div>
            </div>
        </div>
        </div>
        

    </div>
  )
}
