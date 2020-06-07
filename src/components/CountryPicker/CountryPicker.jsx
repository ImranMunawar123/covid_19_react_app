import React , { useState,useEffect } from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import countryIcon from '../../images/country.png';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange, data: { lastUpdate } }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries])
    return(
            <div align="center">
                <span className={styles.main_heading}><img className={styles.image_size} alt="icon" src={countryIcon}/><span className={styles.headingMobile}>WORLDCOVID-19 UPDATES</span></span>
                <p className={styles.date} align="center">Last Updated: {new Date(lastUpdate).toDateString()}</p>

                <FormControl className={styles.formControl}>
                <h1 className={styles.select_country_heading}>Select Country</h1>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
            </div>
            
    )
}

export default CountryPicker;