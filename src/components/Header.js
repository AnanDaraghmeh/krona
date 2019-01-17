import React from 'react';
import './Header.css';
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
            <header>
                <div id="toggler" onClick={this.toggleNavMenu}>
                    <span className={this.state.togglerIsClicked? 'line1 open': 'line1'}></span>
                    <span className={this.state.togglerIsClicked? 'inbetween open': 'inbetween'}>MENU</span>
                    <span className={this.state.togglerIsClicked? 'line2 open': 'line2'}></span>
                </div>
                <div className="logo-container"><img src={logo} alt="logo"/><span>KRONA</span></div>
            </header>
            <nav className={this.state.NavMenuIsOpen? 'nav-menu shown': 'nav-menu hidden'}>
                <Link onClick={this.toggleNavMenu} to={'/'}>Exchange Rates</Link>
                <Link onClick={this.toggleNavMenu} to={'/converter'}>Currency Converter</Link>
                <Link onClick={this.toggleNavMenu} to={'/about'}>About</Link>
            </nav>
            </>
        )
    }
}
export default Header;