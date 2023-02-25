import React from "react";
import { categoriesInfo } from "../../../Data/CategoriesMockData";

const HomeServicesTitle = ({ categoryIndex }) => {
  return (
    <div className="row pt-5">
      <div className="col-12 text-center">
        <h2 className="home-services__title">
          Do you want to travel?
          <span
            style={{
              color: categoriesInfo[categoryIndex].accentLight,
            }}
          >
            {" "}
            We got you covered.
          </span>
        </h2>
        <p className="p-light">
          Here are some of the services we have to offer.
        </p>
      </div>
    </div>
  );
};

export default HomeServicesTitle;
