import React, { useState } from "react";
import FormModal from "../FormUI/FormModal";
import "./BookingForm.css";

const BookingForm = ({ children, chosenPackage }) => {
  const [step, setStep] = useState(0);

  const [travelDate, setTravelDate] = useState("");

  const [duration, setDuration] = useState("");

  const [location, setLocation] = useState("");

  const bookingData = {
    travel_date: travelDate,
    duration: duration,
    starting_location: location,
    package_id: chosenPackage.id,
  };
  const onClickSubmit = (event) => {
    event.preventDefault();
    console.log(bookingData);
    const bookingModalInst = document.getElementById("bookingModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(bookingModalInst);
    myModal.hide();
  };

  const onClickBtnRight = () => {
    setTimeout(() => {
      setStep(1);
    }, 100);
  };
  const onClickBtnLeft = () => {
    setTimeout(() => {
      setStep((prevStep) => {
        if (prevStep == 0) return 0;
        else {
          return prevStep - 1;
        }
      });
    }, 100);
  };

  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <p className="text-start p-2 m-0 my-2">
              <span className="me-2">Destination : </span>
              {!chosenPackage ? "Unavailable" : chosenPackage.destination}
            </p>
            <p className="text-start p-2 m-0 my-2">
              <span className="me-2">Transportation : </span>
              {!chosenPackage ? "Unavailable" : chosenPackage.transportation}
            </p>
            <p className="text-start p-2 m-0 my-2">
              <span className="me-2">Flight Class : </span>
              {!chosenPackage ? "Unavailable" : chosenPackage.flight_class}
            </p>
            <p className="text-start p-2 m-0 my-2">
              <span className="me-2">Accommodation : </span>
              {!chosenPackage ? "Unavailable" : chosenPackage.accommodation}
            </p>
            <p className="text-start p-2 m-0 my-2">
              <span className="me-2">Activities : </span>
              {!chosenPackage ? "Unavailable" : chosenPackage.activities}
            </p>
            <p className="text-start p-2 m-0 my-2">
              <span className="me-2">Starting Price : </span>
              {!chosenPackage
                ? "Unavailable"
                : `Php ${chosenPackage.starting_price}.00`}
            </p>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="row g-0 g-sm-4 my-3">
              <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
                <input
                  type="date"
                  id="bookingFormTravelDate"
                  className={`form-control`}
                  placeholder="Date of expected travel"
                  aria-label="Date of expected travel"
                  onChange={(e) => {
                    setTravelDate(e.target.value);
                  }}
                  value={travelDate}
                />
                <label htmlFor="bookingFormTravelDate" className="ps-3 ps-sm-4">
                  Expected Date of Travel
                </label>
                <div className="invalid-feedback">
                  Please enter a valid date.{" "}
                </div>
              </div>
              <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
                <input
                  type="number"
                  id="bookingFormDuration"
                  className={`form-control`}
                  placeholder="Trip Duration"
                  aria-label="Trip Duration"
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                  value={duration}
                />
                <label htmlFor="bookingFormDuration" className="ps-3 ps-sm-4">
                  Trip Duration (in Days)
                </label>
                <div className="invalid-feedback">
                  Please enter a valid number. Could be 0.5-30 days.
                </div>
              </div>
            </div>
            <div className="form-floating mb-3 mb-sm-4">
              <input
                type="text"
                className={`form-control`}
                id="bookingFormLocation"
                placeholder="Pick Up Location or Address"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
              />
              <label htmlFor="bookingFormLocation">
                Pick Up Location or Address
              </label>
              <div className="invalid-feedback">
                Please enter a valid address.
              </div>
            </div>
          </div>
        );
      default:
    }
  };
  const headerTitle = `Book a trip to ${chosenPackage.destination}`;
  const headerText = "Fill up this form to proceed to your booking.";
  const btnLeftClass = "modal-cancel-btn";
  const dataDismiss = step === 0 ? "modal" : "";
  const btnLeftText = step === 0 ? "cancel" : "previous";
  const btnRightType = step === 0 ? "button" : "submit";
  const btnRightText = step === 0 ? "next" : "submit";
  const bookingFormTitle = () => {
    let bookingStepTitle;
    if (step == 0) {
      bookingStepTitle = "Confirm Package Details";
    } else {
      bookingStepTitle = "Travel Details";
    }
    return bookingStepTitle;
  };

  return (
    <>
      <div
        className="modal fade"
        id="bookingModal"
        tabIndex="-1"
        aria-labelledby="bookingModalLabel"
        aria-hidden="true"
      >
        <div className="booking-form__content modal-dialog modal-lg modal-dialog-centered">
          <FormModal
            submitHandler={onClickSubmit}
            headerTitle={headerTitle}
            headerText={headerText}
            btnLeftClass={btnLeftClass}
            dataDismiss={dataDismiss}
            onClickBtnLeft={onClickBtnLeft}
            btnLeftText={btnLeftText}
            btnRightType={btnRightType}
            onClickBtnRight={onClickBtnRight}
            btnRightText={btnRightText}
            errMsg={""}
          >
            <div className="mb-4">
              <h3>
                <span>Step {step + 1} of 2 :</span> {bookingFormTitle()}
              </h3>
            </div>
            {conditionalComponent()}
          </FormModal>
        </div>
      </div>
      {children}
    </>
  );
};

export default BookingForm;
