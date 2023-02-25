import React from "react";
import AdminCardSectionOne from "./AdminCardSections/AdminCardSectionOne";
import AdminCardSectionTwo from "./AdminCardSections/AdminCardSectionTwo";
import AdminChartSection from "./AdminChartSection/AdminChartSection";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div
      style={{ backgroundColor: "#ffffff", height: "100vh" }}
      className="col-xxl-10 col-xl-9 col-lg-9 ms-auto"
    >
      <AdminCardSectionOne />
      <AdminCardSectionTwo />
      <AdminChartSection />
    </div>
  );
};

export default AdminDashboard;
