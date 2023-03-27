import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../Utils/axios";
import regEx from "../../Utils/regEx";

const AgentUpdateBookingInfo = ({
  chosenBooking,
  setSearchParams,
  setUpdateUserInfo,
}) => {
  const { accessData } = useAuth();
  const [searchParams] = useSearchParams();
  const chosenRef = useRef(chosenBooking.id);

  const [company, setCompany] = useState(chosenBooking.Payments.flight_company);
  const [accommodation, setAccommodation] = useState(
    chosenBooking.Payments.accommodation_cost
  );
  const [activities, setActivities] = useState(
    chosenBooking.Payments.activities_cost
  );
  const [flight, setFlight] = useState(chosenBooking.Payments.flight_cost);
  const [transportation, setTransportation] = useState(
    chosenBooking.Payments.transportation_cost
  );

  const updatedData = {
    id: chosenBooking.id,
    flight_company: company,
    accommodation_cost: Number(accommodation),
    activities_cost: Number(activities),
    flight_cost: Number(flight),
    transportation_cost: Number(transportation),
  };

  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    const newIdParams = searchParams.get("id");
    if (chosenRef.current !== newIdParams) {
      setMessage("");
      chosenRef.current = newIdParams;
    }
  }, [chosenBooking]);

  // Confirm booking from the API
  const submitToServer = async () => {
    if (
      !regEx.NAME_REGEX.test(company) ||
      !regEx.COST_REGEX.test(accommodation) ||
      !regEx.COST_REGEX.test(activities) ||
      !regEx.COST_REGEX.test(flight) ||
      !regEx.COST_REGEX.test(transportation)
    ) {
      setMessage("Input invalid. Please try again.");
      return;
    }
    try {
      setMessage("Submitting...");
      const response = await axios.put(
        "/api/bookings/updateCost",
        JSON.stringify(updatedData),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessData.token}`,
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data) {
        setIsEditing(false);
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
            <span>User : </span> {chosenBooking.Users.firstname}{" "}
            {chosenBooking.Users.lastname}
          </p>
          <p>
            {" "}
            <span>User Email : </span> {chosenBooking.Users.email}{" "}
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
            <span>Flight Company : </span>{" "}
            {!isEditing && chosenBooking.Payments.flight_company}
            {isEditing && (
              <input
                type="text"
                placeholder="Company Name"
                required
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                value={company}
              />
            )}
          </p>
          <p>
            {" "}
            <span>Accommodation Cost : </span>{" "}
            {!isEditing && chosenBooking.Payments.accommodation_cost}{" "}
            {isEditing && (
              <input
                type="number"
                placeholder="0.00"
                required
                onChange={(e) => {
                  setAccommodation(e.target.value);
                }}
                value={accommodation}
              />
            )}
          </p>
          <p>
            {" "}
            <span>Activities Cost : </span>{" "}
            {!isEditing && chosenBooking.Payments.activities_cost}{" "}
            {isEditing && (
              <input
                type="number"
                placeholder="0.00"
                required
                onChange={(e) => {
                  setActivities(e.target.value);
                }}
                value={activities}
              />
            )}
          </p>
          <p>
            {" "}
            <span>Flight Cost : </span>{" "}
            {!isEditing && chosenBooking.Payments.flight_cost}{" "}
            {isEditing && (
              <input
                type="number"
                placeholder="0.00"
                required
                onChange={(e) => {
                  setFlight(e.target.value);
                }}
                value={flight}
              />
            )}
          </p>
          <p>
            {" "}
            <span>Transportation Cost : </span>{" "}
            {!isEditing && chosenBooking.Payments.transportation_cost}{" "}
            {isEditing && (
              <input
                type="number"
                placeholder="0.00"
                required
                onChange={(e) => {
                  setTransportation(e.target.value);
                }}
                value={transportation}
              />
            )}
          </p>
          <p>
            {" "}
            <span>Payment Status : </span>{" "}
            {chosenBooking.Payments.payment_status}{" "}
          </p>
          <p>
            {" "}
            <span>Total Cost : </span>{" "}
            {!isEditing && chosenBooking.Payments.total_cost}{" "}
            {isEditing &&
              `${
                Number(0.0) +
                Number(accommodation) +
                Number(activities) +
                Number(flight) +
                Number(transportation)
              }`}
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
            setIsEditing(false);
          }}
        >
          Close
        </button>
        {(chosenBooking.booking_status === "waitlist" ||
          chosenBooking.booking_status === "tentative") && (
          <button
            className="py-3 px-4 mt-4 mx-2"
            onClick={!isEditing ? startEditing : submitToServer}
          >
            {!isEditing ? "Update Booking" : "Submit Update"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AgentUpdateBookingInfo;
