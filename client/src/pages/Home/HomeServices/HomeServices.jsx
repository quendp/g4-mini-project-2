import React from "react";
import { useInView } from "react-intersection-observer";
import "./HomeServices.css";
import HomeServicesCard from "./HomeServicesCard";
import HomeServicesStats from "./HomeServicesStats";
import HomeServicesTitle from "./HomeServicesTitle";
import cloudsImg from "../../../assets/images/clouds.png";

const HomeServices = ({ categoryCurrent }) => {
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
      title: "Events and Activities",
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
  const [servicesRef, servicesInView] = useInView({ threshold: 0.15 });

  return (
    <>
      <section className="home-services__wrapper w-100 container-fluid m-0 p-0 min-vh-100 ">
        <div className="home-services__overlay container-fluid d-flex flex-column justify-content-center align-items-center py-5 px-1 px-sm-3 px-md-5 min-vh-100 w-100">
          <HomeServicesTitle categoryCurrent={categoryCurrent} />
          <div
            className="row py-2 py-md-5 px-1 px-md-5 d-flex justify-content-center"
            style={{
              opacity: servicesInView ? "1" : "0",
              transform: servicesInView ? "translateX(0)" : "translateX(10rem)",
              transition:
                "opacity 400ms ease-in-out, transform 400ms ease-in-out",
            }}
            ref={servicesRef}
          >
            {homeServices.map((service) => {
              return (
                <HomeServicesCard
                  key={service.id}
                  service={service}
                  categoryCurrent={categoryCurrent}
                />
              );
            })}
          </div>
          <HomeServicesStats categoryCurrent={categoryCurrent} />
        </div>
        <div className="container-fluid home-services__spacer position-relative">
          <img
            className="position-absolute start-0 bottom-0 w-100"
            src={cloudsImg}
            alt="clouds"
          />
        </div>
      </section>
    </>
  );
};

export default HomeServices;
