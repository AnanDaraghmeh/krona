import React from 'react';
import styles from './Modal.module.css';
import propTypes from 'prop-types';

const Modal = (props)=>{
    return(
        <div className={styles[props.showOrHideModal]}>
            <p>{props.modalText}</p>
            <button onClick={props.doNotShow}>Don't show again</button>
            <button onClick={props.dismiss}>Dismiss</button>
        </div>
    )
}

Modal.propTypes = {
    showOrHideModal: propTypes.string,
    modalText: propTypes.string,
    doNotShow: propTypes.func,
    dismiss: propTypes.func
}
export default Modal;