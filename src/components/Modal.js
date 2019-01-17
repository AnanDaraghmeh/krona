import React from 'react';
import './Modal.css';

const Modal = (props)=>{
    return(
        <div className={props.showOrHideModal}>
            <p>{props.modalText}</p>
            <button onClick={props.doNotShow}>Don't show again</button>
            <button onClick={props.dismiss}>Dismiss</button>
        </div>
    )
}

export default Modal;