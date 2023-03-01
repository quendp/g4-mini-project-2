import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const AgentDashBoardLineChart = (props) => {
  const [chartData, setChartData] = useState({
    labels: props.dummyChart.map((data) => data.month),
    datasets: [
      {
        label: "Cosmopolitan Lights",
        data: props.dummyChart.map((data) => data.cosmopolitanLights),
        borderColor: "#b97508",
        backgroundColor: "#ffae00",
        borderWidth: 3,
      },
      {
        label: "Dive Under Water",
        data: props.dummyChart.map((data) => data.diveUnderWater),
        borderColor: "#0066ff",
        backgroundColor: "#00b7ff",
        borderWidth: 3,
      },
      {
        label: "Explore The Summit",
        data: props.dummyChart.map((data) => data.exploreTheSummit),
        borderColor: "#53a19b",
        backgroundColor: "#8ee0c8",
        borderWidth: 3,
      },
      {
        label: "Look Back In History",
        data: props.dummyChart.map((data) => data.lookBackInHIstory),
        borderColor: "#946b2d",
        backgroundColor: "#b49367",
        borderWidth: 3,
      },
      {
        label: "Nature And Culture",
        data: props.dummyChart.map((data) => data.natureAndCulture),
        borderColor: "#169b1b",
        backgroundColor: "#14cf29",
        borderWidth: 3,
      },
    ],
  });

  return (
    <Line
      data={chartData}
      options={{
        maintainAspectRatio: false,
        aspectRatio: 2,
        elements: {
          line: {
            tension: 0,
            borderWidth: 2,
            borderColor: chartData.datasets[0].borderColor,
            backgroundColor: chartData.datasets[0].backgroundColor,
            fill: false,
            borderJoinStyle: "round",
            cubicInterpolationMode: "monotone",
            spanGaps: false,
          },
        },
      }}
    />
  );
};

export default AgentDashBoardLineChart;
