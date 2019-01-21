import React from 'react';
import styles from './Modal.module.css';
import propTypes from 'prop-types';

class Modal extends React.Component{

    render(){
        return(
                <div className={styles[this.props.showOrHide]}>
                    <div className={styles.modal}>
                        <p>{this.props.modalText}</p>
                        <button onClick={this.props.doNotShow}>Don't show again</button>
                        <button onClick={this.props.dismiss}>Dismiss</button>
                    </div>
                </div>
        )
    }
}

Modal.propTypes = {
    showOrHide: propTypes.string,
    modalText: propTypes.string,
    doNotShow: propTypes.func,
    dismiss: propTypes.func
}

export default Modal;