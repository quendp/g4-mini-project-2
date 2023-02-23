import React from "react";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";

const HomeHeroWheelImg = ({ categoryIndex, destination }) => {
  return (
    <div
      className="m-hero-circle-sub position-absolute rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
      id={`circleImage${destination.id}Sub`}
      style={{}}
    >
      <img
        className="m-hero-circle-image"
        src={
          categoriesInfo[categoryIndex].destinations[destination.id - 1]
            .destinationImage
        }
        alt="Star City Amusement Park in Pasay"
      />
    </div>
  );
};

export default HomeHeroWheelImg;
