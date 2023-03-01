import React, { useState } from "react";
import AgentDashBoardStatuses from "./AgentDashComponents/AgentDashBoardStatuses";
import AgentDashBoardLatestUpdates from "./AgentDashComponents/AgentDashBoardLatestUpdates";
import "./Agentdashboard.css";
import AgentDashBoardLineChart from "./AgentDashComponents/AgentDashBoardLineChart";
import AgentDashBoardStatusSortFilter from "./AgentDashComponents/AgentDashBoardStatusSortFilter";
import AgentDashBoardRadarChart from "./AgentDashComponents/AgentDashBoardRadarChart";

const AgentDashboard = (props) => {
  const [sortType, setSortType] = useState("newest");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const sortTravels = (travels, sortType) => {
    return travels.sort((a, b) => {
      if (sortType === "newest") return b.id - a.id;
      if (sortType === "oldest") return a.id - b.id;
      return 0;
    });
  };

  const filteredTravels = (travels, selectedStatus) => {
    return selectedStatus === "All"
      ? travels
      : travels.filter((travel) => travel.status === selectedStatus);
  };

  return (
    <>
      <div className="col-xxl-10 col-xl-9 col-lg-9 ms-auto">
        <AgentDashBoardStatuses
          statusesNumber={props.statusesNumber}
          estatus={props.estatus}
          number={props.number}
        />
        <div className="container-fluid px-4">
          <div className="row mt-lg-2 mb-2">
            <div className="col-xxl-6 col-xl-6 col-12">
              <h4
                className="mb-0 fw-bolder text-muted fs-3 mt-3 mb-1"
                style={{
                  backgroundColor: "var(--clr-secondary-000)",
                  textAlign: "center",
                }}
              >
                Latest Updates
              </h4>
              <div className="d-flex justify-content-between align-items-center">
                <AgentDashBoardStatusSortFilter
                  selectedStatus={selectedStatus}
                  setSelectedStatus={setSelectedStatus}
                  sortType={sortType}
                  setSortType={setSortType}
                />
              </div>
              <div className="overflow-auto agentDashboard-latest__updates p-1">
                {sortTravels(
                  filteredTravels(props.travelDetails, selectedStatus),
                  sortType
                ).map((traveldetail, idx) => (
                  <AgentDashBoardLatestUpdates
                    key={idx}
                    fullName={traveldetail.fullName}
                    destination={traveldetail.destination}
                    travelDate={traveldetail.travelDate}
                    status={traveldetail.status}
                  />
                ))}
              </div>
            </div>
            <div
              className="col-xxl-6 col-xl-6 col-12"
              style={{ height: "50vh" }}
            >
              <h4
                className="fw-bolder text-muted fs-3 mt-3 mb-5"
                style={{
                  backgroundColor: "var(--clr-secondary-000)",
                  textAlign: "center",
                }}
              >
                Monthly Bookings
              </h4>
              <AgentDashBoardLineChart
                month={props.month}
                dummyChart={props.DUMMY_CHART}
                cosmopolitanLights={props.cosmopolitanLights}
                diveUnderWater={props.diveUnderWater}
                exploreTheSummit={props.exploreTheSummit}
                lookBackInHistory={props.lookBackInHistory}
                natureAndCulture={props.natureAndCulture}
              />
            </div>
          </div>
          <div className="mt-lg-2 mt-2 col-xxl-6 col-xl-6 col-12 mx-auto">
            <h4
              className="fw-bolder text-muted fs-3 mt-4 mb-3"
              style={{
                backgroundColor: "var(--clr-secondary-000)",
                textAlign: "center",
              }}
            >
              Destinations Performance Summary
            </h4>
            <AgentDashBoardRadarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentDashboard;
