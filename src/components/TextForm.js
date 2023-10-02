import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    var [text, setText]=useState('')
    const  OntextChanged = (event)=>
    {
        setText(event.target.value);
    }
    const OnUpperButtonClicked=()=>
    {
        let resultStr = text.toUpperCase();
        setText(resultStr);
        props.ShowAlert("Converted to Upper Case", "success")
    }
    const OnLowerButtonClicked=()=>
    {
        let resultStr = text.toLocaleLowerCase();
        setText(resultStr);
        props.ShowAlert("Converted to Lower Case", "success")
    }
    const OnClearButtonClicked=()=>
    {
        let resultStr = "";
        setText(resultStr);
        props.ShowAlert("Cleared", "success")
    }
    const CopyTextToClickBoard=()=>
    {
        if (GetTextLength(text) > 0)
        {
            navigator.clipboard.writeText(text);
            props.ShowAlert("Copied to Clipboard", "success")
        }
    }
    const HandleExtraSpace=()=>
    {
        let newText= text.split(/[ ]+/)
        setText(newText.join(" "));
        props.ShowAlert("Extra spaces removed", "success")
    }
    function GetTextWordLength()
    {
        return text.length === 0 || text.trim()===''? 0: text.trim().split(" ").length
    }
    function GetTextLength()
    {
        return text.trim()===''?0: text.length
    }
    const myStyle =
    {backgroundColor: props.mode==="dark"? "#18185a":"white", color: props.mode==="dark"? "white":"black"}
  return (
    <>
    <div className='container' style={myStyle} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={OntextChanged} style={myStyle}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={OnUpperButtonClicked}>Convert to Upper Case</button>
        <button type="button" className="btn btn-primary mx-2" onClick={OnLowerButtonClicked}>Convert to Lower Case</button>
        <button type="button" className="btn btn-primary mx-1" onClick={OnClearButtonClicked}>Clear</button>
        <button type="button" className="btn btn-primary mx-1" onClick={CopyTextToClickBoard}>Copy Text To Clipboard</button>
        <button type="button" className="btn btn-primary mx-1" onClick={HandleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className='container my-3' style={myStyle}>
        <h1>
            Your Text Summary
        </h1>
        <p1> {GetTextWordLength()} words and {GetTextLength()} characters</p1>
        <p>{0.008 * (GetTextWordLength())} Minutes read</p>
        <h2>Preview</h2>
        <div>
        <p>{GetTextLength() > 0 ? text: "Enter some text in the Text Box above to preview it here..."}</p>
        </div>
    </div>
    </>
    
  )
}
TextForm.propTypes = 
{
    heading:PropTypes.string
}
TextForm.defaultProps=
{
    heading:'Enter Value'
}

