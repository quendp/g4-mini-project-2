import React, { useState } from "react";

const CategoriesDetails = ({ currentCategory, currentDestination }) => {
  return (
    <section className="categories-page__details row m-0 px-3 py-3 py-md-0 px-md-5 ">
      <div className="p-light col-12 col-md-6 p-3 m-0 text-center text-md-start">
        <p>{currentDestination.details}</p>
      </div>
      <div className="col-12 col-md-6 p-3 px-md-5 m-0 text-center">
        <h3 className="mb-5" style={{ color: currentCategory.accentLight }}>
          Choose a package :
        </h3>
        <div className="categories-page__card mb-4 p-3 p-md-4 position-relative d-flex justify-content-center align-items-center">
          <div
            className="position-absolute categories-page-card__background top-0 start-0 w-100 h-100"
            style={{ backgroundColor: currentCategory.accent }}
          ></div>
          <div className="categories-page-card__content">
            <h4 className="m-0 p-0 lh-1">Basic Package</h4>
          </div>
        </div>
        <div className="categories-page__card mb-4 p-3 p-md-4 position-relative d-flex justify-content-center align-items-center">
          <div
            className="position-absolute categories-page-card__background top-0 start-0 w-100 h-100"
            style={{ backgroundColor: currentCategory.accent }}
          ></div>
          <div className="categories-page-card__content">
            <h4 className="m-0 p-0 lh-1">Standard Package</h4>
          </div>
        </div>
        <div className="categories-page__card mb-4 p-3 p-md-4 position-relative d-flex justify-content-center align-items-center">
          <div
            className="position-absolute categories-page-card__background top-0 start-0 w-100 h-100"
            style={{ backgroundColor: currentCategory.accent }}
          ></div>
          <div className="categories-page-card__content">
            <h4 className="m-0 p-0 lh-1">Premium Package</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesDetails;
