import React from "react";
import { Link } from "react-router-dom";

const UserBookings = () => {
  return (
    <div className="user-page-home__container container-fluid p-0 pe-5 m-0">
      <div className="row m-5 mt-4 p-4 min-vh-100">
        <div className="user-page-home__content col-12 pt-5 d-flex flex-column justify-content-start align-items-center">
          <h2 className="text-center my-5">
            You haven't booked yet. Try adding one.
          </h2>
          <Link to="/categories/cosmopolitan-lights/star-city">
            <button className="user-page-bookings__button px-5 py-3">
              Book Now <i className="m-0 ms-2 fa-solid fa-circle-plus"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserBookings;
