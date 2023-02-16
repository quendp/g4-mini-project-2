import React from "react";
import "./HomeHero.css";
import { categoriesInfo } from "../../../Data/CategoriesMockData";

const HomeHero = () => {
  return (
    <section
      className="m-hero-section m-0 vh-100 justify-content-center"
      id="mHeroSection"
    >
      <video
        className="m-hero-bg m-0 p-0 position-fixed top-0 start-0 vh-100 w-100"
        id="mHeroBg"
        poster={categoriesInfo[0].poster}
        muted
        loop
        autoPlay
      >
        <source src={categoriesInfo[0].videoBg} />
      </video>
      <div className="row h-100 p-0 m-0">
        <div className="row h-100 p-0 m-0">
          <div className="col-md-6 col-12 py-0 pt-md-4 px-3 px-md-5 m-0">
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
                    A trip to Star City Amusement Park, Manila Ocean Park,
                    Chinatown, and Solaire Resort and Casino in Manila, and Mall
                    of Asia and Cultural Center of the Philippines in Pasay.{" "}
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
            <div className="row h-25 p-0 m-0 justify-content-center">
              <div className="col-12 py-0 px-0 px-md-5 m-0 d-flex flex-column align-items-center">
                <div className="row p-0 m-0 h-75 d-flex justify-content-between">
                  <div className="col-2 d-flex align-items-end px-0 py-3">
                    <div
                      className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-1"
                      id="mHeroThumb1"
                    >
                      <img
                        src={categoriesInfo[0].thumbnail}
                        alt="city lights thumbnail"
                        width="100%"
                        height="auto"
                      />
                    </div>
                  </div>
                  <div className="col-2 d-flex align-items-end px-0 py-3">
                    <div
                      className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-2"
                      id="mHeroThumb2"
                    >
                      <img
                        src={categoriesInfo[1].thumbnail}
                        alt="dive underwater thumbnail"
                        width="100%"
                        height="auto"
                      />
                    </div>
                  </div>
                  <div className="col-2 d-flex align-items-end px-0 py-3">
                    <div
                      className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-3"
                      id="mHeroThumb3"
                    >
                      <img
                        src={categoriesInfo[2].thumbnail}
                        alt="mountains thumbnail"
                        width="100%"
                        height="auto"
                      />
                    </div>
                  </div>
                  <div className="col-2 d-flex align-items-end px-0 py-3">
                    <div
                      className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-4"
                      id="mHeroThumb4"
                    >
                      <img
                        src={categoriesInfo[3].thumbnail}
                        alt="history thumbnail"
                        width="100%"
                        height="auto"
                      />
                    </div>
                  </div>
                  <div className="col-2 d-flex align-items-end px-0 py-3">
                    <div
                      className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-5"
                      id="mHeroThumb5"
                    >
                      <img
                        src={categoriesInfo[4].thumbnail}
                        alt="nature thumbnail"
                        width="100%"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="row h-25 p-0 m-0 text-uppercase lh-1 d-flex justify-content-center align-items-start">
                  <div className="overflow-hidden h-75 d-flex justify-content-center align-items-center">
                    <span id="mThumbDesc">Cosmopolitan Lights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-none col-md-6 col-12 d-md-flex justify-content-center align-items-center position-relative"
            id="mHeroRight"
          >
            <div className="m-hero-circle-sub m-continue-rotation rounded-circle position-absolute top-100 start-100 d-flex justify-content-center align-items-center">
              <div className="position-relative h-100 w-100 rounded-circle">
                <div
                  className="class-position-absolute h-100 w-100"
                  id="mContinueRotationTop"
                >
                  <div className="mContText1 position-absolute h-100 top-0 start-50 pt-4">
                    <span>C</span>
                  </div>
                  <div className="mContText2 position-absolute h-100 top-0 start-50 pt-4">
                    <span>L</span>
                  </div>
                  <div className="mContText3 position-absolute h-100 top-0 start-50 pt-4">
                    <span>I</span>
                  </div>
                  <div className="mContText4 position-absolute h-100 top-0 start-50 pt-4">
                    <span>C</span>
                  </div>
                  <div className="mContText5 position-absolute h-100 top-0 start-50 pt-4">
                    <span>K </span>
                  </div>
                  <div className="mContText6 position-absolute h-100 top-0 start-50 pt-4">
                    <span> </span>
                  </div>
                  <div className="mContText7 position-absolute h-100 top-0 start-50 pt-4">
                    <span>I</span>
                  </div>
                  <div className="mContText8 position-absolute h-100 top-0 start-50 pt-4">
                    <span>M</span>
                  </div>
                  <div className="mContText9 position-absolute h-100 top-0 start-50 pt-4">
                    <span>A</span>
                  </div>
                  <div className="mContText10 position-absolute h-100 top-0 start-50 pt-4">
                    <span>G</span>
                  </div>
                  <div className="mContText11 position-absolute h-100 top-0 start-50 pt-4">
                    <span>E</span>
                  </div>
                </div>
                <div
                  className="class-position-absolute h-100 w-100"
                  id="mContinueRotation"
                >
                  <div className="mContText1 position-absolute h-100 top-0 start-50 pt-4">
                    <span>A</span>
                  </div>
                  <div className="mContText2 position-absolute h-100 top-0 start-50 pt-4">
                    <span>U</span>
                  </div>
                  <div className="mContText3 position-absolute h-100 top-0 start-50 pt-4">
                    <span>T</span>
                  </div>
                  <div className="mContText4 position-absolute h-100 top-0 start-50 pt-4">
                    <span>O</span>
                  </div>
                  <div className="mContText5 position-absolute h-100 top-0 start-50 pt-4">
                    <span>-</span>
                  </div>
                  <div className="mContText6 position-absolute h-100 top-0 start-50 pt-4">
                    <span>R</span>
                  </div>
                  <div className="mContText7 position-absolute h-100 top-0 start-50 pt-4">
                    <span>O</span>
                  </div>
                  <div className="mContText8 position-absolute h-100 top-0 start-50 pt-4">
                    <span>T</span>
                  </div>
                  <div className="mContText9 position-absolute h-100 top-0 start-50 pt-4">
                    <span>A</span>
                  </div>
                  <div className="mContText10 position-absolute h-100 top-0 start-50 pt-4">
                    <span>T</span>
                  </div>
                  <div className="mContText11 position-absolute h-100 top-0 start-50 pt-4">
                    <span>E</span>
                  </div>
                </div>
              </div>
            </div>
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
                    src="./sources/images/cosmopolitan-lights/star-city.webp"
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
                    src="./sources/images/cosmopolitan-lights/chinatown.jpg"
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
                    src="./sources/images/cosmopolitan-lights/mall-of-asia.jpg"
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
                    src="./sources/images/cosmopolitan-lights/manila-ocean-park.jpg"
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
                    src="./sources/images/cosmopolitan-lights/solaire.jpg"
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
                    src="./sources/images/cosmopolitan-lights/ccp.webp"
                    alt="Cultural Center of the Philippines in Pasay City"
                  />
                </div>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 h-100"
              id="mCircleNext"
            ></div>
            <div
              className="position-absolute bottom-0 end-0 w-100"
              id="mCirclePrev"
            ></div>
            <div className="m-circle-text position-absolute text-center ">
              <p className="py-3 px-3 rounded-pill" id="mCircleText"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
