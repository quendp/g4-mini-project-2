import React from "react";
import BookingFormCompanions from "./BookingFormCompanions";

const BookingFormTravel = (props) => {
  const addCompanionHandler = () => {
    if (props.companions.length < 10) {
      props.setCompanions((prev) => {
        return [
          ...prev,
          {
            id: Math.random(),
            firstname: "",
            lastname: "",
            age: null,
          },
        ];
      });
    }
  };

  const removeCompHandler = (compId) => {
    props.setCompanions((prev) => {
      return prev.filter((comp) => comp.id !== compId);
    });
  };

  return (
    <div>
      <div className="row g-0 g-sm-4">
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="date"
            id="bookingFormTravelDate"
            className={`form-control ${props.travelDateClass}`}
            placeholder="Date of expected travel"
            aria-label="Date of expected travel"
            onChange={(e) => {
              props.setTravelDate(e.target.value);
            }}
            value={props.travelDate}
            min={new Date().toISOString().split("T")[0]}
          />
          <label htmlFor="bookingFormTravelDate" className="ps-3 ps-sm-4">
            Expected Date of Travel
          </label>
          <div className="invalid-feedback">Please enter a valid date. </div>
        </div>
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="number"
            id="bookingFormDuration"
            className={`form-control ${props.durationClass}`}
            placeholder="Trip Duration"
            aria-label="Trip Duration"
            onChange={(e) => {
              props.setDuration(e.target.value);
            }}
            value={props.duration}
            min="1"
            max="99"
          />
          <label htmlFor="bookingFormDuration" className="ps-3 ps-sm-4">
            Trip Duration (in Days)
          </label>
          <div className="invalid-feedback">
            Please enter a valid number. Could be 1-99 days.
          </div>
        </div>
      </div>
      <div className="form-floating mb-3 mb-sm-4">
        <input
          type="text"
          className={`form-control ${props.locationClass}`}
          id="bookingFormLocation"
          placeholder="Pick Up Location or Address"
          onChange={(e) => {
            props.setLocation(e.target.value);
          }}
          value={props.location}
        />
        <label htmlFor="bookingFormLocation">Pick Up Location or Address</label>
        <div className="invalid-feedback">Please enter a valid address.</div>
      </div>
      <div className="mb-3 mt-5 mb-sm-4">
        <p>
          If you are travelling as a group, add your companions below. Maximum
          of 10.
        </p>
      </div>
      {props.companions &&
        props.companions.map((companion, index) => (
          <BookingFormCompanions
            companion={companion}
            key={companion.id}
            index={index}
            removeCompHandler={removeCompHandler}
            setCompanions={props.setCompanions}
          />
        ))}
      <div className="mb-3 mb-sm-4 pb-2">
        <div className="d-inline-block me-3">
          <button
            type="button"
            className="btn modal-signup-btn py-2 px-3 d-flex align-items-center"
            style={{
              backgroundColor: props.currentTheme,
            }}
            onClick={addCompanionHandler}
          >
            <i className="fa-solid fa-circle-plus fa-xl me-1 m-0 p-0 lh-0"></i>{" "}
            Add companion
          </button>
        </div>
        <span>{props.companions.length} / 10</span>
      </div>
    </div>
  );
};

export default BookingFormTravel;
