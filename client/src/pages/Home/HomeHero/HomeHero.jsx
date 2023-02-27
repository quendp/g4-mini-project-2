import React, { useEffect, useRef, useState } from "react";
import "./HomeHero.css";
import { categoriesInfo } from "../../../Data/CategoriesMockData";
import HomeHeroText from "./HomeHeroCateg/HomeHeroText";
import HomeHeroMenu from "./HomeHeroCateg/HomeHeroMenu";
import HomeHeroWheel from "./HomeHeroWheel/HomeHeroWheel";

const HomeHero = ({ categoryIndex, onChangeCategory }) => {
  const [videoOpacity, setVideoOpacity] = useState("100");
  const videoRef = useRef();

  useEffect(() => {
    setVideoOpacity("0");
    setTimeout(() => {
      videoRef.current?.load();
      setVideoOpacity("100");
    }, 1000);
  }, [categoryIndex]);

  return (
    <section className="m-hero-section m-0 vh-100 justify-content-center">
      <video
        className={`m-hero-bg m-0 p-0 position-fixed top-0 start-0 vh-100 w-100 opacity-${videoOpacity}`}
        id="mHeroBg"
        poster={categoriesInfo[categoryIndex].poster}
        muted
        loop
        autoPlay
        ref={videoRef}
      >
        <source src={categoriesInfo[categoryIndex].videoBg} />
      </video>
      <div className="row h-100 p-0 m-0">
        <div className="row h-100 p-0 m-0">
          <div className="col-md-6 col-12 py-0 pt-md-4 px-3 px-md-5 m-0">
            <HomeHeroText categoryIndex={categoryIndex} />
            <HomeHeroMenu
              categoryIndex={categoryIndex}
              onChangeCategory={onChangeCategory}
            />
          </div>
          <div className="d-none col-md-6 col-12 d-md-flex justify-content-center align-items-center position-relative">
            <HomeHeroWheel categoryIndex={categoryIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
