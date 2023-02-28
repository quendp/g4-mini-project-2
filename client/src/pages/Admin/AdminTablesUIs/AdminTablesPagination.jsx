import React from "react";
import AdminTablesPageSize from "./AdminTablesPageSize";

const AdminTablesPagination = (props) => {
  return (
    <div className="admin-table__pagination">
      <span className="admin-pagination__whatPage">
        Page{" "}
        <strong className="admin-pagination__numberPage">
          {props.pageIndex + 1} of {props.pageOptions.length}
        </strong>{" "}
      </span>
      <AdminTablesPageSize
        pageSize={props.pageSize}
        setPageSize={props.setPageSize}
        options={props.pageSizeOptions}
      />
      <button
        className="admin-pagination__button"
        onClick={() => props.gotoPage(0)}
        disabled={!props.canPreviousPage}
      >
        {"<<"}
      </button>
      <button
        className="admin-pagination__button"
        onClick={() => props.previousPage()}
        disabled={!props.canPreviousPage}
      >
        Previous
      </button>
      <button
        className="admin-pagination__button"
        onClick={() => props.nextPage()}
        disabled={!props.canNextPage}
      >
        Next
      </button>
      <button
        className="admin-pagination__button"
        onClick={() => props.gotoPage(props.pageCount - 1)}
        disabled={!props.canNextPage}
      >
        {">>"}
      </button>
    </div>
  );
};

export default AdminTablesPagination;
