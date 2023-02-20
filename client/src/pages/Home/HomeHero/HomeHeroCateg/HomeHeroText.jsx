import React from "react";

const HomeHeroText = () => {
  return (
    <div
      className="h-75 py-0 px-3 px-md-0 px-xl-5 m-0 d-flex flex-column justify-content-center align-items-center"
      id="mHeroLeft"
    >
      <div className="w-100 d-flex flex-column justify-content-center align-items-center align-items-md-start p-0 mx-0 mt-0 mb-5">
        <h1
          className="lh-1 my-0 text-center text-md-start text-nowrap"
          id="mHeroCategoryTitle"
        >
          Visit the Lively <br /> and Colorful Cities{" "}
        </h1>
        <h2
          className="lh-1 mx-0 mb-0 text-center text-md-start text-nowrap"
          id="mHeroCategory"
        >
          Cosmopolitan Lights
        </h2>
      </div>
      <div className="w-100 d-flex flex-column justify-content-start align-items-start align-items-md-start p-0 m-0">
        <div className="p-0 px-sm-5 px-md-0 pe-lg-5 m-0 d-flex flex-column align-items-center align-items-md-start justify-content-center">
          <p
            className="w-100 mx-0 mt-0 mb-4 p-0 px-sm-5 px-md-0 pe-lg-5 text-center text-md-start"
            id="mHeroDescription"
          >
            A trip to Star City Amusement Park, Manila Ocean Park, Chinatown,
            and Solaire Resort and Casino in Manila, and Mall of Asia and
            Cultural Center of the Philippines in Pasay.{" "}
          </p>
          <button className="btn p-0 m-0">
            <a
              href="./pages/categories/cosmopolitan-lights/cosmopolitan-lights.html"
              className="btn rounded-pill px-4 py-2 text-uppercase"
              id="mHeroButton"
            >
              discover more
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;
