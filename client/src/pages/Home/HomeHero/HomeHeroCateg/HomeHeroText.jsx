import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";

const HomeHeroText = ({ categoryIndex }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [heroLeftTransform, setHeroLeftTransform] = useState("-100%");
  const [heroLeftOpacity, setHeroLeftOpacity] = useState("0");

  const prevCategory = useRef(categoriesInfo[categoryIndex]);

  useEffect(() => {
    setHeroLeftTransform("-100%");
    setHeroLeftOpacity("0");
    setTimeout(() => {
      prevCategory.current = categoriesInfo[categoryIndex]; // bug on quick category change. try await animation funciton.
      setHeroLeftTransform("0");
      setHeroLeftOpacity("1");
    }, 1000);
  }, [categoryIndex]);

  const titleStyle = {
    color: prevCategory.current.accentLight,
    textShadow: `0 0 20px ${prevCategory.current.accentLight}`,
  };

  const buttonStyle = {
    backgroundColor: !isButtonActive
      ? prevCategory.current.accentLight
      : prevCategory.current.accent,
    boxShadow: `0 0 20px ${
      !isButtonActive
        ? prevCategory.current.accentLight
        : prevCategory.current.accent
    }`,
  };

  const heroLeftStyle = {
    transform: `translateX(${heroLeftTransform})`,
    opacity: heroLeftOpacity,
  };

  const hoverButton = () => {
    setIsButtonActive(true);
  };

  const hoverOutButton = () => {
    setIsButtonActive(false);
  };

  const urlPath = () => {
    switch (categoryIndex) {
      case 0:
        return "/category/cosmopolitan-lights";
      case 1:
        return "/category/dive-under-water";
      case 2:
        return "/category/explore-the-summit";
      case 3:
        return "/category/look-back-in-history";
      case 4:
        return "/category/nature-and-culture";
      default:
        return "/category";
    }
  };

  return (
    <div
      className="home-hero-text h-75 py-0 px-3 px-md-0 px-xl-5 m-0 d-flex flex-column justify-content-center align-items-center"
      style={heroLeftStyle}
    >
      <div className="w-100 d-flex flex-column justify-content-center align-items-center align-items-md-start p-0 mx-0 mt-0 mb-5">
        <h1 className="lh-1 my-0 text-center text-md-start text-nowrap">
          {prevCategory.current.categoryTitle[0]} <br />
          {prevCategory.current.categoryTitle[1]}
        </h1>
        <h2
          className="lh-1 mx-0 mb-0 text-center text-md-start text-nowrap"
          style={titleStyle}
        >
          {prevCategory.current.category}
        </h2>
      </div>
      <div className="w-100 d-flex flex-column justify-content-start align-items-start align-items-md-start p-0 m-0">
        <div className="p-0 px-sm-5 px-md-0 pe-lg-5 m-0 d-flex flex-column align-items-center align-items-md-start justify-content-center">
          <p className="w-100 mx-0 mt-0 mb-4 p-0 px-sm-5 px-md-0 pe-lg-5 text-center text-md-start">
            {prevCategory.current.description}
          </p>
          <button className="btn p-0 m-0">
            <Link
              to={urlPath()}
              className="btn rounded-pill px-4 py-2 text-uppercase"
              style={buttonStyle}
              onMouseOver={hoverButton}
              onMouseLeave={hoverOutButton}
            >
              discover more
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;
