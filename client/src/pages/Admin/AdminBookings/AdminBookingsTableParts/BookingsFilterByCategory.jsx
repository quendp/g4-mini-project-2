import React from "react";

const BookingsFilterByCategory = (props) => {
  const filterCategoryHandler = (e) => {
    props.setFilterValue(e.target.value);
  };

  return (
    <div className="bookings-filter__category">
      <label htmlFor="filter-select" className="bookings-filterCategory__label">
        Filter by category:
      </label>
      <select
        className="bookings-filterCategory__select"
        id="filter-select"
        value={props.filterValue}
        onChange={filterCategoryHandler}
      >
        <option className="bookings-filterCategory__options" value="all">
          All destinations
        </option>
        <option
          className="bookings-filterCategory__options"
          value="cosmopolitan-lights"
        >
          Cosmopolitan lights
        </option>
        <option
          className="bookings-filterCategory__options"
          value="dive-under-water"
        >
          Dive under water
        </option>
        <option
          className="bookings-filterCategory__options"
          value="explore-the-summit"
        >
          Explore the summit
        </option>
        <option
          className="bookings-filterCategory__options"
          value="look-back-in-history"
        >
          Look back in history
        </option>
        <option
          className="bookings-filterCategory__options"
          value="nature-culture"
        >
          Nature and culture
        </option>
      </select>
    </div>
  );
};

export default BookingsFilterByCategory;
