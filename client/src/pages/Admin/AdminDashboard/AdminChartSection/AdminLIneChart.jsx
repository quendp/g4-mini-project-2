import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartData from "../../AdminDataCollection/AdminLineChartData";

const AdminLIneChart = () => {
  const [chartData, setChartData] = useState({
    labels: ChartData.map((data) => data.month),
    datasets: [
      {
        label: "Cosmopolitan Lights",
        data: ChartData.map((data) => data.cosmoLights),
        borderColor: "#b97508",
        backgroundColor: "#ffae00",
        borderWidth: 3,
      },
      {
        label: "Dive Under Water",
        data: ChartData.map((data) => data.diveWater),
        borderColor: "#0066ff",
        backgroundColor: "#00b7ff",
        borderWidth: 3,
      },
      {
        label: "Explore The Summit",
        data: ChartData.map((data) => data.exploreSummit),
        borderColor: "#53a19b",
        backgroundColor: "#8ee0c8",
        borderWidth: 3,
      },
      {
        label: "Look Back In History",
        data: ChartData.map((data) => data.lookBack),
        borderColor: "#946b2d",
        backgroundColor: "#b49367",
        borderWidth: 3,
      },
      {
        label: "Nature And Culture",
        data: ChartData.map((data) => data.natureCulture),
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

export default AdminLIneChart;
