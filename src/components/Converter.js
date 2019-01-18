import React from 'react';
import axios from 'axios';
import Header from './Header';
import ConvertResult from './ConvertResult';
import styles from './Converter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';


class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            from:'USD',
            to: 'SEK',
            amount: 0,
            result: 0,
            showResultDiv: false,
            arrowDirectionUp: false,
            showModal:false
        };
    }

    fromHandeler = (e)=>{
       console.log(e.target.value)
       if (!this.state.arrowDirectionUp){
        this.setState({
            from: e.target.value
        })
       } else{
        this.setState({
            to: e.target.value
        })
       }
        
    }
    toHandeler = (e)=>{
        console.log(e.target.value)
        if (!this.state.arrowDirectionUp){
            this.setState({
                to: e.target.value
            })
        } else {
            this.setState({
                from: e.target.value
            })
        }
        
        

    }
    inputHandeler = (e)=>{
        console.log(e.target.value);
        this.setState({
            amount: parseFloat(e.target.value)
        })
        
    }
    toggleValues = (e)=>{
        this.setState({
            from: this.state.to,
            to: this.state.from,
            arrowDirectionUp: !this.state.arrowDirectionUp
        })
    }


    componentDidUpdate = ()=>{
        if (this.state.amount > 0){
            axios.get(`https://api.openrates.io/latest?base=${this.state.from}`)
            .then(res => {
                let result = (res.data.rates[this.state.to] * this.state.amount).toFixed(2);
                console.log(typeof res.data.rates[this.state.to]);
                console.log(typeof this.state.amount);
                result = result + ' ' + this.state.to;
                if (this.state.result !== result){
                    this.setState({
                        result: result,
                        showResultDiv: true
                    })
                }
            })
        }
    }

    componentDidMount = ()=>{
        if (localStorage.getItem('modal') === null){
            setTimeout(() => {
                this.setState({
                    showModal: true
                })
            }, 5000);
        }
        
    }
    doNotShowhandeler = ()=>{
    localStorage.setItem('modal', 'hide');
        this.setState({
            showModal: false,
        })
    }

    dismissHandeler = ()=>{
        this.setState({
            showModal: false,
        })
    }
   
   

    render(){
        return(
            <>
            <Header />
            <div className={styles.container}>
            <input type="number" placeholder="Amount?" onChange={this.inputHandeler}/>
            <label className={styles.selectWrapper}>
                <select onChange={this.fromHandeler}>
                    <option value="USD">US Dollar</option>
                    <option value="SEK" >Swedish krona</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">British Pound</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="TRY">Turkish Lira</option>
                    <option value="JPY">Japanese Yen</option>
                </select>
            </label>
            <FontAwesomeIcon icon="arrow-circle-down" onClick={this.toggleValues} className={this.state.arrowDirectionUp?`${styles.exchangeIcon} ${styles.up}`: styles.exchangeIcon}/>
            <label className={styles.selectWrapper}>
                <select onChange={this.toHandeler}>
                    <option value="SEK">Swedish krona</option>
                    <option value="USD">US Dollar</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">British Pound</option>
                    <option value="DKK">Danish Krone</option>
                    <option value="NOK">Norwegian Krone</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="TRY">Turkish Lira</option>
                    <option value="JPY">Japanese Yen</option>
                </select>
            </label>
            <ConvertResult shownOrHidden={this.state.showResultDiv? 'resultDivShown': 'resultDivHidden'} result={this.state.result}/>
            </div>
            <Modal
            modalText = 'Change the currencies from the lists above and below the arrow. You can use the arrow to change the direction of conversion.' 
            showOrHideModal={this.state.showModal? 'modalContainerShown': 'modalContainerHidden'}
            doNotShow={this.doNotShowhandeler}
            dismiss={this.dismissHandeler}
            />
            </>
        )
    }
}

export default Converter;