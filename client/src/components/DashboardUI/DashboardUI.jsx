import React, { useState } from "react";
import "./DashboardUI.css";
import DashboardUISide from "./DashboardUISide";
import DashboardUITop from "./DashboardUITop";

const DashboardUI = ({ children, sidebarMenu, userInfo }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSideBar = () => {
    setIsSidebarOpen(true);
  };

  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main className="dashboarUI-main__wrapper container-fluid m-0 p-0 min-vh-100">
      <div className="row m-0 p-0 h-100">
        <DashboardUISide
          closeSideBar={closeSideBar}
          isSidebarOpen={isSidebarOpen}
          sidebarMenu={sidebarMenu}
          userInfo={userInfo}
        />
        <div className="dashboardUI-main__content m-0 p-0">
          <DashboardUITop openSideBar={openSideBar} />
          <div className="p-2 p-sm-3 px-md-5 py-md-4">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardUI;
