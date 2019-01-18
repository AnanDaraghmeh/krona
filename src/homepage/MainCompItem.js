import React from 'react';
import styles from './MainCompItem.module.css';


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

export default MainCompItem;