import React from 'react'

function TextBox(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="my_box" rows="8"></textarea>
            </div>
        </>
    )
}

export default TextBox