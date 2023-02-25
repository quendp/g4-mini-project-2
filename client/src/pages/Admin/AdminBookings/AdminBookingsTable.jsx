import React from "react";
import BookingsTable from "./AdminBookingsTableParts/BookingsTable";
import "./AdminBookingsTable.css";

const AdminBookingsTable = () => {
  return (
    <div
      style={{ backgroundColor: "#ffffff", height: "140vh" }}
      className="col-xxl-10 col-xl-9 col-lg-9 ms-auto p-2 pt-lg-5 mt-lg-2"
    >
      <h4
        className="mb-0 fw-bolder text-dark fs-2 mb-3"
        style={{ backgroundColor: "#ffffff", textAlign: "center" }}
      >
        Bookings Table
      </h4>
      <BookingsTable />
    </div>
  );
};

export default AdminBookingsTable;
