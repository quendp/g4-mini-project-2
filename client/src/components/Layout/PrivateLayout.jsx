import React from "react";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="body-wrapper m-0 p-0">
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
