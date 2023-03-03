import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CategoriesCardUI from "./CategoriesCardUI";

const CategoriesCard = ({
  currentCategory,
  currentDestination,
  destinationPackages,
}) => {
  const [cardsRef, cardsInView] = useInView({ threshold: 0 });

  const [isBasicClicked, setIsBasicClicked] = useState(false);
  const [isStandardClicked, setIsStandardClicked] = useState(false);
  const [isPremiumClicked, setIsPremiumClicked] = useState(false);

  const basicPackage = destinationPackages.find(
    (cardPackage) => cardPackage.package_type.toLowerCase() === "basic"
  );

  const standardPackage = destinationPackages.find(
    (cardPackage) => cardPackage.package_type.toLowerCase() === "standard"
  );

  const premiumPackage = destinationPackages.find(
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
      />
      <CategoriesCardUI
        isPackageClicked={isStandardClicked}
        packageData={standardPackage}
        onClickCard={onClickStandard}
        currentCategory={currentCategory}
        packageType={"standard package"}
      />
      <CategoriesCardUI
        isPackageClicked={isPremiumClicked}
        packageData={premiumPackage}
        onClickCard={onClickPremium}
        currentCategory={currentCategory}
        packageType={"premium package"}
      />
    </div>
  );
};

export default CategoriesCard;
