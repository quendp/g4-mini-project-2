import React, { useState } from "react";
import styles from "./Categories.module.css";
import { categoriesInfo } from "../../Data/CategoriesMockData";

const Categories = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

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
                    type="button"
                    onClick={toggleModal}
                    key={destinationItem.id}
                    className={`${styles.catImageHolder} col-6 col-sm-4 p-2 p-md-3 m-0`}
                  >
                    <img
                      src={destinationItem.destinationImage}
                      alt={destinationItem.destination}
                    />
                    {modal && (
                      <div
                        onClick={toggleModal}
                        className={`${styles.modal} position-absolute top-0 start-0 h-100 w-100 p-3 p-md-4 p-lg-5`}
                        id={`${styles.catBookInfo}`}
                      >
                        <div
                          className={`${styles.overlay} d-flex h-100 w-100 flex-column justify-content-between align-items-start`}
                        >
                          <div
                            key={destinationItem.id}
                            className={`${styles.modalContent}`}
                          >
                            <p className="mb-1 mb-sm-3 mb-md-4">
                              DESTINATION :
                              <span
                                className="ms-2"
                                id={`${styles.catBookDestination}`}
                              >
                                {destinationItem.destination}
                              </span>
                            </p>
                            <p className="mb-1 mb-sm-3 mb-md-4">
                              TRIP DETAILS :
                              <span
                                className="ms-2"
                                id={`${styles.catBookDetails}`}
                              >
                                {destinationItem.details}
                              </span>
                            </p>
                            <p className="mb-1 mb-sm-3 mb-md-4">
                              DURATION :
                              <span
                                className="ms-2"
                                id={`${styles.catBookDuration}`}
                              >
                                {destinationItem.duration}
                              </span>
                            </p>
                            <p>
                              PRICE :
                              <span
                                className="ms-2"
                                id={`${styles.catBookPrice}`}
                              >
                                {destinationItem.price}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row m-0 p-0 justify-content-center align-items-center">
            <p
              className="text-uppercase text-center"
              id={`${styles.catHeroChosen}`}
              styles={categoryItem.accentLight}
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
