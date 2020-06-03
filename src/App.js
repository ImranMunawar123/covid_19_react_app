import React from 'react';
import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/logo.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }
    
    handleCountryChange = async (country) => {
            console.log(country);
    }

    async componentDidMount(){
         const fetchedData = await fetchData(); 
         this.setState({ data: fetchedData });  
    }
    render(){

        const { data } = this.state
        return(
            <div className={styles.container}>
                 <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data = {data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart/>
            </div>
        )
    }
}

export default App