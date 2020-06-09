import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar, Doughnut } from "react-chartjs-2";
// import "chartjs-plugin-labels";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      height={230}
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#17a2b8",
            // pointStyle: "line",
            fill: false,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgb(229, 115, 115)",
            backgroundColor: "rgb(229, 115, 115)",
            // pointStyle: "line",
            fill: false,
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases Overall",
          color: "black",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
              ticks: {
                callback: function (label, index, labels) {
                  return label / 1000 + "k";
                },
              },
            },
          ],
        },
        legend: {
          labels: {
            usePointStyle: false,
            fontSize: 14,
          },
        },
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      height={230}
      data={{
        labels: ["Infected", " Recovered", " Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#17a2b8", "#28a745", "#dc3545"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `(Infected vs Recovered vs Deaths) - ${country}`,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
              // ticks: {
              //     callback: function(label, index, labels) {
              //         return label/1000+'k';
              //     }
              // }
            },
          ],
        },
      }}
    />
  ) : null;

  const barChartDaily = dailyData.length ? (
    <Bar
      height={221}
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            label: "Infected",
            backgroundColor: "#17a2b8",
            data: dailyData.map(({ confirmed }) => confirmed),
            datalabels: {
              // display labels for this specific dataset
              display: false,
            },
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: {
          display: true,
          text: `Covid-19 Daily Cases in World`,
          fontSize: 17,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
              ticks: {
                callback: function (label, index, labels) {
                  return label / 1000 + "k";
                },
              },
            },
          ],
        },
      }}
    />
  ) : null;

  const doughnutChart = confirmed ? (
    <Doughnut
      height={123}
      width={90}
      data={{
        labels: ["Infected", " Recovered", " Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#17a2b8", "#28a745", "#dc3545"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: `(Infected vs Recovered vs Deaths) - ${country}`,
        },
        plugins: {
          labels: [
            {
              fontColor: "white",
              display: false,
            },
          ],
          datalabels: {
            formatter: function (value, context) {
              return "";
            },
          },
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <div className={styles.containerDiv1}>{barChartDaily}</div>
      <div className={styles.displayDiv}>
        <div className={styles.containerDiv2}>{doughnutChart}</div>
        <div className={styles.containerDiv3}>
          {country ? barChart : lineChart}
        </div>
      </div>
    </div>
  );
};

export default Chart;
