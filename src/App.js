import React from 'react';
import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/covid_logo.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }
    
    handleCountryChange = async (country) => {
            const fetchedData = await fetchData(country);
            this.setState({ data: fetchedData, country: country });  

    }

    async componentDidMount(){
         const fetchedData = await fetchData(); 
         this.setState({ data: fetchedData });  
    }
    render(){

        const { data, country } = this.state
        return(
            <div className={styles.container}>
                 <img className={styles.image} src={image} alt="COVID-19" />
                <CountryPicker data = {data} handleCountryChange = {this.handleCountryChange}/>
                <Cards data = {data}/>
                <Chart className={styles.chart} data = {data} country = {country}/>
                <p style={{textAlign: "center", marginTop: "20px"}}>Made with ❤ by Imran Munawar</p>
            </div>
        )
    }
}

export default App