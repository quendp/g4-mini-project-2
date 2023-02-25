import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartData = [
  {
    id: 1,
    month: "Oct",
    cosmoLights: 196,
    diveWater: 378,
    exploreSummit: 164,
    lookBack: 138,
    natureCulture: 296,
  },
  {
    id: 2,
    month: "Nov",
    cosmoLights: 235,
    diveWater: 410,
    exploreSummit: 360,
    lookBack: 286,
    natureCulture: 122,
  },
  {
    id: 3,
    month: "Dec",
    cosmoLights: 147,
    diveWater: 427,
    exploreSummit: 200,
    lookBack: 389,
    natureCulture: 155,
  },
  {
    id: 4,
    month: "Jan",
    cosmoLights: 184,
    diveWater: 277,
    exploreSummit: 423,
    lookBack: 404,
    natureCulture: 370,
  },
  {
    id: 5,
    month: "Feb",
    cosmoLights: 400,
    diveWater: 308,
    exploreSummit: 337,
    lookBack: 291,
    natureCulture: 242,
  },
];

const AdminLIneChart = () => {
  const [chartData, setChartData] = useState({
    labels: ChartData.map((data) => data.month),
    datasets: [
      {
        label: "Cosmopolitan Lights",
        data: ChartData.map((data) => data.cosmoLights),
        borderColor: "#b97508",
        backgroundColor: "#ffae00",
        hidden: false,
        borderWidth: 3,
      },
      {
        label: "Dive Under Water",
        data: ChartData.map((data) => data.diveWater),
        borderColor: "#0066ff",
        backgroundColor: "#00b7ff",
        hidden: true,
        borderWidth: 3,
      },
      {
        label: "Explore The Summit",
        data: ChartData.map((data) => data.exploreSummit),
        borderColor: "#53a19b",
        backgroundColor: "#8ee0c8",
        hidden: true,
        borderWidth: 3,
      },
      {
        label: "Look Back In History",
        data: ChartData.map((data) => data.lookBack),
        borderColor: "#946b2d",
        backgroundColor: "#b49367",
        hidden: true,
        borderWidth: 3,
      },
      {
        label: "Nature And Culture",
        data: ChartData.map((data) => data.natureCulture),
        borderColor: "#169b1b",
        backgroundColor: "#14cf29",
        hidden: true,
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
