import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css'
import cx from 'classnames'
import deathImage from '../../images/deaths.png';
import confirmedImage from '../../images/infected.png';
import recoveredImage from '../../images/recoveries.png';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Loading...'
    }
    return(
            <div className={styles.container}>
                <h1 className={styles.main_heading}><img className={styles.image_size} alt="icon" src="https://img.icons8.com/doodle/48/000000/country.png"/>WORLDCOVID-19 UPDATES</h1>
                <p align="center">Last Updated: {new Date(lastUpdate).toDateString()}</p>

                <Grid container spacing={6} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected, styles.border_info)}>
                        <div align="center" className={cx(styles.p_3, styles.my_card, styles.shadow, styles.infected_border_info, styles.text_info)}><img alt="icon" width="28px" src={confirmedImage}/>
                        </div>
                        <CardContent>
                            <Typography className={styles.infected_heading} variant="h5" component="h2" align="center" gutterBottom>Infected</Typography>
                            <Typography className={styles.infected_heading} variant="h4" component="h2" align="center">
                                <CountUp start={0} end={confirmed.value} duration={2.75} separator=","/>
                            </Typography>
                            <Typography variant="body2" component="p" align="center" >Number of active cases of COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <div align="center" className={cx(styles.p_3, styles.my_card, styles.shadow, styles.recovered_border_info, styles.text_info)}><img alt="icon" width="30px" src={recoveredImage}/>
                        </div>
                        <CardContent>
                            <Typography className={styles.recovered_heading} variant="h5" component="h2" align="center" gutterBottom>Recovered</Typography>
                            <Typography className={styles.recovered_heading} variant="h4" component="h2" align="center">
                                <CountUp start={0} end={recovered.value} duration={2.75} separator=","/>
                            </Typography>
                            <Typography variant="body2" component="p"  align="center">Number of recoveries from COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <div align="center" className={cx(styles.p_3, styles.my_card, styles.shadow, styles.deaths_border_info, styles.text_info)}><img alt="icon" width="30px" src={deathImage}/>
                        </div>
                        <CardContent>
                            <Typography className={styles.death_heading} variant="h5" component="h2"  align="center" gutterBottom>Deaths</Typography>
                            <Typography className={styles.death_heading} variant="h4" component="h2" align="center">
                                <CountUp start={0} end={deaths.value} duration={2.75} separator=","/>
                            </Typography>
                            <Typography variant="body2" component="p" align="center">Number of deaths caused by COVID-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid>    
            </div>
    )
}

export default Cards;