import React, { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";
import FormModal from "../FormUI/FormModal";
import "./BookingForm.css";
import BookingFormPackage from "./BookingFormPackage";
import BookingFormTravel from "./BookingFormTravel";

const BookingForm = ({ children, chosenPackage }) => {
  const { currentTheme } = useTheme();

  // Regex patterns for input validation
  const DURATION_REGEX = /^\d{1,2}$/;
  const LOCATION_REGEX = /^[\w'\-,.][^_!¡÷?¿/\\+=@#$%^&*{}|~<>;:[\]]{1,200}$/;

  //  Setting up general form states
  const [step, setStep] = useState(0);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // Setting up input specific form states
  const [travelDate, setTravelDate] = useState("");
  const [validTravelDate, setValidTravelDate] = useState();
  const [travelDateClass, setTravelDateClass] = useState("");

  const [duration, setDuration] = useState("");
  const [validDuration, setValidDuration] = useState();
  const [durationClass, setDurationClass] = useState("");

  const [location, setLocation] = useState("");
  const [validLocation, setValidLocation] = useState();
  const [locationClass, setLocationClass] = useState("");

  const [companions, setCompanions] = useState([]);

  // Stores all the booking information
  const bookingData = {
    travel_date: travelDate,
    duration: duration,
    starting_location: location,
    package_id: chosenPackage.id,
    companions: companions,
  };

  // Validate user input before sending data to the server
  const onClickSubmit = (event) => {
    event.preventDefault();
    setIsSubmitClicked(true);
    setErrMsg("");
    if (!validTravelDate || !validDuration || !validLocation) {
      !validTravelDate
        ? setTravelDateClass("isInvalid")
        : setTravelDateClass("");
      !validDuration ? setDurationClass("isInvalid") : setDurationClass("");
      !validLocation ? setLocationClass("isInvalid") : setNumberClass("");
    } else if (companions) {
      // Validate companion fields

      const isCompanionsValid = companions.every((comp) => {
        return comp.firstname && comp.lastname && comp.age;
      });

      if (!isCompanionsValid) {
        setErrMsg("Companion fields cannot be empty.");
        return;
      }
      setErrMsg("Submitting...");
      submitToServer();
    } else {
      setErrMsg("Submitting...");
      submitToServer();
    }
  };

  const submitToServer = async () => {
    console.log(bookingData);
    console.log("Submitted to server");
    const bookingModalInst = document.getElementById("bookingModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(bookingModalInst);
    myModal.hide();

    resetForm();
  };

  // Resets the booking form when the user switched to another package
  useEffect(() => {
    resetForm();
  }, [chosenPackage]);

  // Function for resetting form
  const resetForm = () => {
    setStep(0);
    setTravelDate("");
    setTravelDateClass("");
    setDuration("");
    setDurationClass("");
    setLocation("");
    setLocationClass("");
    setCompanions([]);
    setIsSubmitClicked(false);
    setErrMsg("");
  };

  // Validates the user input
  useEffect(() => {
    const result = travelDate ? true : false;
    setValidTravelDate(result);
    if (!result && isSubmitClicked) {
      setTravelDateClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setTravelDateClass("isValid");
    }
  }, [travelDate]);

  useEffect(() => {
    const result = DURATION_REGEX.test(duration) && duration >= 0;
    setValidDuration(result);
    if (!result && isSubmitClicked) {
      setDurationClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setDurationClass("isValid");
    }
  }, [duration]);

  useEffect(() => {
    const result = LOCATION_REGEX.test(location);
    setValidLocation(result);
    if (!result && isSubmitClicked) {
      setLocationClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setLocationClass("isValid");
    }
  }, [location]);

  // Handle next and previous buttons
  const onClickBtnRight = () => {
    setTimeout(() => {
      setStep(1);
    }, 100);
  };

  const onClickBtnLeft = () => {
    setTimeout(() => {
      setStep(0);
      setIsNextClicked(false);
      setIsSubmitClicked(false);
    }, 100);
  };

  // Conditional rendering of components based on the current step value
  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return (
          <BookingFormPackage
            chosenPackage={chosenPackage}
            currentTheme={currentTheme}
          />
        );
      case 1:
        return (
          <BookingFormTravel
            currentTheme={currentTheme}
            travelDate={travelDate}
            setTravelDate={setTravelDate}
            travelDateClass={travelDateClass}
            duration={duration}
            setDuration={setDuration}
            durationClass={durationClass}
            location={location}
            setLocation={setLocation}
            locationClass={locationClass}
            companions={companions}
            setCompanions={setCompanions}
          />
        );
      default:
    }
  };

  // Parameters used for the FormUI component
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
            errMsg={errMsg}
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
