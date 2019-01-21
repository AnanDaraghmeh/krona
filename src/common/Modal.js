import React from 'react';
import styles from './Modal.module.css';
import propTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';

const ModalContainer = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        transition: { duration: 150 }
      },
      exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
      }
});

class Modal extends React.Component{

    render(){
        return(
            <PoseGroup>
            {this.props.pose && [
                <ModalContainer key="modal" className={styles.shade}>
                    <div className={styles.modal}>
                        <p>{this.props.modalText}</p>
                        <button onClick={this.props.doNotShow}>Don't show again</button>
                        <button onClick={this.props.dismiss}>Dismiss</button>
                    </div>
                </ModalContainer>
            ]}
            </PoseGroup>
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