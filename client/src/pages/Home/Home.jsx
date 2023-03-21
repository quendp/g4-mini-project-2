import React, { useEffect, useState } from "react";
import HomeHero from "./HomeHero/HomeHero";
import HomeServices from "./HomeServices/HomeServices";
import HomeStories from "./HomeStories/HomeStories";
import HomeTestimonials from "./HomeTestimonials/HomeTestimonials";
import { categoriesInfo } from "../../Data/CategoriesMockData";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  // 0: lights, 1: water, 2: summit, 3: history, 4: nature

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [categoryCurrent, setCategoryCurrent] = useState(categoriesInfo[0]);

  const changeThemeHandler = useOutletContext();

  const onChangeCategory = (categoryId) => {
    setCategoryIndex(categoryId);
    setCategoryCurrent(categoriesInfo[categoryId]);
    changeThemeHandler(
      categoriesInfo[categoryId].accentLight,
      categoriesInfo[categoryId].categoryPath
    );
  };

  useEffect(() => {
    changeThemeHandler(
      categoriesInfo[0].accentLight,
      categoriesInfo[0].categoryPath
    );
  }, []);

  return (
    <section className="overflow-hidden">
      <HomeHero
        categoryIndex={categoryIndex}
        onChangeCategory={onChangeCategory}
      />
      <HomeServices categoryCurrent={categoryCurrent} />
      <HomeStories categoryCurrent={categoryCurrent} />
      <HomeTestimonials categoryCurrent={categoryCurrent} />
    </section>
  );
};

export default Home;
