import React from "react";
import secondCardInfo from "../../AdminDataCollection/SectionTwoCardsInfo";

const AdminCardSectionTwo = () => {
  return (
    <section style={{ backgroundColor: "#ffffff" }}>
      <div className="container-fluid">
        <div className="row">
          <div>
            <div className="row">
              {secondCardInfo.map((info) => (
                <div
                  className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 p-2"
                  key={info.id}
                >
                  <div className="card admin-cards__sectionTwo">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        {info.status === "Waitlist" ? (
                          <i className="fa-solid fa-list fa-2x text-primary"></i>
                        ) : info.status === "Tentative" ? (
                          <i className="fa-solid fa-question fa-2x text-muted"></i>
                        ) : info.status === "Confirmed" ? (
                          <i className="fa-solid fa-check fa-2x text-success"></i>
                        ) : (
                          <i className="fa-solid fa-ban fa-2x text-danger"></i>
                        )}
                        <div className="d-flex flex-column align-items-end justify-content-evenly text-dark">
                          <h3 className="fw-bold fs-1">{info.number}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <span className="fw-bold text-dark">{info.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminCardSectionTwo;
