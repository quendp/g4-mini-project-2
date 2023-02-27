import React, { useEffect, useState } from "react";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";
import { animationDelay } from "../../../../Utils/AnimationDelay";
import HomeHeroMenuItem from "./HomeHeroMenuItem";

const HomeHeroMenu = ({ categoryIndex, onChangeCategory }) => {
  const [currentCategory, setCurrentCategory] = useState(
    categoriesInfo[categoryIndex]
  );

  const [menuTranslate, setMenuTranslate] = useState("0");
  const [menuOpacity, setMenuOpacity] = useState("0");

  const changeMenuTitle = (index) => {
    setCurrentCategory(categoriesInfo[index]);
  };

  const changeCategoryHandler = async (categId) => {
    onChangeCategory(categId);
    setMenuTranslate("100");
    setMenuOpacity("0");
    await animationDelay(1000);
    setMenuTranslate("0");
    setMenuOpacity("1");
  };

  const menuWrapperStyle = {
    transition: "transform 1000ms ease-in-out, opacity 1000ms ease-in-out",
    transform: `translateY(${menuTranslate}%)`,
    opacity: menuOpacity,
  };

  const menuTitleStyle = {
    color: currentCategory.accentLight,
    textShadow: `0 0 30px (${currentCategory.accentLight}%)`,
  };

  useEffect(() => {
    (async () => {
      setMenuOpacity("0");
      setMenuTranslate("100");
      await animationDelay(1000);
      setMenuOpacity("1");
      setMenuTranslate("0");
    })();
  }, [categoryIndex]);

  return (
    <div className="row h-25 p-0 m-0 justify-content-center overflow-hidden">
      <div
        className="col-12 py-0 px-0 px-md-5 m-0 d-flex flex-column align-items-center"
        style={menuWrapperStyle}
      >
        <div className="row p-0 m-0 h-75 d-flex justify-content-between">
          {categoriesInfo.map((category) => {
            return (
              <HomeHeroMenuItem
                category={category}
                key={category.categoryId}
                onChangeCategory={changeCategoryHandler}
                categoryIndex={categoryIndex}
                changeMenuTitle={changeMenuTitle}
              />
            );
          })}
        </div>
        <div className="row h-25 p-0 m-0 text-uppercase lh-1 d-flex justify-content-center align-items-start">
          <div className="overflow-hidden h-75 d-flex justify-content-center align-items-center home-hero-menu-description">
            <span style={menuTitleStyle}>{currentCategory.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroMenu;
