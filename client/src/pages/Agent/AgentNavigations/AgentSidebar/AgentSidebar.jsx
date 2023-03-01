import React from "react";
import user2 from "../../../../assets/images/user-avatar/user2.jpg";

const AgentSidebar = (props) => {
  const navItems = [
    {
      label: "Dashboard",
      icon: "fa-chart-line",
      onClick: (props) => props.startShowing("Dashboard"),
    },
    {
      label: "Waitlist",
      icon: "fa-list",
      onClick: (props) => props.startShowing("Waitlist"),
    },
    {
      label: "Tentative",
      icon: "fa-question",
      onClick: (props) => props.startShowing("Tentative"),
    },
    {
      label: "Confirmed",
      icon: "fa-check",
      onClick: (props) => props.startShowing("Confirmed"),
    },
    {
      label: "Cancelled",
      icon: "fa-ban",
      onClick: (props) => props.startShowing("Cancelled"),
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
  return (
    <>
      <div className="row">
        <div className="col-xxl-2 col-xl-3 col-lg-3  agentSidebar fixed-top">
          <a
            href="#"
            className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 agentSidebar-bottom__border agentSidebar-brand__name"
          >
            LAKBAY
          </a>
          <div className="agentSidebar-bottom__border pb-3">
            <img src={user2} width="50" className="rounded-circle me-3" />
            <a href="#" className="text-decoration-none text-white agent-name">
              Tyron Perez
            </a>
          </div>
          <ul className="navbar-nav flex-column mt-2">
            {navItems.map((navItem) => (
              <li key={navItem.label} className="nav-item">
                <a
                  href="#"
                  className="nav-link text-white p-3 mb-2 agentSidebar-navItem"
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
      </div>
    </>
  );
};

export default AgentSidebar;
