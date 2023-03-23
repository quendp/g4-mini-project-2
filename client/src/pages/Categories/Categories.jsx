import React, { useEffect, useRef, useState } from "react";
import "./Categories.css";
import { categoriesInfo } from "../../Data/CategoriesMockData";
import { useOutletContext, useParams } from "react-router-dom";
import CategoriesTitle from "./CategoriesTitle";
import CategoriesDetails from "./CategoriesDetails";
import CategoriesMenu from "./CategoriesMenu";
import BookingForm from "../../components/Booking/BookingForm";
import axios from "../../Utils/axios";

const Categories = () => {
  // Changes color scheme of footer and header
  const changeThemeHandler = useOutletContext();

  // Gets the category and destination from the URL
  const { category, destination } = useParams();

  // Gets the category from CategoriesMockData file with default to cosmopolitan-lights
  const chosenCategory = useRef(categoriesInfo[0]);
  const [currentCategory, setCurrentCategory] = useState(
    chosenCategory.current
  );

  // Gets the destination from CategoriesMockData with default value to star-city
  const chosenDestination = useRef(chosenCategory.current.destinations[0]);
  const [currentDestination, setCurrentDestination] = useState(
    chosenDestination.current
  );

  // Updates the current category and destination based on the URL
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
    changeThemeHandler(
      chosenCategory.current.accentLight,
      chosenCategory.current.categoryPath
    );
  }, [category, destination]);

  useEffect(() => {
    setCurrentCategory(chosenCategory.current);
    setCurrentDestination(chosenDestination.current);
  });

  // Gets the package from the database with destination equal to the selected destination
  const [packagesData, setPackagesData] = useState([]);
  const FETCH_API = "/api/packages";
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getPackageInfo = async () => {
      try {
        const response = await axios.get(FETCH_API, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          signal: controller.signal,
        });
        if (isMounted && response.data) {
          const packages = response.data.filter(
            (cardPackages) =>
              cardPackages.destination_id === currentDestination.id
          );
          setPackagesData(packages);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPackageInfo();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // Gets the details of the selected package
  const [chosenPackage, setChosenPackage] = useState({});
  const chosenPackageHandler = (destPackage) => {
    setChosenPackage(destPackage);
  };

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
            packagesData={packagesData}
            chosenPackageHandler={chosenPackageHandler}
          />
        </div>
      </main>
    </>
  );
};

export default Categories;
