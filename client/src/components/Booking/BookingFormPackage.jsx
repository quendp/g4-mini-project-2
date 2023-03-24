import React from "react";

const BookingFormPackage = ({ chosenPackage, currentTheme }) => {
  const packageDetails = {
    color: currentTheme,
  };
  return (
    <div
      className="booking-form-details__container p-3 p-sm-4"
      style={{ boxShadow: `0 0 2px ${currentTheme}` }}
    >
      <div>
        <p className="text-start p-2 m-0 my-2">
          <span style={packageDetails} className="me-2">
            Destination :{" "}
          </span>
          {!chosenPackage ? "Unavailable" : chosenPackage.destination}
        </p>
        <p className="text-start p-2 m-0 my-2">
          <span style={packageDetails} className="me-2">
            Transportation :{" "}
          </span>
          {!chosenPackage ? "Unavailable" : chosenPackage.transportation}
        </p>
        <p className="text-start p-2 m-0 my-2">
          <span style={packageDetails} className="me-2">
            Flight Class :{" "}
          </span>
          {!chosenPackage ? "Unavailable" : chosenPackage.flight_class}
        </p>
        <p className="text-start p-2 m-0 my-2">
          <span style={packageDetails} className="me-2">
            Accommodation :{" "}
          </span>
          {!chosenPackage ? "Unavailable" : chosenPackage.accommodation}
        </p>
        <p className="text-start p-2 m-0 my-2">
          <span style={packageDetails} className="me-2">
            Activities :{" "}
          </span>
          {!chosenPackage ? "Unavailable" : chosenPackage.activities}
        </p>
        <p className="text-start p-2 m-0 my-2">
          <span style={packageDetails} className="me-2">
            Starting Price :{" "}
          </span>
          {!chosenPackage
            ? "Unavailable"
            : `Php ${chosenPackage.starting_price}.00`}
        </p>
      </div>
    </div>
  );
};

export default BookingFormPackage;
