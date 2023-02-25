import React from "react";
import "./HomeServices.css";
import { categoriesInfo } from "../../../Data/CategoriesMockData";

const HomeServices = ({ categoryIndex }) => {
  const homeServices = [
    {
      id: "01",
      title: "Visa Consultation",
      description:
        "We will assist you with your visa application, documentation, and other necessary documents for your safe travel.",
    },
    {
      id: "02",
      title: "Transportation Assistance",
      description:
        "We can also help you with the booking of your flights, and other transportation vehicles.",
    },
    {
      id: "03",
      title: "Tour Events and Activities",
      description:
        "We can also set additional events and programs that could make your tour experience more memorable.",
    },
    {
      id: "04",
      title: "Accomodation Assistance",
      description:
        "We will handle your accomodation during the trip including hotel booking and restaurant reservations.",
    },
  ];

  return (
    <div className="home-services__wrapper w-100 container-fluid m-0 p-0">
      <div className="home-services__overlay container-fluid vh-100 d-flex flex-column justify-content-center p-5 h-100 w-100">
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
        <div className="row py-5 px-5">
          {homeServices.map((service) => {
            return (
              <div className="col-3 p-4 h-100" key={service.id}>
                <div className="home-services__card overflow-hidden h-100 d-flex justify-content-start flex-column">
                  <div className="home-services-top p-3 py-4 d-flex justify-content-center">
                    <div
                      className="home-services-card__number me-3 p-2 d-flex justify-content-center flex-column align-items-center"
                      style={{
                        backgroundColor:
                          categoriesInfo[categoryIndex].accentLight,
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
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
