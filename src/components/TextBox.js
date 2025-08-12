import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'

function TextBox(props) {
    const [text, setText] = useState('Enter any name');
    const handleClick = () => {
        console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChnage = (event) => {
        console.log("Handle on change");
        setText(event.target.value);
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChnage} id="my_box" rows="8"></textarea>
            </div>
            <Button variant='contained' onClick={handleClick}>Click me</Button>
        </>
    )
}

export default TextBox