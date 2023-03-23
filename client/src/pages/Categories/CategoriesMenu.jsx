import React from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// * Component called by Categories.jsx
const CategoriesMenu = ({ currentCategory }) => {
  const [menuRef, menuInView] = useInView({ threshold: 0.1 });

  return (
    <div className="categories-page-menu__container container-fluid position-absolute d-flex flex-row flex-md-column justify-content-center align-items-center p-3">
      <div
        className="d-flex p-0 m-0 flex-row flex-md-column justify-content-center align-items-center"
        ref={menuRef}
        style={{
          opacity: menuInView ? "1" : "0",
          transform: menuInView ? "translateX(0)" : "translateX(-5rem)",
          transition:
            "opacity 400ms ease-in-out 200ms, transform 400ms ease-in-out 200ms",
        }}
      >
        {currentCategory.destinations.map((destination) => {
          return (
            <NavLink
              to={`/categories/${currentCategory.categoryPath}/${destination.path}`}
              className="categories-page-menu__item m-1 m-sm-2 m-md-3 mb-3 p-0 d-flex flex-row justify-content-center align-items-center position-relative"
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
              <span className="position-absolute p-2 start-0 text-center">
                {destination.destination}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesMenu;
