import React, { useEffect, useRef, useState } from "react";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";
import HomeHeroWheelImg from "./HomeHeroWheelImg";
import { animationDelay } from "../../../../Utils/AnimationDelay";

const HomeHeroWheel = ({ categoryIndex }) => {
  const [heroRightTransform, setHeroRightTransform] = useState("100%, 100%");
  const [heroRightOpacity, setHeroRightOpacity] = useState("0");

  const prevCategory = useRef(categoryIndex);

  const [indexHolder, setIndexHolder] = useState(prevCategory.current);

  useEffect(() => {
    (async () => {
      prevCategory.current = categoryIndex;
      setHeroRightTransform("0%, 0%");
      setHeroRightOpacity("0");
      await animationDelay(1000);
      setIndexHolder(prevCategory.current);
      setHeroRightTransform("-50% , -50%");
      setHeroRightOpacity("1");
    })();
  }, [categoryIndex]);

  const heroRightStyle = {
    transform: `translate(${heroRightTransform}) rotate(15deg)`,
    opacity: heroRightOpacity,
  };

  return (
    <div
      className="row m-hero-circle rounded-circle position-absolute d-flex justify-content-center align-items-center"
      style={heroRightStyle}
    >
      <div className="position-relative rounded-circle d-flex justify-content-center align-items-center w-100 h-100">
        {categoriesInfo[indexHolder].destinations.map((destination) => {
          return (
            <HomeHeroWheelImg
              destination={destination}
              key={destination.id}
              categoryIndex={indexHolder}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeHeroWheel;
