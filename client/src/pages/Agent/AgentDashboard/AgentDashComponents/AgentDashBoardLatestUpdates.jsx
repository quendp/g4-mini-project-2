import React from "react";

const AgentDashBoardLatestUpdates = (props) => {
  return (
    <div
      className={
        props.status === "Waitlist"
          ? "card agentDashBoardLatestUpdates-cards my-1 text-bg-primary"
          : props.status === "Tentative"
          ? "card agentDashBoardLatestUpdates-cards cards my-1 text-bg-secondary"
          : props.status === "Confirmed"
          ? "card agentDashBoardLatestUpdates-cards my-1 text-bg-success"
          : "card agentDashBoardLatestUpdates-cards my-1 text-bg-danger"
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5>{props.status}</h5>
          <h6>{props.fullName}</h6>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <h5 className="card-title">{props.destination}</h5>
          <p className="fst-italic">{props.travelDate}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentDashBoardLatestUpdates;
