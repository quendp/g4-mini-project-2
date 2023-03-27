import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const DashboardTables = ({
  tableData,
  tableColumns,
  filterByStatus,
  onClickRow,
}) => {
  const sortByUpdateAt = (a, b) => {
    const aDate = a.updatedAt.split(/[-A-Z:.]/).join("");
    const bDate = b.updatedAt.split(/[-A-Z:.]/).join("");
    return +bDate - +aDate;
  };
  const [statusFilter, setStatusFilter] = useState("all");
  const columns = useMemo(() => (tableColumns ? tableColumns : []), []);
  const data = useMemo(() => {
    let filteredData = tableData.Bookings
      ? tableData.Bookings.sort(sortByUpdateAt)
      : [];
    if (statusFilter !== "all") {
      filteredData = filteredData.filter(
        (row) => row.booking_status === statusFilter
      );
    }
    return filteredData;
  }, [statusFilter, tableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const sortParams = searchParams.get("sort");
    sortParams && setStatusFilter(sortParams);
  }, [searchParams]);

  return (
    <div className="my-3">
      <div className="row mb-4 px-3">
        {/* Search bar */}
        <div className="dashboardUI-table__search col-12 col-md-6 pe-0 pe-md-5 mb-4 mb-md-0">
          <input
            className="w-100"
            placeholder="Search..."
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
        {/* Filter by status */}
        {filterByStatus && (
          <div className="dashboardUI-table__filter d-flex justify-content-end align-items-center col-12 col-md-6">
            <label htmlFor="filter-select" className="me-3">
              Filter by status :
            </label>
            <select
              id="filter-select"
              className="px-3 py-2"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="waitlist">Waitlist</option>
              <option value="tentative">Tentative</option>
              <option value="confirmed">Confirmed</option>
              <option value="successful">Successful</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        )}
      </div>

      <table {...getTableProps()} className="dashboardUI-table__wrapper">
        <thead>
          {headerGroups.map((headerGroup, idx) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="d-flex align-items-center justify-content-between">
                    {column.render("Header")}
                    <span>
                      {column.isSorted && column.isSortedDesc && (
                        <i
                          className="fa-solid fa-sort-down"
                          style={{ opacity: "0.7" }}
                        ></i>
                      )}
                      {column.isSorted && !column.isSortedDesc && (
                        <i
                          className="fa-solid fa-sort-up"
                          style={{ opacity: "0.7" }}
                        ></i>
                      )}
                      {!column.isSorted && (
                        <i
                          className="fa-solid fa-sort"
                          style={{ opacity: "0.3" }}
                        ></i>
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => onClickRow(row)}>
                {row.cells.map((cell) => {
                  let currentStatus = "";
                  let centerText = false; // add conditional here for classname
                  if (cell.column.Header === "Status") {
                    currentStatus = cell.value;
                    centerText = true;
                  } else if (
                    cell.column.Header === "No." ||
                    cell.column.Header === "Group"
                  ) {
                    centerText = true;
                  }
                  return (
                    <td {...cell.getCellProps()}>
                      <span
                        className={`${
                          centerText
                            ? "p-1 px-2 d-flex justify-content-center text-center"
                            : ""
                        } ${
                          cell.column.Header === "Status"
                            ? "dashboardUI-table__status "
                            : ""
                        }`}
                        style={{
                          backgroundColor: `var(--clr-status-${currentStatus})`,
                        }}
                      >
                        {cell.render("Cell")}
                      </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="dashboardUI-table__pagination d-flex justify-content-center align-items-center">
        <button
          className="py-2 mx-3"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <span className="mx-2">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          className="mx-2 p-2"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option key="5" value="5">
            Show 5
          </option>
          <option key="10" value="10">
            Show 10
          </option>
        </select>
        <button
          className="py-2 mx-3"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardTables;
