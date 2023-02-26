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
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <div className="container-fluid">
            <div className="row">
              <AdminSidebar startShowing={startShowing} />
              <AdminTopNav searchValueHandler={props.searchValueHandler} />
            </div>
          </div>
        </div>
      </nav>

      {isShowing && currentNavSection == "Dashboard" && <AdminDashboard />}
      {isShowing && currentNavSection == "Bookings" && <AdminBookingsTable />}
      {isShowing && currentNavSection == "Agents" && <AdminAgentsTable />}
      {isShowing && currentNavSection == "Package" && <AdminPackageSection />}
      {isShowing && currentNavSection == "Settings" && <AdminSettings />}
      {isShowing && currentNavSection == "Account Information" && (
        <AdminAccountInformation />
      )}
    </>
  );
};

export default AdminNavigations;
