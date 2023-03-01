import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import radarData from "../../AgentDataCollection/AgentRadarChartData";

const AgentDashBoardRadarChart = () => {
  const data = {
    labels: radarData.map((data) => data.destination),
    datasets: [
      {
        label: "Waitlist",
        backgroundColor: "rgb(66, 66, 247, 0.2)",
        borderColor: "rgb(28, 28, 226)",
        borderWidth: 2,
        pointBackgroundColor: "#fff",
        data: radarData.map((data) => data.waitlistBookings),
        hidden: true,
      },
      {
        label: "Tentative",
        backgroundColor: "rgb(91, 91, 97, 0.2)",
        borderColor: "rgb(64, 64, 75)",
        borderWidth: 2,
        pointBackgroundColor: "#fff",
        data: radarData.map((data) => data.tentativeBookings),
        hidden: true,
      },
      {
        label: "Confirmed",
        backgroundColor: "rgb(63, 221, 76, 0.2)",
        borderColor: "rgb(18, 80, 23)",
        borderWidth: 2,
        pointBackgroundColor: "#fff",
        data: radarData.map((data) => data.confirmedBookings),
        hidden: false,
      },
      {
        label: "Cancelled",
        backgroundColor: "rgb(230, 48, 48, 0.2)",
        borderColor: "rgb(170, 4, 4)",
        borderWidth: 2,
        pointBackgroundColor: "#fff",
        data: radarData.map((data) => data.cancelledBookings),
        hidden: true,
      },
    ],
  };

  const options = {
    scale: {
      reverse: false,
      ticks: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Radar data={data} option={options} />;
};

export default AgentDashBoardRadarChart;
