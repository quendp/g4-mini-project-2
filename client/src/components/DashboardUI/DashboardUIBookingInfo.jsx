import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../Utils/axios";

const DashboardUIBookingInfo = ({
  chosenBooking,
  setSearchParams,
  setUpdateUserInfo,
}) => {
  const { accessData } = useAuth();
  const [searchParams] = useSearchParams();
  const chosenRef = useRef(chosenBooking.id);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const newIdParams = searchParams.get("id");
    if (chosenRef.current !== newIdParams) {
      setMessage("");
      chosenRef.current = newIdParams;
    }
  }, [chosenBooking]);

  // Confirm booking from the API
  const submitToServer = async () => {
    try {
      setMessage("Submitting...");
      const response = await axios.put(
        "/api/bookings/confirm",
        JSON.stringify({ id: chosenBooking.id }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessData.token}`,
          },
          withCredentials: true,
        }
      );
      if (response.data) {
        setMessage(
          "Booking Successfully Confirmed. We'll send you further details about your booking as soon as possible."
        );
        setUpdateUserInfo((prev) => {
          return !prev;
        });
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    } catch (err) {
      setMessage("An error occurred. Please try again later.");
      console.log(err);
    }
  };

  return (
    <div className="dashboardUI-booking__wrapper row justify-content-center m-0 px-2 px-md-3 px-lg-5 pb-5 mb-5">
      <div className="dashboardUI-number__card col-10 col-md-5 p-4 m-3">
        <h3 className="text-center py-2">Travel Details</h3>
        <div>
          <p>
            {" "}
            <span>Status : </span> {chosenBooking.booking_status}{" "}
          </p>
          <p>
            {" "}
            <span>Trip Duration : </span> {chosenBooking.duration}{" "}
            {chosenBooking.duration == 1 ? "day" : "days"}
          </p>
          <p>
            {" "}
            <span>Pickup Location : </span> {chosenBooking.starting_location}{" "}
          </p>
          <p>
            {" "}
            <span>Travel Date : </span>{" "}
            {chosenBooking.travel_date.split("T")[0]}{" "}
          </p>
          <p>
            {" "}
            <span>Assigned Agent : </span> {chosenBooking.Agent.firstname}{" "}
            {chosenBooking.Agent.lastname}
          </p>
          <p>
            {" "}
            <span>Agent Email : </span> {chosenBooking.Agent.email}{" "}
          </p>
        </div>
      </div>
      <div className="dashboardUI-number__card col-10 col-md-5 p-4 m-3">
        <h3 className="text-center py-2">Companions</h3>
        <div>
          {chosenBooking.Companions.length > 0 ? (
            chosenBooking.Companions.map((person) => (
              <div key={person.id}>
                <p>
                  <span>Name : </span> {person.firstname} {person.lastname}
                </p>
                <p>
                  <span>Age : </span> {person.age}
                </p>
              </div>
            ))
          ) : (
            <p>No companions added.</p>
          )}
        </div>
      </div>
      <div className="dashboardUI-number__card col-10 col-md-5 p-4 m-3">
        <h3 className="text-center py-2">Package Details</h3>
        <div>
          <p>
            {" "}
            <span>Package Type : </span> {chosenBooking.Packages.package_type}{" "}
          </p>
          <p>
            {" "}
            <span>Destination : </span> {chosenBooking.Packages.destination}{" "}
          </p>
          <p>
            {" "}
            <span>Accommodation : </span> {chosenBooking.Packages.accommodation}{" "}
          </p>
          <p>
            {" "}
            <span>Flight Class : </span> {chosenBooking.Packages.flight_class}{" "}
          </p>
          <p>
            {" "}
            <span>Flight Company : </span>{" "}
            {chosenBooking.Payments.flight_company}{" "}
          </p>
          <p>
            {" "}
            <span>Transportation : </span>{" "}
            {chosenBooking.Packages.transportation}{" "}
          </p>
          <p>
            {" "}
            <span>Activities : </span> {chosenBooking.Packages.activities}{" "}
          </p>
        </div>
      </div>
      <div className="dashboardUI-number__card col-10 col-md-5 p-4 m-3">
        <h3 className="text-center py-2">Payment Details</h3>
        <div>
          <p>
            {" "}
            <span>Accommodation Cost : </span> Php{" "}
            {chosenBooking.Payments.accommodation_cost.toLocaleString()}.00{" "}
          </p>
          <p>
            {" "}
            <span>Activities Cost : </span>Php{" "}
            {chosenBooking.Payments.activities_cost.toLocaleString()}.00{" "}
          </p>
          <p>
            {" "}
            <span>Flight Cost : </span>Php{" "}
            {chosenBooking.Payments.flight_cost.toLocaleString()}.00{" "}
          </p>
          <p>
            {" "}
            <span>Transportation Cost : </span>Php{" "}
            {chosenBooking.Payments.transportation_cost.toLocaleString()}.00{" "}
          </p>
          <p>
            {" "}
            <span>Payment Status : </span>{" "}
            {chosenBooking.Payments.payment_status}{" "}
          </p>
          <p>
            {" "}
            <span>Total Cost : </span>Php{" "}
            {chosenBooking.Payments.total_cost.toLocaleString()}.00{" "}
          </p>
        </div>
      </div>
      <p
        className={`dashboardUI-booking__msg col-11 col-md-8 col-lg-6 p-3 px-5 py-sm-3 p-md-4 text-center mt-5 px-0 px-md-5 ${
          !message ? "d-none" : ""
        }`}
      >
        {message}
      </p>
      <div className="dashboardUI-booking__btn col-12 m-0 p-2 px-md-5 d-flex justify-content-end align-items-center">
        <button
          className="py-3 px-4 mt-4 mx-2"
          onClick={() => {
            setSearchParams({ id: "" });
          }}
        >
          Close
        </button>
        {chosenBooking.booking_status === "tentative" && (
          <button className="py-3 px-4 mt-4 mx-2" onClick={submitToServer}>
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardUIBookingInfo;
