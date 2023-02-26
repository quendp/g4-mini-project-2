import React from "react";
import "./AdminTableUIs.css";

const AdminGlobalFiltering = (props) => {
  const filterHandler = (e) => {
    props.setFilter(e.target.value);
  };

  return (
    <span className="d-flex mb-2 global-filter__span">
      <div className="global-filter__search">Search: </div>
      <input
        className="global-filter__input"
        value={props.filter || ""}
        onChange={filterHandler}
      />
    </span>
  );
};

export default AdminGlobalFiltering;
