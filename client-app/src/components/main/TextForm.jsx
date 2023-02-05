import React, {useState} from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClClick = () => {
        return setText("")
    }
    const wordCounter = (text) => {
        if(text === "") return text.split(" ").length-1;
        else if(text.slice(-1) === " ") return text.split(" ").length-1;
        return text.split(" ").length;
    }
    const charCounter = (text) => {
        let newText = text;
        return newText.length;
    }
    const minCounter = (text) => {
        let time = 0.008/5.5 * text.length;
        if(text === "") return 0.00;
        return time.toFixed(4);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container"id ="textForm">
                <h1>Enter Text to analyze:</h1>
                <div className="mb-3">
                    <textarea className="form-control" value= {text} onChange={handleOnChange} id="TextBox" rows="8" placeholder="Enter text here"></textarea>
                </div>
                <button className="btn btn-outline-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-outline-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-outline-danger mx-1 my-1" onClick={handleClClick}>Clear Text</button>
            </div>
            <div className="container my-3" id='preview'>
                <h5>Your text summary</h5>
                <p><b>{wordCounter(text)}</b> words and <b>{charCounter(text)}</b> charracters.</p>
                <p><b>{minCounter(text)}</b> minutes to read.</p>
                <h3>Preview</h3>
                <textarea className="form-control" onChange={handleOnChange} rows="4" id="value" value={text}></textarea>
            </div>
        </>
    )
}

