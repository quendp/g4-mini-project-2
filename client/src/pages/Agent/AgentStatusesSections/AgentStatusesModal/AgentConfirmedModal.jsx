import React from "react";

const AgentConfirmedModal = (props) => {
  return (
    <div className="modal show fade agent-statuses__modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title text-success"
              style={{ textShadow: "none", fontWeight: "bold" }}
            >
              Booking Confirmed!
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={props.hide}
            ></button>
          </div>
          <div className="modal-body text-secondary">
            <h5 className="mt-3">Destination: {props.destination}</h5>
            <h6>Package: {props.package}</h6>
            <h6>Full Name: {props.fullName}</h6>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentConfirmedModal;
