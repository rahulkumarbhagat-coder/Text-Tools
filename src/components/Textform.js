import React, {useState} from 'react'
// import { Navigate, useNavigate } from 'react-router-dom';



export default function Textform(props) {

  // const Navigate = useNavigate()    to make button get component

  // function handleOnClick(){
  //     Navigate("/about");
  // }

  const[text, setText] = useState('')
  // setText('new text')

  const upperCase = () =>{
    // console.log('upper case was clicked')
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UPPERCASE", "success")
  }
  const lowerCase = () =>{
    // console.log('upper case was clicked')
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "success")
  }
  const clear = () =>{
    // console.log('upper case was clicked')
    let newText = "";
    setText(newText)
    props.showAlert("All text cleared", "success")
  }
  const copy = ()=>{
    const text = document.getElementById('textArea')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success")
  }

  const removeEmpty = ()=> {
    let newText = text.split(/\s+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed", "success")
  }


  const handleOnChnage = (event) =>{
    // console.log('on change')
    setText(event.target.value)
  }

 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        {/* <button onClick={handleOnClick}>Click Me</button> */}

<div className="mb-3">
  <label htmlFor="Text Area" className="form-label">Text Area</label>
  <textarea className="form-control" id="textArea" value={text} onChange={handleOnChnage} rows="8" style={{backgroundColor:props.mode==='dark'?'rgb(22 19 48 / 89%)':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
</div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={upperCase}>Convert to UPPER CASE</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowerCase}>Convert to lower case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clear}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copy}>Copy</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeEmpty}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{(text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length)} Words {text.length} Characters</p>
      <p>{0.008*((text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length))} Minutes to read</p>
      <h3>Preview Text</h3>
      <p>{text.length>0?text:"Enter text above to preview it"}</p>
    </div>
    </>
  )
  
}
