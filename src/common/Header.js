import React from 'react';
import styles from './Header.module.css';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            togglerIsClicked: false,
            NavMenuIsOpen: false
        }
    }

    toggleNavMenu = (e)=>{
        let currentToggleState =this.state.togglerIsClicked;
        let currentNAvMenuState =this.state.NavMenuIsOpen;
        this.setState({
            togglerIsClicked: !currentToggleState,
            NavMenuIsOpen: !currentNAvMenuState
        })
    }

    render(){
        return(
            <>
            <header className={styles.header}>
                <div className={styles.toggler} onClick={this.toggleNavMenu}>
                    <span className={this.state.togglerIsClicked? `${styles.line1} ${styles.open}`: styles.line1}></span>
                    <span className={this.state.togglerIsClicked? `${styles.inbetween} ${styles.open}`: styles.inbetween}>MENU</span>
                    <span className={this.state.togglerIsClicked? `${styles.line2} ${styles.open}`: styles.line2}></span>
                </div>
                <Link to={'/'}><div className={styles.logoContainer}><img src={logo} alt="logo"/><span>KRONA</span></div></Link>
            </header>
            <nav className={this.state.NavMenuIsOpen? `${styles.navMenu} ${styles.navMenuShown}`: styles.navMenu}>
                <Link onClick={this.toggleNavMenu} to={'/'}>Exchange Rates</Link>
                <Link onClick={this.toggleNavMenu} to={'/converter'}>Currency Converter</Link>
                <Link onClick={this.toggleNavMenu} to={'/about'}>About</Link>
            </nav>
            </>
        )
    }
}
export default Header;