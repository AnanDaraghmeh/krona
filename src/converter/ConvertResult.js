import React from 'react';
import styles from './ConvertResult.module.css';

const ConvertResult = (props)=>{
    return(
        <div className={styles[props.shownOrHidden]}>
            {props.result}
        </div>
    )
}

export default ConvertResult; 