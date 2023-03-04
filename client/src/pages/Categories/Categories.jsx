import React, { useEffect, useRef, useState } from "react";
import "./Categories.css";
import { categoriesInfo } from "../../Data/CategoriesMockData";
import { useOutletContext, useParams } from "react-router-dom";
import packageData from "../../Data/PackagesMockData.json";
import CategoriesTitle from "./CategoriesTitle";
import CategoriesDetails from "./CategoriesDetails";
import CategoriesMenu from "./CategoriesMenu";
import BookingForm from "../../components/Booking/BookingForm";

const Categories = () => {
  const changeThemeHandler = useOutletContext();
  const { category, destination } = useParams();

  const chosenCategory = useRef(categoriesInfo[0]);
  const chosenDestination = useRef(chosenCategory.current.destinations[0]);

  const [currentCategory, setCurrentCategory] = useState(
    chosenCategory.current
  );
  const [currentDestination, setCurrentDestination] = useState(
    chosenDestination.current
  );

  const [chosenPackage, setChosenPackage] = useState({});

  const destinationPackages = packageData.filter(
    (cardPackages) => cardPackages.destination_id === currentDestination.id
  );

  const chosenPackageHandler = (destPackage) => {
    setChosenPackage(destPackage);
  };

  useEffect(() => {
    if (!category) {
      chosenCategory.current = categoriesInfo[0];
    } else {
      chosenCategory.current = categoriesInfo.find(
        (cat) => cat.categoryPath === category
      );
    }
    if (!destination) {
      chosenDestination.current = chosenCategory.current.destinations[0];
    } else {
      chosenDestination.current = chosenCategory.current.destinations.find(
        (dest) => dest.path === destination
      );
    }
    changeThemeHandler(chosenCategory.current.accentLight);
  }, [category, destination]);

  useEffect(() => {
    setCurrentCategory(chosenCategory.current);
    setCurrentDestination(chosenDestination.current);
  });
  return (
    <>
      <BookingForm chosenPackage={chosenPackage} />
      <main
        className="categories-page__wrapper container-fluid min-vh-100 vw-100 overflow-hidden m-0 position-relative"
        style={{
          backgroundImage: `url(${currentDestination.destinationImage})`,
        }}
      >
        <div className="categories-page__overlay position-absolute w-100 h-100 top-0 start-0"></div>
        <CategoriesMenu
          currentCategory={currentCategory}
          currentDestination={currentDestination}
        />
        <div className="categories-page__content position-relative">
          <CategoriesTitle
            currentCategory={currentCategory}
            currentDestination={currentDestination}
          />
          <CategoriesDetails
            currentCategory={currentCategory}
            currentDestination={currentDestination}
            destinationPackages={destinationPackages}
            chosenPackageHandler={chosenPackageHandler}
          />
        </div>
      </main>
    </>
  );
};

export default Categories;
