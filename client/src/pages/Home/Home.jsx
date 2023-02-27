import React, { useState } from "react";
import TestingArea from "../../components/TestingArea";
import HomeHero from "./HomeHero/HomeHero";
import HomeServices from "./HomeServices/HomeServices";
import HomeStories from "./HomeStories/HomeStories";
import HomeTestimonials from "./HomeTestimonials/HomeTestimonials";
import { categoriesInfo } from "../../Data/CategoriesMockData";

const Home = () => {
  // 0: lights, 1: water, 2: summit, 3: history, 4: nature

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [categoryCurrent, setCategoryCurrent] = useState(categoriesInfo[0]);

  const onChangeCategory = (categoryId) => {
    setCategoryIndex(categoryId);
    setCategoryCurrent(categoriesInfo[categoryId]);
  };

  return (
    <>
      <HomeHero
        categoryIndex={categoryIndex}
        onChangeCategory={onChangeCategory}
      />
      <HomeServices categoryCurrent={categoryCurrent} />
      <HomeStories categoryCurrent={categoryCurrent} />
      <HomeTestimonials categoryCurrent={categoryCurrent} />
      <TestingArea />
    </>
  );
};

export default Home;
