import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesMenu = ({ currentCategory, currentDestination }) => {
  return (
    <div className="categories-page-menu__container position-absolute d-flex flex-row flex-md-column justify-content-center align-items-center py-2 px-2">
      {currentCategory.destinations.map((destination) => {
        return (
          <NavLink
            to={`/categories/${currentCategory.categoryPath}/${destination.path}`}
            className="categories-page-menu__item m-2 mb-3 p-0 overflow-hidden d-flex flex-row justify-content-center align-items-center"
            key={destination.id}
            style={({ isActive }) => {
              let activeStyle = {
                border: `2px solid  ${currentCategory.accentLight}`,
              };
              if (isActive) {
                return activeStyle;
              }
            }}
          >
            <img
              src={destination.destinationImage}
              className="categories-page-menu__img w-100 h-100"
            />
          </NavLink>
        );
      })}
    </div>
  );
};

export default CategoriesMenu;
