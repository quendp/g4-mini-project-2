import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

// * Component called by CategoriesCard.jsx
const CategoriesCardUI = ({
  isPackageClicked,
  packageData,
  onClickCard,
  currentCategory,
  packageType,
  chosenPackageHandler,
}) => {
  const { accessData } = useAuth();

  const onClickBookHandler = () => {
    if (!accessData.token) {
      const signUpModalInst = document.getElementById("signUpModal");
      const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
      myModal.show();
    } else {
      const bookingModalInst = document.getElementById("bookingModal");
      const myModal = bootstrap.Modal.getOrCreateInstance(bookingModalInst);
      myModal.show();
    }
    chosenPackageHandler(packageData);
  };

  let btnText = "";
  if (accessData.role > 1) {
    btnText = "For users only";
  } else if (packageData) {
    btnText = "Book this tour";
  } else {
    btnText = "Unavailable";
  }
  return (
    <div className="categories-page__card m-3 mb-4 p-3 p-md-4 py-0 py-md-0 w-100 position-relative d-flex flex-column justify-content-start align-items-center">
      <div
        className="position-absolute categories-page-card__background top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: currentCategory.accentLight,
          boxShadow: ` 3px 3px 10px 2px var(--clr-primary-glass), 0 0 15px 5px ${currentCategory.accent}`,
        }}
      ></div>
      <div className="categories-page-card__content">
        <h4 className="p-0 py-4 lh-1 m-0 text-uppercase" onClick={onClickCard}>
          {packageType}
        </h4>
        <div
          className={`categories-page-card__details flex-column justify-content-center align-items-start w-100 p-3 p-lg-5 mb-4 ${
            !isPackageClicked ? "d-none" : "d-flex"
          }`}
        >
          <p className="text-start m-0 my-2">
            <span className="me-2">Destination : </span>
            {!packageData ? "Unavailable" : packageData.destination}
          </p>
          <p className="text-start m-0 my-2">
            <span className="me-2">Transportation : </span>
            {!packageData ? "Unavailable" : packageData.transportation}
          </p>
          <p className="text-start m-0 my-2">
            <span className="me-2">Flight Class : </span>
            {!packageData ? "Unavailable" : packageData.flight_class}
          </p>
          <p className="text-start m-0 my-2">
            <span className="me-2">Accommodation : </span>
            {!packageData ? "Unavailable" : packageData.accommodation}
          </p>
          <p className="text-start m-0 my-2">
            <span className="me-2">Activities : </span>
            {!packageData ? "Unavailable" : packageData.activities}
          </p>
          <p className="text-start m-0 my-2">
            <span className="me-2">Starting Price : </span>
            {!packageData
              ? "Unavailable"
              : `Php ${packageData.starting_price.toLocaleString()}.00`}
          </p>
          <div className="categories-page-card__button w-100 pt-5 d-flex justify-content-end">
            <button
              className={`px-4 px-xl-5 py-2 text-uppercase ${
                !packageData || accessData.role > 1 ? "disabled opacity-50" : ""
              }`}
              onClick={onClickBookHandler}
              style={{ backgroundColor: currentCategory.accentLight }}
              disabled={!packageData || accessData.role > 1 ? true : false}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCardUI;
