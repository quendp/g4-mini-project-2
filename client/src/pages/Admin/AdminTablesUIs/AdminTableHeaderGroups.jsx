import React from "react";
import "./AdminTableUIs.css";

const AdminTableHeaderGroups = (props) => {
  const isBooking = props.isBooking;
  const headerColors = isBooking
    ? "bg-primary text-dark .admin-bookings__tablehead"
    : "bg-success text-light-50 .admin-agents__tablehead";

  return (
    <thead>
      {props.headerGroups.map((headerGroup, idx) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
          {headerGroup.headers.map((column) => (
            <th
              className={`${headerColors}`}
              {...column.getHeaderProps(column.getSortByToggleProps())}
              key={column.id}
            >
              <div className="d-flex align-items-center justify-content-between">
                {column.render("Header")}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <i className="fa-solid fa-sort-down bookings-header__sorter"></i>
                    ) : (
                      <i className="fa-solid fa-sort-up bookings-header__sorter"></i>
                    )
                  ) : (
                    <i className="fa-solid fa-sort bookings-header__sortfull"></i>
                  )}
                </span>
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default AdminTableHeaderGroups;
