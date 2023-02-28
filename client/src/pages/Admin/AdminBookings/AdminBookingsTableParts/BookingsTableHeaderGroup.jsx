import React from 'react'

const BookingsTableHeaderGroup = (props) => {
  return (
    <thead>
    {props.headerGroups.map((headerGroup, idx) => (
      <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
        {headerGroup.headers.map((column) => (
          <th
            className="bg-primary text-dark"
            style={{ fontSize: "10px" }}
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
  )
}

export default BookingsTableHeaderGroup
