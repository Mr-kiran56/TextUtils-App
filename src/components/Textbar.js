import React, { useState } from 'react';

export default function Textbar(props) {
    const [text, setText] = useState('');
    const [fontStyle, setFontStyle] = useState('Arial');

    const settoUpper = () => {
        setText(text.toUpperCase());
        props.showalert('Text Changed To UpperCase', 'success');
        document.title = 'Text to UpperCase'
        setTimeout(() => {
            document.title = 'TextUtils'
        }, 1000);
    };
    const settoLower = () => {
        setText(text.toLowerCase());
        props.showalert('Text Changed To LowerCase', 'success')
        document.title = 'Text to Lower Case'

        setTimeout(() => {
            document.title = 'TextUtils'
        }, 1000);

    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        props.showalert('Speak Mode Activated', 'success')
        document.title = 'Speak Mode Activated'
        setTimeout(() => {
            document.title = 'TextUtils'
        }, 1500);

    };

    const textClear = () => {
        setText('');
        props.showalert('Text Cleard', 'success');
        document.title = 'Text Cleard'
        setTimeout(() => {
            document.title = 'TextUtils'
        }, 1500);

    };

    const handleFontChange = (event) => {
        setFontStyle(event.target.value);
        props.showalert('Font Style Changed', 'success');
        document.title = 'Font Style Changed'
        setTimeout(() => {
            document.title = 'TextUtils'
        }, 1500);
    };
    const copyText = () => {
        var ctext = document.getElementById('mybox');
        ctext.select();
        navigator.clipboard.writeText(ctext.value);
        props.showalert('Text Copied To Clipboard', 'success')
        document.title = 'Text Copied'
        setTimeout(() => {
            document.title = 'TextUtils'
        }, 1500);

    };

    const titleCase = () => {
        setText(text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));
        props.showalert('Text Changed To TitleCase', 'success')
        document.title = 'Text to title Case'
        setTimeout(() => {
            document.title = 'TextUtils'
        }, 1500);
    };
    const removeSpace = () => {
        var rtext = text.split(/[ ]+/);
        setText(rtext.join(" "))
        props.showalert('Spaces Removeded', 'success')
        document.title = 'spaces Removed'
        setTimeout(() => {
            document.title = 'TextUtils'
        }, 1500);

    }

    return (
        <>
            <div>
                <div className="container mt-4"  >
                    <h2 className="mb-2 " style={{ color: props.mode === 'black' ? 'white' : 'black' }} >{props.heading}</h2>
                    <textarea
                        id="mybox"
                        className="form-control"
                        value={text}
                        onChange={handleChange}
                        rows="8"
                        placeholder={props.placehold}
                        style={{ fontFamily: fontStyle, color: props.mode === 'black' ? 'white' : 'black', backgroundColor: props.mode === 'black' ? '#262E32' : 'white' }}
                    ></textarea>

                    <button disabled={text.length===0} onClick={settoUpper} className='btn btn-warning my-3'>{props.btnText}</button>
                    <button disabled={text.length===0} onClick={settoLower} className='btn btn-warning ms-3 my-3'>{props.btn2Text}</button>
                    <button disabled={text.length===0} onClick={speak} className="btn btn-warning ms-3 my-3 xb">Speak</button>
                    <button disabled={text.length===0} onClick={textClear} className="btn btn-warning ms-3 my-3">Clear Text</button>
                    <button disabled={text.length===0} onClick={titleCase} className="btn btn-warning ms-3 my-3">Title Text</button>
                    <button disabled={text.length===0} onClick={copyText} className="btn btn-warning ms-3 my-3">Copy Text</button>
                    <button disabled={text.length===0} onClick={removeSpace} className="btn btn-warning ms-3 my-3">Remove Spaces</button>

                    <select  className="ms-3 my-3 bg-warning rounded  pb-2 pt-1 " onChange={handleFontChange} value={fontStyle}>
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                </div>






                <div className='container'>
                    <h3>{props.textsummary}</h3>
                    <p className='fs-5'> {text.split(" ").filter(word => word !== "").length} words and {text.length} characters </p>
                    <p>{(0.08 * text.split(" ").filter(word => word !== "").length).toFixed(2)} min time taken</p>
                    <h3>{props.preview}</h3>
                    <p style={{ fontFamily: fontStyle }} >{text.length > 0 ? text : "Enter Something to Preview Your Text....."} </p>
                </div>
            </div>
        </>
    );
}
