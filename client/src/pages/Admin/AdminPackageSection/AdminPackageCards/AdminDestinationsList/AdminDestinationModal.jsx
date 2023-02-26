import React from "react";

const AdminDestinationModal = (props) => {
  const { showPackageModal, closePackageModal } = props;

  return (
    <>
      {showPackageModal && (
        <div
          className="modal-backdrop show"
          onClick={closePackageModal}
          style={{ height: "200px", width: "400px", margin: "100px 35%" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Click X</h5>
                <button
                  type="button"
                  className="close"
                  onClick={closePackageModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="text-warning">
                  This Package Modal is Working In Progress :)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDestinationModal;
