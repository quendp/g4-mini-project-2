import React from "react";
import "./HomeHero.css";
import { categoriesInfo } from "../../../Data/CategoriesMockData";
import HomeHeroText from "./HomeHeroCateg/HomeHeroText";
import HomeHeroMenu from "./HomeHeroCateg/HomeHeroMenu";
import HomeHeroRotateBtn from "./HomeHeroWheel/HomeHeroRotateBtn";
import HomeHeroWheel from "./HomeHeroWheel/HomeHeroWheel";

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
            <HomeHeroText />
            <HomeHeroMenu />
          </div>
          <div
            className="d-none col-md-6 col-12 d-md-flex justify-content-center align-items-center position-relative"
            id="mHeroRight"
          >
            <HomeHeroRotateBtn />
            <HomeHeroWheel />

            {/* <div
              className="position-absolute top-0 end-0 h-100"
              id="mCircleNext"
            ></div>
            <div
              className="position-absolute bottom-0 end-0 w-100"
              id="mCirclePrev"
            ></div>
            <div className="m-circle-text position-absolute text-center ">
              <p className="py-3 px-3 rounded-pill" id="mCircleText"></p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;