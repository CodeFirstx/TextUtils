import React, {useState} from 'react'

export default function TextForm(props) {
  
  function handleUpClick(){
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Capital","success")
  }
  function handleLowClick(){
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lower","success")
  }
  function clearText(){
    let newText = ''
    setText(newText)
  }
  function handleOnChange(event){
    setText(event.target.value)
  }

  const[text,setText] = useState("Enter here to capitalize your sentence")
  return (
    <>
    <div>
    <h1>{props.heading}</h1>
<div className="mb-3">
      <textarea className="form-control" value = {text} id="mybox" onChange={handleOnChange} rows="6" style= {{backgroundColor: props.mode === 'light'?'grey':'light'}} ></textarea>
</div>
<button className="btn btn-primary mx-2" onClick= {handleUpClick}>Convert text to upperCase</button>
<button className="btn btn-primary mx-2" onClick= {handleLowClick}>Convert text to lowerCase</button>
<button className="btn btn-primary mx-2" onClick= {clearText}>Clear Text</button>
    </div>
    <div className="container my-5">
      <h3>Your text Summary</h3>
      <p>Your sentence has {text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <p><strong>Time to read your sentence in minutes </strong> {0.008 * text.split(" ").length}</p>
    </div>
    <div className="container">
      <h3>Preview</h3>
      <p>{text.length > 0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
