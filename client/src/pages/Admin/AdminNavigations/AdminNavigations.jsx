import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopNav from "./AdminTopNav";
import "./AdminNavigations.css";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminBookingsTable from "../AdminBookings/AdminBookingsTable";
import AdminAgentsTable from "../AdminAgentsSection/AdminAgentsTable";
import AdminPackageSection from "../AdminPackageSection/AdminPackageSection";
import AdminSettings from "../AdminSettings/AdminSettings";
import AdminAccountInformation from "../AdminAccountInformation/AdminAccountInformation";

const AdminNavigations = (props) => {
  const [isShowing, setIsShowing] = useState(true);
  const [currentNavSection, setCurrentNavSection] = useState("Dashboard");

  const startShowing = (section) => {
    setIsShowing(true);
    setCurrentNavSection(section);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ zIndex: "10" }}
      >
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container-fluid">
            <div className="row">
              <AdminSidebar startShowing={startShowing} />
              <AdminTopNav
                searchValueHandler={props.searchValueHandler}
                showModal={props.showModal}
                openModal={props.openModal}
                closeModal={props.closeModal}
              />
            </div>
          </div>
        </div>
      </nav>

      {isShowing && currentNavSection == "Dashboard" && <AdminDashboard />}
      {isShowing && currentNavSection == "Bookings" && <AdminBookingsTable />}
      {isShowing && currentNavSection == "Agents" && (
        <AdminAgentsTable
          showModal={props.showModal}
          openModal={props.openModal}
          closeModal={props.closeModal}
        />
      )}
      {isShowing && currentNavSection == "Package" && (
        <AdminPackageSection
          showModal={props.showModal}
          openModal={props.openModal}
          closeModal={props.closeModal}
        />
      )}
      {isShowing && currentNavSection == "Settings" && <AdminSettings />}
      {isShowing && currentNavSection == "Account Information" && (
        <AdminAccountInformation />
      )}
    </>
  );
};

export default AdminNavigations;
