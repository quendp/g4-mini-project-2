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

  // Stores packages fetched from the database
  const [allPackages, setAllPackages] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const FETCH_API = "/api/packages";

  // Updates the current category and destination based on the URL
  useEffect(() => {
    if (!category) {
      // will execute if URL is "/categories" only
      chosenCategory.current = categoriesInfo[0];
    } else {
      // will execute if URL has a category specified
      chosenCategory.current = categoriesInfo.find(
        (cat) => cat.categoryPath === category
      );
    }
    if (!destination) {
      // will execute if URL is "/categories/:category" only
      chosenDestination.current = chosenCategory.current.destinations[0];
    } else {
      // will execute if URL has a destination specified
      chosenDestination.current = chosenCategory.current.destinations.find(
        (dest) => dest.path === destination
      );
    }

    // If fetching packages succeeded, filter those packages to match URL
    if (allPackages && !allPackages?.message) {
      const packages = allPackages.filter(
        (cardPackages) =>
          cardPackages.destination_id === chosenDestination.current.id
      );
      setPackagesData(packages);
    }

    // Change current theme based on category in URL
    changeThemeHandler(
      chosenCategory.current.accentLight,
      chosenCategory.current.categoryPath
    );

    // Change state of current category and destination
    setCurrentCategory(chosenCategory.current);
    setCurrentDestination(chosenDestination.current);
  }, [category, destination, allPackages]);

  // Gets all the package from the database
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
          setAllPackages(response.data);
          sessionStorage.setItem("packages", JSON.stringify(response.data));
        }
      } catch (err) {
        console.log(err);
      }
    };
    // Check session storage for packages and Call fetch function to get packages data
    const sessionPackages = JSON.parse(sessionStorage.getItem("packages"));
    if (sessionPackages) {
      setAllPackages(sessionPackages);
    } else {
      getPackageInfo();
    }
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // Handles the change in package chosen by the user
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
