import React from "react";

const AgentsPagination = (props) => {
  return (
    <div className="agents-table__pagination">
      <span className="agents-pagination__whatPage">
        Page{" "}
        <strong className="agents-pagination__numberPage">
          {props.pageIndex + 1} of {props.pageOptions.length}
        </strong>{" "}
      </span>
      <button
        className="agents-pagination__button"
        onClick={() => props.previousPage()}
        disabled={!props.canPreviousPage}
      >
        Previous
      </button>
      <button
        className="agents-pagination__button"
        onClick={() => props.nextPage()}
        disabled={!props.canNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default AgentsPagination;
