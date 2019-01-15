import React from 'react';
import './Converter.css'

const ConvertResult = (props)=>{
    return(
        <div className={props.shownOrHidden}>
            {props.result}
        </div>
    )
}

export default ConvertResult; 