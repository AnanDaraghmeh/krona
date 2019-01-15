import React from 'react';
import '../App.css';


const Krona = (props)=>{
    return (
        <li className="exchange-item">
            <img src={props.flag} alt="flag"/>
            <div>
            <span>{props.value}</span>
            <span>|</span>
            <span>{props.name}</span>
            </div>  
        </li>
    )
}

export default Krona;