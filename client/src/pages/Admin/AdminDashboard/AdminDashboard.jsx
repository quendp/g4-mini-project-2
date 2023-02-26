import React from "react";
import AdminCardSection from "./AdminCardSections/AdminCardSection";
import AdminChartSection from "./AdminChartSection/AdminChartSection";
import firstCardInfo from "../AdminDataCollection/SectionOneCardsInfo";
import secondCardInfo from "../AdminDataCollection/SectionTwoCardsInfo";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div
      style={{ backgroundColor: "#ffffff", height: "100vh" }}
      className="col-xxl-10 col-xl-9 col-lg-9 ms-auto"
    >
      <AdminCardSection
        sectionTitle="General Overview"
        cardInfo={firstCardInfo}
        cardType="SectionOne"
      />
      <AdminCardSection
        sectionTitle="Monthly Report"
        cardInfo={secondCardInfo}
        cardType="SectionTwo"
      />
      <AdminChartSection />
    </div>
  );
};

export default AdminDashboard;
