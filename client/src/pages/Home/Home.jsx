import React, { useState } from "react";
import TestingArea from "../../components/TestingArea";
import HomeHero from "./HomeHero/HomeHero";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  // 0: lights, 1: water, 2: summit, 3: history, 4: nature

  const [categoryIndex, setCategoryIndex] = useState(0);

  const onChangeCategory = (categoryId) => {
    setCategoryIndex(categoryId);
  };

  return (
    <>
      <HomeHero
        categoryIndex={categoryIndex}
        onChangeCategory={onChangeCategory}
      />
      <HomeServices categoryIndex={categoryIndex} />
      <TestingArea />
    </>
  );
};

export default Home;
