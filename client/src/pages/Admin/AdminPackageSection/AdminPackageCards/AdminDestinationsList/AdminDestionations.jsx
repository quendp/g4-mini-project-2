import React, { useState } from "react";
import AdminModalUI from "../../../AdminModalUI/AdminModalUI";

const AdminDestinations = (props) => {
  const [selectedPackages, setSelectedPackages] = useState(
    props.data.reduce((acc, curr) => ({ ...acc, [curr.id]: "basic" }), {})
  );

  const handlePackageSelect = (id, packageType) => {
    setSelectedPackages((prevState) => ({
      ...prevState,
      [id]: packageType,
    }));
  };

  return (
    <div
      className="col-xxl-10 col-xl-9 col-lg-9 ms-auto  py-2 px-4 accordion accordion-flush"
      style={{
        backgroundColor: "#ffffff",
        height: "auto",
        width: "100%",
      }}
      id="accordionFlushExample"
    >
      <h4
        className="mb-0 fw-bolder text-dark fs-2 mb-3"
        style={{ backgroundColor: "#ffffff", textAlign: "center" }}
      >
        {props.pageTitle}
      </h4>
      <button
        className="admin-packagePage__buttonBack mb-4"
        onClick={props.handleBackButton}
      >
        Back
      </button>
      {props.data.map((info) => (
        <div key={info.id} className="accordion-item">
          <h2 className="accordion-header" id={`flush-heading-${info.id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse-${info.id}`}
              aria-expanded="false"
              aria-controls={`flush-collapse-${info.id}`}
            >
              {info.name}
            </button>
          </h2>
          <div
            id={`flush-collapse-${info.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`flush-heading-${info.id}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body admin-accordion__body">
              <div>
                {selectedPackages[info.id] === "basic" && (
                  <p onClick={() => props.openModal("adminDestinationsModal")}>
                    {info.basic}
                  </p>
                )}
                {selectedPackages[info.id] === "standard" && (
                  <p onClick={() => props.openModal("adminDestinationsModal")}>
                    {info.standard}
                  </p>
                )}
                {selectedPackages[info.id] === "premium" && (
                  <p onClick={() => props.openModal("adminDestinationsModal")}>
                    {info.premium}
                  </p>
                )}
              </div>
              <div className="admin-packagePage__button">
                <button
                  className="admin-packagePage__buttonB"
                  onClick={() => handlePackageSelect(info.id, "basic")}
                >
                  Basic
                </button>
                <button
                  className="admin-packagePage__buttonS"
                  onClick={() => handlePackageSelect(info.id, "standard")}
                >
                  Standard
                </button>
                <button
                  className="admin-packagePage__buttonP"
                  onClick={() => handlePackageSelect(info.id, "premium")}
                >
                  Premium
                </button>
              </div>
            </div>
            <AdminModalUI
              showModal={props.showModal.adminDestinationsModal}
              closeModal={() => props.closeModal("adminDestinationsModal")}
              modalType="adminDestinations"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDestinations;
