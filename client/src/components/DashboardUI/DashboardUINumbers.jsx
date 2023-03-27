import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const DashboardUINumbers = ({ bookingsByStatus, accessData }) => {
  return (
    <section className="dashboardUI-sections__wrapper row w-100 m-0 py-4 justify-content-center align-items-center align-content-start text-center">
      <h2 className="p-dark text-sm-start ps-sm-5">I. Booking Statistics</h2>
      {bookingsByStatus.map((booking) => (
        <Link
          to={`/${accessData.username}/bookings${
            booking.path ? "?sort=" + booking.path : ""
          }`}
          className="dashboardUI-number__card text-decoration-none col-8 col-sm-3 d-flex flex-column justify-content-between p-3 py-2 m-4"
          key={booking.id}
        >
          <h2 className="m-0 mb-3 p-4 lh-1">
            <CountUp start={0} end={booking.bookings.length} duration={1.5}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </h2>
          <p>{booking.status}</p>
        </Link>
      ))}
    </section>
  );
};

export default DashboardUINumbers;
