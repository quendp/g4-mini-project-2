import React from "react";
import { categoriesInfo } from "../../../Data/CategoriesMockData";

const HomeServicesCard = ({ service, categoryIndex }) => {
  return (
    <div className="col-12 col-sm-6 col-xl-3 p-4 flex-1">
      <div className="home-services__card overflow-hidden h-100 d-flex justify-content-start flex-column">
        <div className="home-services-top p-3 py-4 d-flex justify-content-center">
          <div
            className="home-services-card__number me-3 p-2 d-flex justify-content-center flex-column align-items-center"
            style={{
              backgroundColor: categoriesInfo[categoryIndex].accentLight,
            }}
          >
            <span>{service.id}</span>
          </div>
          <div className="home-services-card__title">
            <h3 className="h3-light lh-1">{service.title}</h3>
          </div>
        </div>
        <div className="p-4 d-flex justify-content-center">
          <p className="home-services-card__description py-2">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesCard;
