import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";
import axios from "../../Utils/axios";
import FormModal from "../FormUI/FormModal";
import "./BookingForm.css";
import BookingFormPackage from "./BookingFormPackage";
import BookingFormTravel from "./BookingFormTravel";
import regEx from "../../Utils/regEx";

const BookingForm = ({ children, chosenPackage }) => {
  const { currentTheme } = useTheme();
  const { accessData } = useAuth();
  const BOOKING_URL = "/api/bookings/addBooking";

  //  Setting up general form states
  const [step, setStep] = useState(0);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

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
    username: accessData.username,
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
      !validLocation ? setLocationClass("isInvalid") : setLocationClass("");
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

  // Submit the booking data to the server
  const submitToServer = async () => {
    try {
      const response = await axios.post(
        BOOKING_URL,
        JSON.stringify(bookingData),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessData.token}`,
          },
          withCredentials: true,
        }
      );
      if (response.data.message) {
        setErrMsg(response.data.message);
      } else {
        setErrMsg("");
        setIsSuccessful(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Resets the booking form when the user switched to another package
  useEffect(() => {
    const bookingModal = document.getElementById("bookingModal");
    bookingModal.addEventListener("hidden.bs.modal", () => {
      setIsSuccessful(false);
    });
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
    const result = regEx.AGE_REGEX.test(duration) && duration >= 0;
    setValidDuration(result);
    if (!result && isSubmitClicked) {
      setDurationClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setDurationClass("isValid");
    }
  }, [duration]);

  useEffect(() => {
    const result = regEx.ADDRESS_REGEX.test(location);
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
      setIsSubmitClicked(false);
    }, 100);
  };

  // Handle press OK after successful submission
  const onClickOk = (e) => {
    e.preventDefault();
    const bookingModalInst = document.getElementById("bookingModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(bookingModalInst);
    myModal.hide();
    setTimeout(() => {
      setIsSuccessful(false);
      resetForm();
    }, 400);
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
        <div
          className={`booking-form__content modal-dialog ${
            isSuccessful ? "modal-md" : "modal-lg"
          } modal-dialog-centered`}
        >
          {!isSuccessful && (
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
          )}
          {isSuccessful && (
            <FormModal
              submitHandler={onClickOk}
              headerTitle={headerTitle}
              btnLeftClass={"d-none"}
              btnRightText={"ok"}
            >
              <div className="text-center">
                <p className="px-4">
                  Booking successful! You can view the updates on your request
                  through our dashboard.
                </p>
              </div>
            </FormModal>
          )}
        </div>
      </div>
      {children}
    </>
  );
};

export default BookingForm;
