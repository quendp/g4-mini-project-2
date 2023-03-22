import React from "react";
import DashboardUINumbers from "../../components/DashboardUI/DashboardUINumbers";

const UserDashboard = ({ bookingsByStatus, accessData }) => {
  return (
    <div className="container-fluid p-0 py-3 m-0">
      <DashboardUINumbers
        bookingsByStatus={bookingsByStatus}
        accessData={accessData}
      />
    </div>
  );
};

export default UserDashboard;
