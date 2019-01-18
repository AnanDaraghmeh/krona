import React from 'react';
import styles from './MainCompItem.module.css';
import propTypes from 'prop-types';

const MainCompItem = (props)=>{
    return (
        <li className={styles.exchangeItem}>
            <img src={props.flag} alt="flag"/>
            <div>
            <span>{props.value}</span>
            <span>|</span>
            <span>{props.name}</span>
            </div>  
        </li>
    )
}

MainCompItem.propTypes = {
    flag: propTypes.string,
    value: propTypes.string,
    name: propTypes.string
}

export default MainCompItem;