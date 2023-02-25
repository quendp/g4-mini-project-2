import React from "react";
import AgentsTable from "./AdminAgentsTableParts/AgentsTable";
import "./AdminAgentsTable.css";

const AdminAgentsTable = () => {
  return (
    <div
      style={{ backgroundColor: "#ffffff", height: "120vh" }}
      className="col-xxl-10 col-xl-9 col-lg-9 ms-auto p-2 p-2 pt-lg-5 mt-lg-2"
    >
      <h4
        className="mb-0 fw-bolder text-dark fs-2 mb-3"
        style={{ backgroundColor: "#ffffff", textAlign: "center" }}
      >
        Agents Table
      </h4>
      <AgentsTable />
    </div>
  );
};

export default AdminAgentsTable;
