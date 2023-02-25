import React, { useState } from "react";
import Image from "../../../assets/images/user-avatar/user1.jpg";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminBookingsTable from "../AdminBookings/AdminBookingsTable";
import AdminAgentsTable from "../AdminAgentsSection/AdminAgentsTable";
import AdminPackageSection from "../AdminPackageSection/AdminPackageSection";

const AdminSidebar = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [currentNavSection, setCurrentNavSection] = useState("Dashboard");

  const startShowing = (section) => {
    setIsShowing(true);
    setCurrentNavSection(section);
  };

  return (
    <>
      <div className="col-xxl-2 col-xl-3 col-lg-3  admin-sidebar fixed-top">
        <a
          href="#"
          className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 admin-bottom__border"
        >
          LAKBAY
        </a>
        <div className="admin-bottom__border pb-3">
          <img
            src={Image}
            alt="pogi"
            width="50"
            className="rounded-circle me-3"
          />
          <a href="#" className="text-decoration-none text-white">
            Juan Delacruz
          </a>
        </div>
        <ul className="navbar-nav flex-column mt-2">
          <li to="/" className="nav-item">
            <a
              href="#"
              className="nav-link text-white bg-secondary p-3 mb-2 admin-sidebar__panel"
              onClick={() => {
                startShowing("Dashboard");
              }}
            >
              <i className="fa-solid fa-house-user text-light fa-lg me-3"></i>
              Dashboard
            </a>
          </li>
          <li to="/bookings" className="nav-item">
            <a
              href="#"
              className="nav-link text-white p-3 mb-2 admin-sidebar__link"
              onClick={() => {
                startShowing("Bookings");
              }}
            >
              <i className="fa-solid fa-list text-light fa-lg me-3"></i>Bookings
            </a>
          </li>
          <li to="/agents" className="nav-item">
            <a
              href="#"
              className="nav-link text-white p-3 mb-2 admin-sidebar__link"
              onClick={() => {
                startShowing("Agents");
              }}
            >
              <i className="fa-solid fa-user-tie text-light fa-lg me-3"></i>
              Agents
            </a>
          </li>
          <li to="/package" className="nav-item">
            <a
              href="#"
              className="nav-link text-white p-3 mb-2 admin-sidebar__link"
              onClick={() => {
                startShowing("Package");
              }}
            >
              <i className="fa-solid fa-box text-light fa-lg me-3"></i>Package
            </a>
          </li>
        </ul>
      </div>
      {isShowing && currentNavSection == "Dashboard" && <AdminDashboard />}
      {isShowing && currentNavSection == "Bookings" && <AdminBookingsTable />}
      {isShowing && currentNavSection == "Agents" && <AdminAgentsTable />}
      {isShowing && currentNavSection == "Package" && <AdminPackageSection />}
    </>
  );
};

export default AdminSidebar;
