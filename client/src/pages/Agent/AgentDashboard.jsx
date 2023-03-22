import React from "react";
import DashboardUINumbers from "../../components/DashboardUI/DashboardUINumbers";
import AgentDashBoardLineChart from "./AgentDashboard/AgentDashComponents/AgentDashBoardLineChart";
import DUMMY_CHART from "./AgentDataCollection/AgentLineChartData";

const AgentDashboard = ({ bookingsByStatus, accessData }) => {
  return (
    <div className="container-fluid p-0 py-3 m-0">
      <DashboardUINumbers
        bookingsByStatus={bookingsByStatus}
        accessData={accessData}
      />
      <div className="mt-5 p-5" style={{ height: "70vh", width: "70%" }}>
        <AgentDashBoardLineChart
          month={DUMMY_CHART.month}
          dummyChart={DUMMY_CHART}
          cosmopolitanLights={DUMMY_CHART.cosmopolitanLights}
          diveUnderWater={DUMMY_CHART.diveUnderWater}
          exploreTheSummit={DUMMY_CHART.exploreTheSummit}
          lookBackInHistory={DUMMY_CHART.lookBackInHistory}
          natureAndCulture={DUMMY_CHART.natureAndCulture}
        />
      </div>
    </div>
  );
};

export default AgentDashboard;
