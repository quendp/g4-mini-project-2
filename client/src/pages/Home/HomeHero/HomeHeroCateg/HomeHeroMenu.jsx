import React from "react";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";
import HomeHeroMenuItem from "./HomeHeroMenuItem";

const HomeHeroMenu = ({ categoryIndex, onChangeCategory }) => {
  const currentCategory = categoriesInfo[categoryIndex];
  return (
    <div className="row h-25 p-0 m-0 justify-content-center">
      <div className="col-12 py-0 px-0 px-md-5 m-0 d-flex flex-column align-items-center">
        <div className="row p-0 m-0 h-75 d-flex justify-content-between">
          {categoriesInfo.map((category) => {
            return (
              <HomeHeroMenuItem
                category={category}
                key={category.categoryId}
                onChangeCategory={onChangeCategory}
              />
            );
          })}
        </div>
        <div className="row h-25 p-0 m-0 text-uppercase lh-1 d-flex justify-content-center align-items-start">
          <div className="overflow-hidden h-75 d-flex justify-content-center align-items-center home-hero-menu-description">
            <span>{currentCategory.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroMenu;
