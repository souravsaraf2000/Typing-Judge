import React from 'react';

import './instruction.style.css';

export const Instructions = (props) => {
    return(
        <div className="pop-up" id="pop-up" style={{display:props.disp}}>
        <div className="instructions">
            <h2>General Instructions</h2>
            <ol>
                <li>
                    A paragraph is displayed. You need to type the paragraph in the textbox provided below.
                </li>
                <li>
                    Incase there is any mistake while typing, the border will turn red.
                </li>
                <li>
                    If you want to change paragraph, please click "Change Paragraph" Button.
                </li>
                <li>
                    If you want to startover again, then click "Reset" Button.
                </li>
                <li>
                    When you are done writing and want to check your results, please click "Check" Button.
                </li>
                <li>
                    Result will appear below the text box, so you need to scroll a bit.
                </li>
                <li>
                    Copy Paste is blocked, so, if you want to do <b>Feature Testing</b> please click "Change Paragraph" a few times, "Test Paragraph" text will appear
                    and you can type that in text box and test the application.
                </li>
            </ol>
            <div className="button">
                <button className="btn btn-primary" onClick={props.click}>Ok</button>
            </div>
        </div>
    </div>
    );
}