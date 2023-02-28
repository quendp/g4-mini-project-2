import React from "react";
const BookingsFilterByStatus = (props) => {
  const filterByStatusHandler = (e) => {
    props.setStatusFilter(e.target.value);
  };

  return (
    <div className="bookings-filter__status">
      <label htmlFor="filter-select" className="bookings-filterStatus__label">
        Filter by status:
      </label>
      <select
        className="bookings-filterStatus__select"
        id="filter-select"
        value={props.statusFilter}
        onChange={filterByStatusHandler}
      >
        <option className="bookings-filterStatus__options" value="all">
          All Status
        </option>
        <option className="bookings-filterStatus__options" value="Waitlist">
          Waitlist
        </option>
        <option className="bookings-filterStatus__options" value="Tentative">
          Tentative
        </option>
        <option className="bookings-filterStatus__options" value="Confirmed">
          Confirmed
        </option>
        <option className="bookings-filterStatus__options" value="Cancelled">
          Cancelled
        </option>
      </select>
    </div>
  );
};

export default BookingsFilterByStatus;
