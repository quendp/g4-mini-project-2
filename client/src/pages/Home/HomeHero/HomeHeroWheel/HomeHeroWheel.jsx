import React from "react";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";

const HomeHeroWheel = () => {
  return (
    <div
      className="row mHeroCircle rounded-circle position-absolute d-flex justify-content-center align-items-center"
      id="mHeroCircle"
    >
      <div className="position-relative rounded-circle d-flex justify-content-center align-items-center w-100 h-100">
        <div
          className="m-hero-circle-sub position-absolute rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
          id="circleImage1Sub"
        >
          <img
            className="m-hero-circle-image"
            id="mCircleImage1"
            src={categoriesInfo[0].destinations[0].destinationImage}
            alt="Star City Amusement Park in Pasay"
          />
        </div>
        <div
          className="m-hero-circle-sub position-absolute rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
          id="circleImage2Sub"
        >
          <img
            className="m-hero-circle-image"
            id="mCircleImage2"
            src={categoriesInfo[0].destinations[1].destinationImage}
            alt="Chinatown in Binondo Manila"
          />
        </div>
        <div
          className="m-hero-circle-sub position-absolute rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
          id="circleImage3Sub"
        >
          <img
            className="m-hero-circle-image"
            id="mCircleImage3"
            src={categoriesInfo[0].destinations[2].destinationImage}
            alt="Mall of Asia in Pasay City"
          />
        </div>
        <div
          className="m-hero-circle-sub position-absolute rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
          id="circleImage4Sub"
        >
          <img
            className="m-hero-circle-image"
            id="mCircleImage4"
            src={categoriesInfo[0].destinations[3].destinationImage}
            alt="Manila Ocean Park"
          />
        </div>
        <div
          className="m-hero-circle-sub position-absolute rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
          id="circleImage5Sub"
        >
          <img
            className="m-hero-circle-image"
            id="mCircleImage5"
            src={categoriesInfo[0].destinations[4].destinationImage}
            alt="Solaire Resort & Casino Manila"
          />
        </div>
        <div
          className="m-hero-circle-sub position-absolute rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
          id="circleImage6Sub"
        >
          <img
            className="m-hero-circle-image"
            id="mCircleImage6"
            src={categoriesInfo[0].destinations[5].destinationImage}
            alt="Cultural Center of the Philippines in Pasay City"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroWheel;
