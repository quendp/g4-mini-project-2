import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopNav from "./AdminTopNav";
import "./AdminNavigations.css";

const AdminNavigations = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ zIndex: "10" }}
    >
      <div className=" navbar-collapse" id="navbarSupportedContent">
        <div className="container-fluid">
          <div className="row">
            <AdminSidebar />
            <AdminTopNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavigations;
