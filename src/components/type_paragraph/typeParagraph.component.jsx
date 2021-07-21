import React from 'react';

import './typeParagraph.style.css';

export const TypePara = (props) => {
    return(
        <div className="textBoxDiv">
            <textarea id="textBox" onChange={(e) => props.changeFunc(e)} className="textBox" style={props.error?{border: '4px dashed rgb(236, 13, 13)'}:{border: '4px solid rgb(107, 214, 250)'}}  placeholder="Start typing the above paragraph here..."/>
        </div>
        
    );
}