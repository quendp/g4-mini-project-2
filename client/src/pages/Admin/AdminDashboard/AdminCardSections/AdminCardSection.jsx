import React from "react";

const AdminCardSection = (props) => {
  const renderSectionOneIcon = (info) => {
    if (info.type === "Users") {
      return <i className="fa-solid fa-users fa-2x text-success"></i>;
    } else if (info.type === "Bookings") {
      return <i className="fa-solid fa-plane fa-2x text-muted"></i>;
    } else if (info.type === "Tours") {
      return <i className="fa-solid fa-mountain-city fa-2x text-primary"></i>;
    } else {
      return <i className="fa-solid fa-user-tie fa-2x text-dark"></i>;
    }
  };

  const renderSectionTwoIcon = (info) => {
    if (info.status === "Waitlist") {
      return <i className="fa-solid fa-list fa-2x text-primary"></i>;
    } else if (info.status === "Tentative") {
      return <i className="fa-solid fa-question fa-2x text-muted"></i>;
    } else if (info.status === "Confirmed") {
      return <i className="fa-solid fa-check fa-2x text-success"></i>;
    } else {
      return <i className="fa-solid fa-ban fa-2x text-danger"></i>;
    }
  };

  return (
    <section
      className="py-3"
      style={{ backgroundColor: "var(--clr-secondary-000)" }}
    >
      <div className="container-fluid">
        <div
          className={
            props.cardType === "SectionOne"
              ? "row pt-lg-5 mt-lg-2 mx-2 pt-2"
              : "row mt-lg-3 mx-2"
          }
        >
          <h4
            className="mb-0 fw-bolder mb-3 fs-4 pt-2"
            style={{
              textAlign: "center",
            }}
          >
            {props.sectionTitle}
          </h4>
          {props.cardInfo.map((info) => (
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 p-4"
              key={info.id}
            >
              <div
                className="card admin-cards__section"
                style={{ minHeight: "180px" }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <h3 className="fw-bold fs-1">{info.number}</h3>
                </div>
                <div className="card-footer d-flex justify-content-evenly p-3">
                  {props.cardType === "SectionOne" ? (
                    <>{renderSectionOneIcon(info)}</>
                  ) : (
                    <>{renderSectionTwoIcon(info)}</>
                  )}
                  <span className="fw-bold text-dark">
                    {props.cardType === "SectionOne" ? info.type : info.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminCardSection;
