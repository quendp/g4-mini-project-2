import React from "react";

const AgentsHeaderGroups = (props) => {
  return (
    <thead>
      {props.headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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

export default AgentsHeaderGroups;
