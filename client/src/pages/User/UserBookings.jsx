import React from "react";
import DashboardTables from "../../components/DashboardUI/DashboardTables";
import LoaderSpinner from "../../components/Loader/LoaderSpinner";
const UserBookings = ({ bookings }) => {
  const sortByUpdateAt = (a, b) => {
    const aDate = a.updatedAt.split(/[-A-Z:.]/).join("");
    const bDate = b.updatedAt.split(/[-A-Z:.]/).join("");
    return +bDate - +aDate;
  };

  const tableColumns = [
    {
      Header: "No.",
      id: "index",
      accessor: (row, i) => {
        return i + 1;
      },
    },
    {
      Header: "Destination",
      accessor: "Packages.destination",
    },
    {
      Header: "Status",
      accessor: "booking_status",
    },
    {
      Header: "Travel Date",
      accessor: "travel_date",
      Cell: ({ row }) =>
        row.original ? row.original.travel_date.split("T")[0] : row.groupByVal,
    },
    {
      Header: "Travel Agent",
      accessor: "Agent.firstname",
      aggregate: "count",
      Aggregated: ({ value }) => `${value} Names`,
      Cell: ({ row }) =>
        row.original
          ? row.original.Agent.firstname + " " + row.original.Agent.lastname
          : row.groupByVal,
    },
    {
      Header: "Group",
      accessor: "Companions",
      Cell: ({ row }) =>
        row.original ? row.original.Companions.length : row.groupByVal,
    },
    {
      Header: "Total Cost",
      accessor: "Payments.total_cost",
      Cell: ({ row }) =>
        row.original
          ? `Php ${row.original.Payments.total_cost.toLocaleString()}.00`
          : row.groupByVal,
    },
  ];

  const filterByStatus = true;

  return (
    <div className="container-fluid p-0 py-3 m-0">
      <section className="dashboardUI-sections__wrapper row w-100 m-0 py-4 justify-content-center align-items-center">
        <h2 className="p-dark text-sm-start ps-sm-5 mb-4">
          I. Current Bookings
        </h2>
        <div
          className="row m-0 px-2 px-md-3 px-lg-5"
          style={{ overflowX: "scroll" }}
        >
          {bookings && (
            <DashboardTables
              tableData={bookings.sort(sortByUpdateAt)}
              tableColumns={tableColumns}
              filterByStatus={filterByStatus}
            />
          )}
          {!bookings && <LoaderSpinner />}
        </div>
      </section>
    </div>
  );
};

export default UserBookings;
