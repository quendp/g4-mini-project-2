import React, { useCallback, useEffect, useRef, useState } from "react";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";
import HomeHeroWheelImg from "./HomeHeroWheelImg";
import { animationDelay } from "../../../../Utils/AnimationDelay";
import { Link } from "react-router-dom";

const HomeHeroWheel = ({ categoryIndex }) => {
  const [heroRightTransform, setHeroRightTransform] = useState("100%, 100%");
  const [heroRightOpacity, setHeroRightOpacity] = useState("0");
  const [mainCircleRotation, setMainCircleRotation] = useState(15);
  const [subCircleRotation, setSubCircleRotation] = useState(0);
  const [currentDestination, setCurrentDestination] = useState(0);
  const [destinationOpacity, setDestinationOpacity] = useState("0");
  const [isImageHovered, setIsImageHovered] = useState(false);

  const prevCategory = useRef(categoryIndex);

  const [indexHolder, setIndexHolder] = useState(prevCategory.current);

  useEffect(() => {
    (async () => {
      prevCategory.current = categoryIndex;
      setHeroRightTransform("0%, 0%");
      setHeroRightOpacity("0");
      setDestinationOpacity("0");
      await animationDelay(1000);
      setIndexHolder(prevCategory.current);
      setHeroRightTransform("-50% , -50%");
      setHeroRightOpacity("1");
      setDestinationOpacity("1");
    })();
  }, [categoryIndex]);

  const heroRightStyle = {
    transform: `translate(${heroRightTransform}) rotate(${mainCircleRotation}deg)`,
    opacity: heroRightOpacity,
  };

  const rotationHandler = useCallback(() => {
    if (document.hidden) return;
    setMainCircleRotation((oldTimer) => oldTimer - 60);
    setSubCircleRotation((oldTimer) => oldTimer + 60);
    setCurrentDestination((prevDestination) =>
      prevDestination == 5 ? 0 : prevDestination + 1
    );
  }, []);

  useEffect(() => {
    const timeoutFunction = setInterval(rotationHandler, 5000);
    if (isImageHovered) {
      clearInterval(timeoutFunction);
    }
    return () => clearInterval(timeoutFunction);
  }, [rotationHandler, mainCircleRotation, indexHolder, isImageHovered]);

  const hoverImageHandler = () => {
    setIsImageHovered(true);
  };

  const hoverOutImageHandler = () => {
    setIsImageHovered(false);
  };

  const prevImageHandler = () => {
    setMainCircleRotation((oldTimer) => oldTimer - 60);
    setSubCircleRotation((oldTimer) => oldTimer + 60);
    setCurrentDestination((prevDestination) =>
      prevDestination == 5 ? 0 : prevDestination + 1
    );
  };

  const nextImageHandler = () => {
    setMainCircleRotation((oldTimer) => oldTimer + 60);
    setSubCircleRotation((oldTimer) => oldTimer - 60);
    setCurrentDestination((prevDestination) =>
      prevDestination == 0 ? 5 : prevDestination - 1
    );
  };

  return (
    <>
      <div
        className="row m-hero-circle rounded-circle position-absolute d-flex justify-content-center align-items-center"
        style={heroRightStyle}
      >
        <div className="position-relative rounded-circle d-flex justify-content-center align-items-center w-100 h-100">
          {categoriesInfo[indexHolder].destinations.map((destination) => {
            return (
              <HomeHeroWheelImg
                currentDestination={currentDestination}
                destination={destination}
                key={destination.id}
                categoryIndex={indexHolder}
                subCircleRotation={subCircleRotation}
                hoverImageHandler={hoverImageHandler}
                hoverOutImageHandler={hoverOutImageHandler}
              />
            );
          })}
        </div>
      </div>
      <div
        className="m-circle-text text-uppercase position-absolute d-flex justify-content-center align-items-center text-center p-3"
        style={{
          color: categoriesInfo[indexHolder].accentLight,
          textShadow: `0 0 15px ${categoriesInfo[indexHolder].accentLight}`,
          opacity: destinationOpacity,
        }}
        onMouseEnter={hoverImageHandler}
        onMouseLeave={hoverOutImageHandler}
      >
        <i
          className="fa-solid fa-chevron-left"
          style={{
            transform: "translateX(-100%)",
            fontSize: "var(--fz-main-h3)",
          }}
          onClick={prevImageHandler}
        ></i>
        <Link
          to={`/categories/${categoriesInfo[indexHolder].categoryPath}/${categoriesInfo[indexHolder].destinations[currentDestination].path}`}
          className="p-0 m-0 text-decoration-none"
          style={{
            color: categoriesInfo[indexHolder].accentLight,
            textShadow: `0 0 15px ${categoriesInfo[indexHolder].accentLight}`,
          }}
        >
          {
            categoriesInfo[indexHolder].destinations[currentDestination]
              .destination
          }
        </Link>
        <i
          className="fa-solid fa-chevron-right"
          style={{
            transform: "translateX(100%)",
            fontSize: "var(--fz-main-h3)",
          }}
          onClick={nextImageHandler}
        ></i>
      </div>
    </>
  );
};

export default HomeHeroWheel;
