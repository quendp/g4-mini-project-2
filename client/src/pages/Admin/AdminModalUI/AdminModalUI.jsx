import React from "react";

const AdminModalUI = (props) => {
  const modalTitle =
    props.modalType === "agentsTable"
      ? "agentsModalClick X"
      : props.modalType === "adminTopNavCloseModal"
      ? "adminTopNavCloseModalClick X"
      : "adminDestinationsModalClick X";
  const modalBodyText =
    props.modalType === "agentsTable"
      ? "Working In Progress :)"
      : props.modalType === "adminTopNavCloseModal"
      ? "adminTopNavCloseModal WorkingINProgress"
      : "This Package Modal is Working In Progress :)";

  return (
    <>
      {props.showModal && (
        <div
          className="modal-backdrop show"
          onClick={props.closeModal}
          style={{ height: "200px", width: "400px", margin: "100px 35%" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={props.closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="text-warning">{modalBodyText}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminModalUI;
