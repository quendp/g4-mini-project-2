import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DashboardTables from "../../components/DashboardUI/DashboardTables";
import DashboardUIBookingInfo from "../../components/DashboardUI/DashboardUIBookingInfo";
import LoaderSpinner from "../../components/Loader/LoaderSpinner";
const UserBookings = ({ bookings, accessData, setUpdateUserInfo }) => {
  const navigate = useNavigate();

  const onClickBooking = (row) => {
    navigate({
      pathname: `/${accessData.username}/bookings`,
      search: `?id=${row.original.id}`,
    });
  };

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

  const [chosenBooking, setChosenBooking] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (bookings) {
      const newIdParams = searchParams.get("id");
      const clickedBooking = bookings.find((item) => item.id == newIdParams);
      console.log("clicked : ", clickedBooking);
      newIdParams && setChosenBooking(clickedBooking);
    }
  }, [searchParams]);

  return (
    <div className="container-fluid p-0 py-3 m-0">
      <section className="dashboardUI-sections__wrapper row w-100 m-0 py-4 justify-content-center align-items-center">
        <h2 className="p-dark text-sm-start ps-sm-5 mb-4">
          I. Current Bookings
        </h2>
        {chosenBooking && searchParams.get("id") && (
          <DashboardUIBookingInfo
            chosenBooking={chosenBooking}
            setSearchParams={setSearchParams}
            setUpdateUserInfo={setUpdateUserInfo}
          />
        )}
        <div className="row m-0 px-2 px-md-3 px-lg-5">
          {bookings && (
            <DashboardTables
              tableData={bookings.sort(sortByUpdateAt)}
              tableColumns={tableColumns}
              filterByStatus={filterByStatus}
              onClickRow={onClickBooking}
            />
          )}
          {!bookings && <LoaderSpinner />}
        </div>
      </section>
    </div>
  );
};

export default UserBookings;
