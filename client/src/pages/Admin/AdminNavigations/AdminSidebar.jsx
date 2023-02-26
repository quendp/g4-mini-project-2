import React from "react";
import Image from "../../../assets/images/user-avatar/user1.jpg";

const navItems = [
  {
    label: "Dashboard",
    icon: "fa-house-user",
    onClick: (props) => props.startShowing("Dashboard"),
  },
  {
    label: "Bookings",
    icon: "fa-list",
    onClick: (props) => props.startShowing("Bookings"),
  },
  {
    label: "Agents",
    icon: "fa-user-tie",
    onClick: (props) => props.startShowing("Agents"),
  },
  {
    label: "Package",
    icon: "fa-box",
    onClick: (props) => props.startShowing("Package"),
  },
];

const navItemsBottom = [
  {
    label: "Settings",
    icon: "fa-cog",
    onClick: (props) => props.startShowing("Settings"),
  },
  {
    label: "Account Information",
    icon: "fa-user-circle",
    onClick: (props) => props.startShowing("Account Information"),
  },
];

const AdminSidebar = (props) => {
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
          {navItems.map((navItem) => (
            <li key={navItem.label} className="nav-item">
              <a
                href="#"
                className="nav-link text-white p-3 mb-2 admin-sidebar__panel"
                onClick={() => navItem.onClick(props)}
              >
                <i
                  className={`fa-solid ${navItem.icon} text-light fa-lg me-3`}
                ></i>
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="admin-sidebar__settingsAndAccount">
          {navItemsBottom.map((navItem) => (
            <a
              key={navItem.label}
              href="#"
              className="nav-link text-muted p-3 mb-2"
              onClick={() => navItem.onClick(props)}
            >
              <i
                className={`fa-solid ${navItem.icon} text-muted fa-lg me-3`}
              ></i>
              {navItem.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
