import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import adminBarChartData from "../../AdminDataCollection/AdminBarChartData";

const AdminBarChart = () => {
  const data = {
    labels: adminBarChartData.map((data) => data.month),
    datasets: [
      {
        label: "Monthly Users",
        data: adminBarChartData.map((data) => data.monthlyUsers),
      },
    ],
  };

  return <Bar data={data} />;
};

export default AdminBarChart;
