import React from 'react';
import axios from 'axios';
import Header from './Header';
import ConvertResult from './ConvertResult';
import './Converter.css';


class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            from:'USD',
            to: 'SEK',
            amount: 0,
            result: '',
            showResultDiv: false
        };
    }

    fromHandeler = (e)=>{
       console.log(e.target.value)
        this.setState({
            from: e.target.value
        })
    }
    toHandeler = (e)=>{
        console.log(e.target.value)
        this.setState({
            to: e.target.value
        })
        

    }
    inputHandeler = (e)=>{
        console.log(e.target.value);
        this.setState({
            amount: e.target.value
        })
        
    }


    componentDidUpdate(){
        axios.get(`https://api.openrates.io/latest?base=${this.state.from}`)
        .then(res => {
            let result = (res.data.rates[this.state.to] * this.state.amount).toFixed(2);
            this.setState({
                result: result,
                showResultDiv: true
            })
        })
    }
   

    render(){
        return(
            <>
            <Header />
            <div className="container">
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
            <input type="number" placeholder="Amount?" onChange={this.inputHandeler}/>
            <ConvertResult shownOrHidden={this.state.showResultDiv? 'result-div shown': 'result-div hidden'} result={this.state.result}/>
            </div>
            
            
            </>
        )
    }
}

export default Converter;