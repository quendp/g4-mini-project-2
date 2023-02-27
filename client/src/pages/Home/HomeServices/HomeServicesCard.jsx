import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserAuthContext from "../../../context/UserAuthentication/UserAuthentication";

const HomeServicesCard = ({ service, categoryCurrent }) => {
  const userData = useContext(UserAuthContext);
  return (
    <Link
      to={`/${userData.token.length === 0 ? "login" : userData.username}`}
      className="text-decoration-none col-12 col-sm-6 col-xl-3 p-4 flex-1"
    >
      <div className="home-services__card overflow-hidden h-100 d-flex justify-content-start flex-column">
        <div className="home-services-top p-3 pt-4 d-flex justify-content-center align-items-start">
          <div
            className="home-services-card__number me-3 p-2 d-flex justify-content-center flex-column align-items-center"
            style={{
              backgroundColor: categoryCurrent.accentLight,
            }}
          >
            <span>{service.id}</span>
          </div>

          <div className="home-services-card__title align-self-center">
            <h3 className="h3-light lh-1 m-0 p-0">{service.title}</h3>
          </div>
        </div>
        <div className="home-services-card__separator mx-4"></div>
        <div className="px-4 py-3 d-flex justify-content-center">
          <p className="home-services-card__description p-2">
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeServicesCard;
