import React from 'react';
import MainCompItem from './MainCompItem';
import axios from 'axios';
import styles from './MainComp.module.css';
import us from './flags/us.svg'
import eu from './flags/eu.svg';
import gb from './flags/gb.svg';
import dk from './flags/dk.svg';
import no from './flags/no.svg';
import ca from './flags/ca.svg';
import au from './flags/au.svg';
import jp from './flags/jp.svg';
import tr from './flags/tr.svg';


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
            <div className={styles.kronaRatesContainer}>
                <h2>Exchange Rates | Swedish Krona</h2>
                <p>Latest update: {this.state.latestUpdate}</p>
                <ul className={styles.exchangeList}>
                <MainCompItem value={this.toFixedThree(this.state.kronaRates.EUR)} name='Euro' flag={eu}/>
                <MainCompItem value={this.toFixedThree(this.state.kronaRates.USD)} name='US Dollar' flag={us}/>
                <MainCompItem value={this.toFixedThree(this.state.kronaRates.GBP)} name='British Pound' flag={gb}/>
                <MainCompItem value={this.toFixedThree(this.state.kronaRates.DKK)} name='Danish Krone' flag={dk}/>
                <MainCompItem value={this.toFixedThree(this.state.kronaRates.NOK)} name='Norwegian Krone' flag={no}/>
                <MainCompItem value={this.toFixedThree(this.state.kronaRates.CAD)} name='Canadian Dollar' flag={ca}/>
                <MainCompItem value={this.toFixedThree(this.state.kronaRates.AUD)} name='Australian Dollar' flag={au}/>
                <MainCompItem value={this.toFixedThree(this.state.kronaRates.TRY)} name='Turkish Lira' flag={tr}/>
                <MainCompItem value={this.toFixedThree(this.state.kronaRates.JPY)} name='Japanese Yen' flag={jp}/>
                </ul>
            </div>
        )
    }
}

export default MainComp;