import React from "react";
import LoaderSpinner from "../../components/Loader/LoaderSpinner";
import AgentUpdatesItem from "./AgentUpdatesItem";

const AgentUpdates = ({ bookings }) => {
  const sortByUpdateAt = (a, b) => {
    const aDate = a.updatedAt.split(/[-A-Z:.]/).join("");
    const bDate = b.updatedAt.split(/[-A-Z:.]/).join("");
    return +bDate - +aDate;
  };

  return (
    <div className="container-fluid p-0 py-3 m-0">
      <section className="dashboardUI-sections__wrapper row w-100 m-0 py-4 justify-content-start align-items-center">
        <h2 className="p-dark text-sm-start ps-sm-5">I. Booking Updates</h2>
        <div className="row m-0 px-2 px-md-3 px-lg-4">
          {bookings &&
            bookings
              .sort(sortByUpdateAt)
              .map((booking) => (
                <AgentUpdatesItem key={booking.id} booking={booking} />
              ))}
        </div>
        {!bookings && <LoaderSpinner />}
      </section>
    </div>
  );
};

export default AgentUpdates;
