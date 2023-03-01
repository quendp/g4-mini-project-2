import React from "react";

const AgentDashBoardStatuses = (props) => {
  return (
    <section
      style={{ backgroundColor: "var(--clr-secondary-000)" }}
      className="px-3"
    >
      <div className="container-fluid">
        <div className="row pt-lg-5 mt-lg-3 mb-2">
          <h4
            className="mb-0 fw-bolder text-muted fs-2"
            style={{
              backgroundColor: "var(--clr-secondary-000)",
              textAlign: "center",
            }}
          >
            General Overview
          </h4>
          {props.statusesNumber.map((number, idx) => (
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 pt-2"
              key={idx}
            >
              <div
                className="card agentdashBoardStatuses-cards"
                style={{ minHeight: "180px" }}
              >
                <div className="card-body">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <h3 className="text-dark fw-bold fs-1">{number.number}</h3>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-evenly p-2">
                  {number.estatus === "Waitlist" ? (
                    <i className="fa-solid fa-list fa-2x text-primary"></i>
                  ) : number.estatus === "Tentative" ? (
                    <i className="fa-solid fa-question fa-2x text-secondary"></i>
                  ) : number.estatus === "Confirmed" ? (
                    <i className="fa-solid fa-check fa-2x text-success"></i>
                  ) : (
                    <i className="fa-solid fa-ban fa-2x text-danger"></i>
                  )}
                  <span className="text-dark fw-bold">{number.estatus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentDashBoardStatuses;
