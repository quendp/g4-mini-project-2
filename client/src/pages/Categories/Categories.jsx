import React, { useEffect, useRef, useState } from "react";
import "./Categories.css";
import { categoriesInfo } from "../../Data/CategoriesMockData";
import { useOutletContext, useParams } from "react-router-dom";

const Categories = () => {
  const changeThemeHandler = useOutletContext();
  const { category, destination } = useParams();

  const chosenCategory = useRef(categoriesInfo[0]);
  const chosenDestination = useRef(chosenCategory.current.destinations[0]);

  const [currentCategory, setCurrentCategory] = useState(
    chosenCategory.current
  );
  const [currentDestination, setCurrentDestination] = useState(
    chosenDestination.current
  );

  useEffect(() => {
    if (!category) {
      chosenCategory.current = categoriesInfo[0];
    } else {
      chosenCategory.current = categoriesInfo.find(
        (cat) => cat.categoryPath === category
      );
    }
    if (!destination) {
      chosenDestination.current = chosenCategory.current.destinations[0];
    } else {
      chosenDestination.current = chosenCategory.current.destinations.find(
        (dest) => dest.path === destination
      );
    }
    changeThemeHandler(chosenCategory.current.accentLight);
  }, [category, destination]);

  useEffect(() => {
    setCurrentCategory(chosenCategory.current);
    setCurrentDestination(chosenDestination.current);
  }, [chosenCategory.current, chosenDestination.current]);

  return (
    <main
      className="categories-page__wrapper container-fluid vh-100 vw-100 overflow-hidden m-0 position-relative debug-all"
      style={{
        backgroundImage: `url(${currentDestination.destinationImage})`,
      }}
    >
      <div
        className="categories-page__overlay position-absolute w-100 h-100 top-0 start-0"
        style={{
          backgroundColor: "transparent",
          background: `linear-gradient(90deg, var(--clr-primary-dark) 0%, rgba(0, 0, 0, 0.5) 100%)`,
        }}
      ></div>
      <div className="categories-page__content position-absolute">
        <section className="categories-page__title row m-0 p-5">
          <div className="col-12 m-0 p-0">
            <h3
              className="categories-page-title__category lh-1 mx-0 mb-0 text-center text-md-start"
              style={{
                color: currentCategory.accentLight,
                textShadow: `2px 2px 5px rgba(0,0,0,0.6), 0 0 25px ${currentCategory.accent} `,
              }}
            >
              {currentCategory.category}
            </h3>
            <h1 className="categories-page-title__destination lh-1 my-0 text-center text-md-start">
              {currentDestination.destination}
            </h1>
          </div>
        </section>
        <section className="categories-page__details row m-0 p-5">
          <div className="col-12 col-md-6"></div>
        </section>
      </div>
    </main>
  );
};

export default Categories;
