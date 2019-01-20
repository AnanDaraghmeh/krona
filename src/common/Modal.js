import React from 'react';
import styles from './Modal.module.css';
import propTypes from 'prop-types';

class Modal extends React.Component{

    render(){
        return(
            <div className={styles[this.props.showOrHideModal]}>
                <p>{this.props.modalText}</p>
                <button onClick={this.props.doNotShow}>Don't show again</button>
                <button onClick={this.props.dismiss}>Dismiss</button>
            </div>
        )
    }
}

Modal.propTypes = {
    showOrHideModal: propTypes.string,
    modalText: propTypes.string,
    doNotShow: propTypes.func,
    dismiss: propTypes.func
}
export default Modal;