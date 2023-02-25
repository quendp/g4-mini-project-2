import React from "react";

const BookingTablePageSize = (props) => {
  const pageSizeSettinghandler = (e) => {
    props.setPageSize(Number(e.target.value));
  };

  return (
    <select
      className="booking-pageSize__select"
      value={props.pageSize}
      onChange={pageSizeSettinghandler}
    >
      {[10, 15, 20].map((pageSize) => (
        <option
          className="booking-pageSize__option"
          key={pageSize}
          value={pageSize}
        >
          Show {pageSize}
        </option>
      ))}
    </select>
  );
};

export default BookingTablePageSize;
