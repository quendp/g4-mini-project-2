import React from "react";

const DashboardUITop = ({ openSideBar }) => {
  return (
    <div className="dashboardUI-top__wrapper w-100 position-sticky top-0 start-0">
      <button className="d-block d-md-none" onClick={openSideBar}>
        <i class="fa-solid fa-bars"></i>
      </button>
      <p className="p-light">this is the top nav</p>
    </div>
  );
};

export default DashboardUITop;
