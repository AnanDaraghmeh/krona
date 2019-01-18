import React from 'react';
import styles from './ConvertResult.module.css';
import propTypes from 'prop-types';

const ConvertResult = (props)=>{
    return(
        <div className={styles[props.shownOrHidden]}>
            {props.result}
        </div>
    )
}

ConvertResult.propTypes = {
    shownOrHidden: propTypes.string,
    result: propTypes.string
}
export default ConvertResult; 