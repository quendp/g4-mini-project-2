import React from "react";

const DashboardUISide = ({ isSidebarOpen, closeSideBar }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "isClicked" : ""
      } dashboardUI-side__wrapper vh-100 top-0 start-0`}
    >
      <button className="d-block d-md-none" onClick={closeSideBar}>
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div className="p-light">this is the sidebar</div>
    </div>
  );
};

export default DashboardUISide;
