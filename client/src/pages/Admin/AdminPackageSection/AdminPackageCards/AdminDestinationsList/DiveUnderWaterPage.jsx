import React, { useState } from "react";
import { diveUnderWater } from "../../../AdminDataCollection/AdminPackageSectionData";

const DiveUnderWaterPage = (props) => {
  const [duwselectedPackages, setDuwSelectedPackages] = useState(
    diveUnderWater.reduce((acc, curr) => ({ ...acc, [curr.id]: "basic" }), {})
  );

  const handleDuwPackageSelect = (id, packageType) => {
    setDuwSelectedPackages((prevState) => ({
      ...prevState,
      [id]: packageType,
    }));
  };
  return (
    <div
      className="col-xxl-10 col-xl-9 col-lg-9 ms-auto  p-2 accordion accordion-flush admin-packageSection__accordion"
      style={{ backgroundColor: "#ffffff", height: "120vh", width: "100%" }}
      id="accordionFlushExample"
    >
      <h4
        className="mb-0 fw-bolder text-dark fs-2 mb-3"
        style={{ backgroundColor: "#ffffff", textAlign: "center" }}
      >
        Dive Under Water Destinations
      </h4>
      {diveUnderWater.map((info) => (
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
            <div className="accordion-body">
              <div>
                {duwselectedPackages[info.id] === "basic" && (
                  <p>{info.basic}</p>
                )}
                {duwselectedPackages[info.id] === "standard" && (
                  <p>{info.standard}</p>
                )}
                {duwselectedPackages[info.id] === "premium" && (
                  <p>{info.premium}</p>
                )}
              </div>
              <div className="admin-packagePage__button">
                <button
                  className="admin-packagePage__buttonB"
                  onClick={() => handleDuwPackageSelect(info.id, "basic")}
                >
                  Basic
                </button>
                <button
                  className="admin-packagePage__buttonS"
                  onClick={() => handleDuwPackageSelect(info.id, "standard")}
                >
                  Standard
                </button>
                <button
                  className="admin-packagePage__buttonP"
                  onClick={() => handleDuwPackageSelect(info.id, "premium")}
                >
                  Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        className="admin-packagePage__buttonBack"
        onClick={props.handleBackButton}
      >
        Back
      </button>
    </div>
  );
};

export default DiveUnderWaterPage;
