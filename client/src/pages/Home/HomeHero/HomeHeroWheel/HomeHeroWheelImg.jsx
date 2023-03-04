import React from "react";
import { Link } from "react-router-dom";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";

const HomeHeroWheelImg = ({
  categoryIndex,
  destination,
  subCircleRotation,
  currentDestination,
  hoverImageHandler,
  hoverOutImageHandler,
}) => {
  let calculatedId;

  if (destination.id % 6 == 0) {
    calculatedId = 6;
  } else {
    calculatedId = destination.id % 6;
  }

  const mappedDestination =
    categoriesInfo[categoryIndex].destinations[calculatedId - 1];

  const activeDestination =
    categoriesInfo[categoryIndex].destinations[currentDestination];

  return (
    <div
      className="m-hero-circle-sub position-absolute rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
      id={`circleImage${calculatedId}Sub`}
      style={{
        transform: `translate(-50%, -50%) rotate(${subCircleRotation}deg) scale(${
          activeDestination == mappedDestination ? "1" : "0.8"
        })`,
        boxShadow: `1px 1px 30px var(--clr-primary-glass), 0 0 150px -50px ${
          activeDestination == mappedDestination
            ? categoriesInfo[categoryIndex].accentLight
            : "var(--clr-primary-dark)"
        }`,
      }}
      onMouseEnter={hoverImageHandler}
      onMouseLeave={hoverOutImageHandler}
    >
      <img
        className="m-hero-circle-image"
        src={mappedDestination.destinationImage}
        alt="Star City Amusement Park in Pasay"
      />
      <div className="m-hero-circle-overlay position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
        <Link
          to={`/categories/${categoriesInfo[categoryIndex].categoryPath}/${activeDestination.path}`}
        >
          <button
            className="px-4 py-3 m-0 cta-dark rounded-pill"
            style={{ color: categoriesInfo[categoryIndex].accentLight }}
          >
            <i
              style={{ color: categoriesInfo[categoryIndex].accentLight }}
              className="fa-solid fa-location-dot text-decoration-none me-2"
            ></i>
            Book this tour
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeroWheelImg;
