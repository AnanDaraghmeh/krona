import React from 'react';
import styles from './Modal.module.css';
import propTypes from 'prop-types';
import posed from 'react-pose';

const AnimatedDiv = posed.div({
    hidden: {opacity:0, transition: { duration: 500 }},
    visible: {opacity:1, transition: { duration: 500 }}
});

class Modal extends React.Component{

    render(){
        return(
            <AnimatedDiv className={styles.modalContainer} pose={this.props.pose}>
                <p>{this.props.modalText}</p>
                <button onClick={this.props.doNotShow}>Don't show again</button>
                <button onClick={this.props.dismiss}>Dismiss</button>
            </AnimatedDiv>
        )
    }
}

Modal.propTypes = {
    pose: propTypes.string,
    modalText: propTypes.string,
    doNotShow: propTypes.func,
    dismiss: propTypes.func
}
export default Modal;