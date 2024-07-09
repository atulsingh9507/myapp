import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
          console.log("uppercase was clicked" + text);
          let newText = text.toUpperCase();
          setText(newText)
          props.showAlert("Converted to uppercase!",'success');
          document.title = 'Vikashtech - UpperCase';

    }
    const handleOnChange =(Event)=>{
          console.log("On change");
          setText(Event.target.value);
        

    }
    const handleExtraSpaces =() =>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Handle Extra spaces!","success");
      document.title = 'Vikashtech - Extra space remove';
    }
    const [text,setText] =useState("");

  return (
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
     
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
      </div>
      <button  className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>convert to uppercase</button>
      <button   className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <h2>your text summery</h2>
    <p>{text.split(/\s+/).filter((element )=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element )=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    
  )
}