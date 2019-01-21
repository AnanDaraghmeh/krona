import React from 'react';
import axios from 'axios';
import Header from '../common/Header';
import ConvertResult from './ConvertResult';
import styles from './Converter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../common/Modal';


class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            from:'USD',
            to: 'SEK',
            amount: 0,
            result: '',
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

    componentDidUpdate = (prevProps, prevState)=>{
        if (this.state.from !== prevState.from || this.state.to !== prevState.to || this.state.amount !== prevState.amount || this.state.arrowDirectionUp !== prevState.arrowDirectionUp){
            this.fetchData();
        }
    }
    
    signal = axios.CancelToken.source();
    fetchData = ()=>{
        axios.get(`https://api.openrates.io/latest?base=${this.state.from}`, {cancelToken: this.signal.token})
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

    componentDidMount = ()=>{
        if (localStorage.getItem('modal') === null){
            setTimeout(() => {
                this.setState({
                    showModal: true
                })
            }, 5000);
        }
    }

    componentWillUnmount = ()=>{
        //cancel http request when component will unmount and stop memory leak
        this.signal.cancel('Api is being canceled');
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
            showOrHide={this.state.showModal? "shadeShown": "shadeHidden"}
            modalText = 'Change the currencies from the lists above and below the arrow. You can use the arrow to change the direction of conversion.'
            doNotShow={this.doNotShowhandeler}
            dismiss={this.dismissHandeler}
            />
            </>
        )
    }
}

export default Converter;