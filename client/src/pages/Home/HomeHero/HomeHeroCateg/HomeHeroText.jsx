import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";
import { animationDelay } from "../../../../Utils/AnimationDelay";

const HomeHeroText = ({ categoryIndex }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [heroLeftTransform, setHeroLeftTransform] = useState("-100%");
  const [heroLeftOpacity, setHeroLeftOpacity] = useState("0");

  const prevCategory = useRef(categoriesInfo[categoryIndex]);

  const [holdCategory, setHoldCategory] = useState(prevCategory.current);

  useEffect(() => {
    (async () => {
      prevCategory.current = categoriesInfo[categoryIndex];
      setHeroLeftTransform("-100%");
      setHeroLeftOpacity("0");
      await animationDelay(1000);
      setHoldCategory(prevCategory.current);
      setHeroLeftTransform("0");
      setHeroLeftOpacity("1");
    })();
  }, [categoryIndex]);

  const titleStyle = {
    color: holdCategory.accentLight,
    textShadow: `2px 2px 5px rgba(0,0,0,0.6), 0 0 25px ${holdCategory.accent} `,
  };

  const buttonStyle = {
    backgroundColor: !isButtonActive
      ? holdCategory.accentLight
      : holdCategory.accent,
    boxShadow: `0 0 20px ${
      !isButtonActive ? holdCategory.accentLight : holdCategory.accent
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

  return (
    <div
      className="home-hero-text h-75 py-0 px-3 px-md-0 px-xl-5 m-0 d-flex flex-column justify-content-center align-items-center"
      style={heroLeftStyle}
    >
      <div className="w-100 d-flex flex-column justify-content-center align-items-center align-items-md-start p-0 mx-0 mt-0 mb-4 ">
        <h1 className="lh-1 my-0 text-center text-md-start text-nowrap">
          {holdCategory.categoryTitle[0]} <br />
          {holdCategory.categoryTitle[1]}
        </h1>
        <h2
          className="lh-1 mx-0 mb-0 text-center text-md-start text-nowrap"
          style={titleStyle}
        >
          {holdCategory.category}
        </h2>
      </div>
      <div className="w-100 d-flex flex-column justify-content-start align-items-start align-items-md-start p-0 m-0">
        <div className="p-0 px-sm-5 px-md-0 pe-lg-5 m-0 d-flex flex-column align-items-center align-items-md-start justify-content-center">
          <p className="w-100 mx-0 mt-0 mb-4 p-0 px-sm-5 px-md-0 pe-lg-5 text-center text-md-start">
            {holdCategory.description}
          </p>
          <button className="btn p-0 m-0">
            <Link
              to={`/categories/${holdCategory.categoryPath}/${holdCategory.destinations[0].path}`}
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
