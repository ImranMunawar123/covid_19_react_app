import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";
import cx from "classnames";
import deathImage from "../../images/deaths.png";
import confirmedImage from "../../images/infected.png";
import recoveredImage from "../../images/recoveries.png";

const Cards = ({
  data: {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
    recoveryRate,
    deathRate,
    activeCases,
  },
}) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected, styles.border_info)}
        >
          <div
            align="center"
            className={cx(
              styles.p_3,
              styles.my_card,
              styles.shadow,
              styles.infected_border_info,
              styles.text_info
            )}
          >
            <img alt="icon" width="28px" src={confirmedImage} />
          </div>
          <CardContent>
            <Typography
              className={styles.infected_heading}
              style={{ marginTop: "20px" }}
              variant="h5"
              component="h2"
              align="center"
              gutterBottom
            >
              Infected
            </Typography>
            <Typography
              className={styles.infected_heading}
              variant="h4"
              component="h2"
              align="center"
            >
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography
              className={styles.infected_heading}
              style={{ marginTop: "20px" }}
              variant="body2"
              component="p"
              align="center"
            >
              Active Cases
            </Typography>
            <Typography variant="h5" component="h5" align="center">
              <CountUp
                className={styles.infected_heading}
                style={{ fontSize: "17px" }}
                start={0}
                end={activeCases}
                duration={2.75}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <div
            align="center"
            className={cx(
              styles.p_3,
              styles.my_card,
              styles.shadow,
              styles.recovered_border_info,
              styles.text_info
            )}
          >
            <img alt="icon" width="30px" src={recoveredImage} />
          </div>
          <CardContent>
            <Typography
              className={styles.recovered_heading}
              style={{ marginTop: "20px" }}
              variant="h5"
              component="h2"
              align="center"
              gutterBottom
            >
              Recovered
            </Typography>
            <Typography
              className={styles.recovered_heading}
              variant="h4"
              component="h2"
              align="center"
            >
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography
              className={styles.recovered_heading}
              style={{ marginTop: "20px" }}
              variant="body2"
              component="p"
              align="center"
            >
              Recovery Rate
            </Typography>
            <Typography
              className={styles.recovered_heading}
              style={{ fontSize: "17px", marginTop: "6px" }}
              variant="h5"
              component="h5"
              align="center"
            >
              <CountUp
                start={0}
                end={recoveryRate}
                duration={2.75}
                separator=","
              />
              %
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <div
            align="center"
            className={cx(
              styles.p_3,
              styles.my_card,
              styles.shadow,
              styles.deaths_border_info,
              styles.text_info
            )}
          >
            <img alt="icon" width="30px" src={deathImage} />
          </div>
          <CardContent>
            <Typography
              className={styles.death_heading}
              style={{ marginTop: "20px" }}
              variant="h5"
              component="h2"
              align="center"
              gutterBottom
            >
              Deaths
            </Typography>
            <Typography
              className={styles.death_heading}
              variant="h4"
              component="h2"
              align="center"
            >
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography
              className={styles.death_heading}
              style={{ marginTop: "20px" }}
              variant="body2"
              component="p"
              align="center"
            >
              Death Rate
            </Typography>
            <Typography
              className={styles.death_heading}
              style={{ fontSize: "17px", marginTop: "6px" }}
              variant="h5"
              component="h5"
              align="center"
            >
              <CountUp
                start={0}
                end={deathRate}
                duration={2.75}
                separator=","
              />
              %
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
