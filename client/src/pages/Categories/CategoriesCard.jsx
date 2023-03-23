import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import CategoriesCardUI from "./CategoriesCardUI";

// * Component called by CategoriesDetails.jsx
const CategoriesCard = ({
  currentCategory,
  packagesData,
  chosenPackageHandler,
}) => {
  const [cardsRef, cardsInView] = useInView({ threshold: 0 });

  const [isBasicClicked, setIsBasicClicked] = useState(false);
  const [isStandardClicked, setIsStandardClicked] = useState(false);
  const [isPremiumClicked, setIsPremiumClicked] = useState(false);

  const basicPackage = packagesData.find(
    (cardPackage) => cardPackage.package_type.toLowerCase() === "basic"
  );

  const standardPackage = packagesData.find(
    (cardPackage) => cardPackage.package_type.toLowerCase() === "standard"
  );

  const premiumPackage = packagesData.find(
    (cardPackage) => cardPackage.package_type.toLowerCase() === "premium"
  );

  const onClickBasic = () => {
    setIsBasicClicked(!isBasicClicked);
    setIsStandardClicked(false);
    setIsPremiumClicked(false);
  };
  const onClickStandard = () => {
    setIsBasicClicked(false);
    setIsStandardClicked(!isStandardClicked);
    setIsPremiumClicked(false);
  };
  const onClickPremium = () => {
    setIsBasicClicked(false);
    setIsStandardClicked(false);
    setIsPremiumClicked(!isPremiumClicked);
  };

  const location = useLocation().pathname;
  useEffect(() => {
    setIsBasicClicked(false);
    setIsStandardClicked(false);
    setIsPremiumClicked(false);
  }, [location]);

  return (
    <div
      className="col-12 col-md-6 p-3 px-md-3 px-lg-5 m-0 text-center d-flex flex-column justify-content-start align-items-center"
      ref={cardsRef}
      style={{
        opacity: cardsInView ? "1" : "0",
        transform: cardsInView ? "translateX(0)" : "translateX(10rem)",
        transition:
          "opacity 400ms ease-in-out 200ms, transform 400ms ease-in-out 200ms",
      }}
    >
      <h3 className="mb-3" style={{ color: currentCategory.accentLight }}>
        Choose a package :
      </h3>
      <CategoriesCardUI
        isPackageClicked={isBasicClicked}
        packageData={basicPackage}
        onClickCard={onClickBasic}
        currentCategory={currentCategory}
        packageType={"basic package"}
        chosenPackageHandler={chosenPackageHandler}
      />
      <CategoriesCardUI
        isPackageClicked={isStandardClicked}
        packageData={standardPackage}
        onClickCard={onClickStandard}
        currentCategory={currentCategory}
        packageType={"standard package"}
        chosenPackageHandler={chosenPackageHandler}
      />
      <CategoriesCardUI
        isPackageClicked={isPremiumClicked}
        packageData={premiumPackage}
        onClickCard={onClickPremium}
        currentCategory={currentCategory}
        packageType={"premium package"}
        chosenPackageHandler={chosenPackageHandler}
      />
    </div>
  );
};

export default CategoriesCard;
