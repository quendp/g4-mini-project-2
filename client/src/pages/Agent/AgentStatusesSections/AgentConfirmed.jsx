import React, { useState } from "react";
import AgentConfirmedModal from "./AgentStatusesModal/AgentConfirmedModal";

const AgentSidebarConfirmedNav = (props) => {
  const [filteredStatus, setFilteredStatus] = useState("Confirmed");

  const [modelSubmit, setModelSubmit] = useState(false);
  const [tempsubmitdata, setTempSubmitData] = useState([]);

  const getDataSubmit = (destination, packag, fullname) => {
    let tempSubmitdata = [destination, packag, fullname];
    setTempSubmitData((item) => [1, ...tempSubmitdata]);
    return setModelSubmit(true);
  };

  const filteredCards = props.travelDetails.filter((travelDetail) => {
    return travelDetail.status === filteredStatus;
  });

  return (
    <section id="bookingsSection" style={{ height: "100vh" }}>
      <div className="col-xxl-10 col-xl-9 col-lg-9 col-12 pt-lg-5 ms-auto">
        <div className="status-handler overflow-auto">
          <div className="row pt-lg-2 mb-5 mx-2">
            {filteredCards.map((travelDetail, index) => (
              <div
                className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 p-2"
                key={index}
              >
                <div className="card agentStatuses-cards">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-column align-items-start justify-content-evenly text-secondary">
                        <h5>{travelDetail.destination}</h5>
                        <h6>{travelDetail.fullName}</h6>
                      </div>
                      <div className="d-flex flex-column align-items-end justify-content-evenly text-secondary">
                        <h6>{travelDetail.package}</h6>
                        <h6>{travelDetail.travelDate}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-secondary d-flex alight-items-center justify-content-between">
                    {travelDetail.status === "Confirmed" ? (
                      <button
                        type="button"
                        className="agentConfirmed-cards__btn btn-outline-info"
                        onClick={() =>
                          getDataSubmit(
                            travelDetail.destination,
                            travelDetail.package,
                            travelDetail.fullName
                          )
                        }
                      >
                        View
                      </button>
                    ) : (
                      ""
                    )}

                    <span className="agentStatuses-cards__span">
                      {travelDetail.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modelSubmit === true ? (
        <AgentConfirmedModal
          destination={tempsubmitdata[1]}
          package={tempsubmitdata[2]}
          fullName={tempsubmitdata[3]}
          hide={() => setModelSubmit(false)}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default AgentSidebarConfirmedNav;
