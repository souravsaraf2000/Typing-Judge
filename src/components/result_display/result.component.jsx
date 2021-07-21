import React from 'react';

import './result.style.css';

export const Result = (props) => {
    return(
        <div className="resultBox">
            <h2>Result:</h2>
            <div>
                <p>Incorrect Words: {props.incorrect}</p>
                <p>Correct Words: {props.correct}</p>
                <p>Total Word Count: {props.count}</p>
                <p>Accuracy: {props.accuracy}</p>
                <p>Words per minute: {props.wpm}</p>
            </div>
        </div>
    )
}