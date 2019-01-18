import React from 'react';
import styles from './Modal.module.css';

const Modal = (props)=>{
    return(
        <div className={styles[props.showOrHideModal]}>
            <p>{props.modalText}</p>
            <button onClick={props.doNotShow}>Don't show again</button>
            <button onClick={props.dismiss}>Dismiss</button>
        </div>
    )
}

export default Modal;