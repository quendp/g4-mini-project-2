import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AgentUpdatesItem = ({ booking }) => {
  const { accessData } = useAuth();

  const [updateTitle, setUpdateTitle] = useState("");

  useEffect(() => {
    switch (booking.booking_status) {
      case "waitlist":
        setUpdateTitle(
          `New waitlist! User ${booking.Users.username} just requested a new booking to ${booking.Packages.destination}`
        );
        break;
      case "tentative":
        setUpdateTitle(
          `You just moved ${booking.Users.username}'s booking request to the tentative list. `
        );
        break;
      case "confirmed":
        setUpdateTitle(
          `Confirmed! User ${booking.Users.username} recently paid and confirmed their booking to ${booking.Packages.destination} `
        );
        break;
      case "successful":
        setUpdateTitle(
          `User ${booking.Users.username} have successfully completed their tour to ${booking.Packages.destination}!`
        );
        break;
      case "cancelled":
        setUpdateTitle(
          `Unfortunately, ${booking.Users.username} cancelled their booking to ${booking.Packages.destination} with their companions`
        );
        break;
      default:
        setUpdateTitle("No booking details available");
    }
  }, []);

  return (
    <div className="col-12 col-sm-6 col-lg-4 m-0 p-2">
      <Link
        to={`/${accessData.username}/bookings?id=${booking.id}`}
        className="dashboardUI-number__card text-decoration-none m-3 row p-3 p-lg-4 d-flex flex-column justify-content-center"
      >
        <h3 className="user-card__title m-0 p-0 mb-4 p-dark">{updateTitle}</h3>
        <div className="user-card__description p-3 m-0">
          <p className="m-0 p-0 lh-1 py-2">
            <span className="me-2">Destination:</span>
            {booking.Packages.destination}{" "}
          </p>
          <p className="m-0 p-0 lh-1 py-2">
            <span className="me-2">Status:</span>
            <span
              className="user-card__status p-1 px-2"
              style={{
                backgroundColor: `var(--clr-status-${booking.booking_status})`,
              }}
            >
              {booking.booking_status}
            </span>
          </p>
          <p className="m-0 p-0 lh-1 py-2">
            <span className="me-2">Travel Date:</span>
            {booking.travel_date.split("T")[0]}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AgentUpdatesItem;
