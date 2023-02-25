import React from "react";
import "./HomeServices.css";
import HomeServicesCard from "./HomeServicesCard";
import HomeServicesTitle from "./HomeServicesTitle";

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
    <section className="home-services__wrapper w-100 container-fluid m-0 p-0 min-vh-100 ">
      <div className="home-services__overlay container-fluid d-flex flex-column justify-content-center align-items-center p-5 px-1 px-sm-3 px-md-5 min-vh-100 w-100">
        <HomeServicesTitle categoryIndex={categoryIndex} />
        <div className="row py-5 px-1 px-md-5 d-flex justify-content-center">
          {homeServices.map((service) => {
            return (
              <HomeServicesCard
                key={service.id}
                service={service}
                categoryIndex={categoryIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
