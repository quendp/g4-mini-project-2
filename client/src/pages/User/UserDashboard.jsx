import React, { useEffect, useState } from "react";
import DashboardUINumbers from "../../components/DashboardUI/DashboardUINumbers";

const UserDashboard = ({ bookings, accessData }) => {
  const [bookingsByStatus, setBookingsByStatus] = useState([
    {
      id: 1,
      path: "waitlist",
      status: "Waitlisted Bookings",
      bookings: [],
    },
    {
      id: 2,
      path: "tentative",
      status: "Tentative Bookings",
      bookings: [],
    },
    {
      id: 3,
      path: "confirmed",
      status: "Confirmed Bookings",
      bookings: [],
    },
    {
      id: 4,
      path: "successful",
      status: "Successful Bookings",
      bookings: [],
    },
    {
      id: 5,
      path: "cancelled",
      status: "Cancelled Bookings",
      bookings: [],
    },
    {
      id: 6,
      path: "",
      status: "Total Bookings",
      bookings: [],
    },
  ]);

  const filterBookingsByStatus = (bookings) => {
    setBookingsByStatus([
      {
        id: 1,
        path: "waitlist",
        status: "Waitlisted Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "waitlist"
        ),
      },
      {
        id: 2,
        path: "tentative",
        status: "Tentative Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "tentative"
        ),
      },
      {
        id: 3,
        path: "confirmed",
        status: "Confirmed Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "confirmed"
        ),
      },
      {
        id: 4,
        path: "successful",
        status: "Successful Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "successful"
        ),
      },
      {
        id: 5,
        path: "cancelled",
        status: "Cancelled Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "cancelled"
        ),
      },
      {
        id: 6,
        path: "",
        status: "Total Bookings",
        bookings: bookings,
      },
    ]);
  };

  useEffect(() => {
    if (bookings) {
      filterBookingsByStatus(bookings);
    }
  }, [bookings]);

  return (
    <div className="container-fluid p-0 py-3 m-0">
      <DashboardUINumbers
        bookingsByStatus={bookingsByStatus}
        accessData={accessData}
      />
    </div>
  );
};

export default UserDashboard;
