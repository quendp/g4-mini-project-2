import React from "react";
import AdminBarChart from "./AdminBarChart";
import AdminLIneChart from "./AdminLIneChart";

const AdminChartSection = () => {
  return (
    <section style={{ backgroundColor: "#ffffff" }}>
      <div className="container-fluid">
        <div className="row mt-lg-2">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 p-5 mt-5">
            <h4
              className="mb-0 fw-bolder text-muted fs-2"
              style={{ backgroundColor: "#ffffff", textAlign: "center" }}
            >
              Monthly Users
            </h4>
            <AdminBarChart />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 p-5 mt-5">
            <h4
              className="mb-0 fw-bolder text-muted fs-2"
              style={{ backgroundColor: "#ffffff", textAlign: "center" }}
            >
              Monthly Bookings
            </h4>
            <AdminLIneChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminChartSection;
