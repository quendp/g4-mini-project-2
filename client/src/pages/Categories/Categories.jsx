import React from "react";
import styles from "./Categories.module.css";
import { categoriesInfo } from "../../Data/CategoriesMockData";

const Categories = () => {
  const categoryItem = categoriesInfo.find((item) => item.categoryId === 1);
  const destination = categoryItem.destinations;

  return (
    <main className="container-fluid vh-100 m-0 p-0">
      <section
        className={`${styles.catHeroSection} m-0 vh-100`}
        id="mHeroSection"
      >
        <video
          className={`${styles.catHeroBg} m-0 p-0 position-fixed top-0 start-0 vh-100 w-100`}
          id="mHeroBg"
          poster={categoryItem.poster}
          muted
          loop
          autoPlay
        >
          <source src={categoryItem.videoBg} />
        </video>
        <div className="container-fluid h-100 m-0 p-0 d-flex flex-column justify-content-evenly align-items-center">
          <div className="row m-0 p-0 justify-content-center align-items-center">
            <h1
              className={`${styles.catHeroTitle} text-center`}
              id={`${styles.catHeroTitle}`}
            >
              {categoryItem.category}
            </h1>
          </div>
          <div className="row m-0 p-0 justify-content-center">
            <div className="col-10 col-xl-7 m-0 p-0 h-100 position-relative overflow-hidden">
              <div
                className="row m-0 p-0 justify-content-center h-100"
                id={`${styles.catHeroImageWrapper}`}
              >
                {destination.map((destinationItem) => (
                  <div
                    key={destinationItem.id}
                    className={`${styles.catImageHolder} col-6 col-sm-4 p-2 p-md-3 m-0`}
                  >
                    <img
                      src={destinationItem.destinationImage}
                      alt="Star City Amusement Park"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row m-0 p-0 justify-content-center align-items-center">
            <p
              className="text-uppercase text-center"
              id={`${styles.catHeroChosen}`}
            >
              CHOOSE A MAIN DESTINATION
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Categories;
