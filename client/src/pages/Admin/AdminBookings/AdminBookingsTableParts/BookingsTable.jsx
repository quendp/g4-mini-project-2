import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import MOCK_DATA from "../../AdminDataCollection/AdminBookingsTableData/AdminBookingsMOCK_DATA.json";
import { bookingsTableColumn } from "../../AdminTablesUIs/AdminTablesColumn";
import BookingsFilterByCategory from "./BookingsFilterByCategory";
import BookingsFilterByStatus from "./BookingsFilterByStatus";
import AdminGlobalFiltering from "../../AdminTablesUIs/AdminGlobalFiltering";
import AdminTableHeaderGroups from "../../AdminTablesUIs/AdminTableHeaderGroups";
import AdminTablesPagination from "../../AdminTablesUIs/AdminTablesPagination";

const BookingsTable = () => {
  const columns = useMemo(() => bookingsTableColumn, []);
  const [filterValue, setFilterValue] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const data = useMemo(() => {
    let filteredData = MOCK_DATA;
    if (filterValue === "cosmopolitan-lights") {
      filteredData = filteredData.filter(
        (row) =>
          row.destination === "Cultural Center" ||
          row.destination === "Chinatown" ||
          row.destination === "Mall of Asia" ||
          row.destination === "Ocean Park" ||
          row.destination === "Solaire" ||
          row.destination === "Star City"
      );
    } else if (filterValue === "dive-under-water") {
      filteredData = filteredData.filter(
        (row) =>
          row.destination === "Bantayan" ||
          row.destination === "Boracay" ||
          row.destination === "El Nido" ||
          row.destination === "Palaui" ||
          row.destination === "Panglao" ||
          row.destination === "Siargao"
      );
    } else if (filterValue === "explore-the-summit") {
      filteredData = filteredData.filter(
        (row) =>
          row.destination === "Mt. Apo" ||
          row.destination === "Guiting-Guiting" ||
          row.destination === "Mt. Pulag" ||
          row.destination === "Mt. Pinatubo" ||
          row.destination === "Mt. Ugo" ||
          row.destination === "Mt. Ulap"
      );
    } else if (filterValue === "look-back-in-history") {
      filteredData = filteredData.filter(
        (row) =>
          row.destination === "Calle Crisologo" ||
          row.destination === "Fort Santiago" ||
          row.destination === "Mactan" ||
          row.destination === "Museum" ||
          row.destination === "Rizal Shrine" ||
          row.destination === "Rizal Park"
      );
    } else if (filterValue === "nature-culture") {
      filteredData = filteredData.filter(
        (row) =>
          row.destination === "Bohol" ||
          row.destination === "Coron" ||
          row.destination === "Ifugao" ||
          row.destination === "Puerto Galera" ||
          row.destination === "Tagaytay" ||
          row.destination === "Tanay"
      );
    }
    if (statusFilter !== "all") {
      filteredData = filteredData.filter((row) => row.status === statusFilter);
    }
    return filteredData;
  }, [filterValue, statusFilter]);

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
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="bookings-table_filteringAndSearch">
        <div>
          <BookingsFilterByStatus
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
          <BookingsFilterByCategory
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        </div>
        <div>
          <AdminGlobalFiltering
            filter={globalFilter}
            setFilter={setGlobalFilter}
          />
        </div>
      </div>
      <table className="admin-table" {...getTableProps()}>
        <AdminTableHeaderGroups headerGroups={headerGroups} isBooking={true} />
        <tbody {...getTableBodyProps()}>
          {page.map((row, idx) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={idx}>
                {row.cells.map((cell, idx) => {
                  let className = "";
                  if (cell.column.id === "status") {
                    if (cell.value === "Waitlist") {
                      className = "text-primary";
                    } else if (cell.value === "Tentative") {
                      className = "text-muted";
                    } else if (cell.value === "Confirmed") {
                      className = "text-success";
                    } else {
                      className = "text-danger";
                    }
                  }
                  return (
                    <td
                      className={className}
                      {...cell.getCellProps()}
                      key={idx}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <AdminTablesPagination
        nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageSizeOptions={[10, 15, 20]}
      />
    </>
  );
};

export default BookingsTable;
