import React from "react";

const AdminTablesPageSize = (props) => {
  const pageSizeSettinghandler = (e) => {
    props.setPageSize(Number(e.target.value));
  };

  return (
    <select
      className="admin-pageSize__select"
      value={props.pageSize}
      onChange={pageSizeSettinghandler}
    >
      {props.options.map((pageSize) => (
        <option
          className="admin-pageSize__option"
          key={pageSize}
          value={pageSize}
        >
          Show {pageSize}
        </option>
      ))}
    </select>
  );
};

export default AdminTablesPageSize;
