import React from "react";

const AgentTentativeModal = (props) => {
  return (
    props.showTentativeModal && (
      <div className="modal show-fade agent-statuses__modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4
                className="modal-title text-secondary "
                style={{ textShadow: "none", fontWeight: "bold" }}
              >
                Im Coming Soon!
              </h4>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.closeTentativeModal}
              ></button>
            </div>
            <div className="modal-body text-secondary">
              Im Working In Progress
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={props.closeTentativeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AgentTentativeModal;
