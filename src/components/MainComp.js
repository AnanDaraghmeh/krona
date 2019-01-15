import React from 'react';
import Krona from './Krona';
import axios from 'axios';
import '../App.css';
import us from './flags/us.svg'
import eu from './flags/eu.svg';
import gb from './flags/gb.svg';
import dk from './flags/dk.svg';
import no from './flags/no.svg';
import ca from './flags/ca.svg';
import au from './flags/au.svg';
import jp from './flags/jp.svg';
import tr from './flags/tr.svg';
import Header from './Header';


class MainComp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            kronaRates: {},
            latestUpdate:''
        };
    }
    componentDidMount(){
        axios.get('https://api.openrates.io/latest?base=SEK')
        .then (res => {
            console.log(res)
            let currentKronaRates = res.data.rates;
            let latestUpdate = res.data.date;
            console.log(currentKronaRates);
            console.log(currentKronaRates.EUR)
            this.setState({
                kronaRates: currentKronaRates,
                latestUpdate: latestUpdate
            })
        });
    }
    toFixedThree = (num)=>{
        if (num !== undefined){
            return num.toFixed(3);
        }
    }
    
   
    render(){
        return (
            <>
            <Header/>
            <div className="krona-rates-container">
                <h2>Exchange Rates | Swedish Krona</h2>
                <p>Latest update: {this.state.latestUpdate}</p>
                <ul className="exchange-list">
                <Krona value={this.toFixedThree(this.state.kronaRates.EUR)} name='Euro' flag={eu}/>
                <Krona value={this.toFixedThree(this.state.kronaRates.USD)} name='US Dollar' flag={us}/>
                <Krona value={this.toFixedThree(this.state.kronaRates.GBP)} name='British Pound' flag={gb}/>
                <Krona value={this.toFixedThree(this.state.kronaRates.DKK)} name='Danish Krone' flag={dk}/>
                <Krona value={this.toFixedThree(this.state.kronaRates.NOK)} name='Norwegian Krone' flag={no}/>
                <Krona value={this.toFixedThree(this.state.kronaRates.CAD)} name='Canadian Dollar' flag={ca}/>
                <Krona value={this.toFixedThree(this.state.kronaRates.AUD)} name='Australian Dollar' flag={au}/>
                <Krona value={this.toFixedThree(this.state.kronaRates.TRY)} name='Turkish Lira' flag={tr}/>
                <Krona value={this.toFixedThree(this.state.kronaRates.JPY)} name='Japanese Yen' flag={jp}/>
                </ul>
            </div>
            </>
        )
    }
}

export default MainComp;