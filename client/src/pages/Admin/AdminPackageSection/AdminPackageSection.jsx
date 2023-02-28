import React, { useState } from "react";
import adminCard from "../AdminDataCollection/AdminPackageCardData";
import AdminPackageCard from "./AdminPackageCards/AdminPackageCard";
import "./AdminPackageSection.css";
import AdminDestinations from "./AdminPackageCards/AdminDestinationsList/AdminDestionations";
import {
  cosmopolitanLights,
  diveUnderWater,
  exploreTheSummit,
  lookBackInHistory,
  natureAndCulture,
} from "../AdminDataCollection/AdminPackageSectionData";

const AdminPackageSection = (props) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [prevSelectedCard, setPrevSelectedCard] = useState(null);

  const renderPage = () => {
    switch (selectedCard) {
      case "Cosmopolitan Lights":
        return (
          <AdminDestinations
            pageTitle="Cosmopolitan Lights Destinations"
            data={cosmopolitanLights}
            id={cosmopolitanLights.id}
            name={cosmopolitanLights.name}
            basic={cosmopolitanLights.basic}
            standard={cosmopolitanLights.standard}
            handleBackButton={handleBackButton}
            showModal={props.showModal}
            openModal={props.openModal}
            closeModal={props.closeModal}
          />
        );
      case "Dive Under Water":
        return (
          <AdminDestinations
            pageTitle="Dive Under Water Destinations"
            data={diveUnderWater}
            id={diveUnderWater.id}
            name={diveUnderWater.name}
            basic={diveUnderWater.basic}
            standard={diveUnderWater.standard}
            handleBackButton={handleBackButton}
            showModal={props.showModal}
            openModal={props.openModal}
            closeModal={props.closeModal}
          />
        );
      case "Explore The Summit":
        return (
          <AdminDestinations
            pageTitle="Explore The Summit Destinations"
            data={exploreTheSummit}
            id={exploreTheSummit.id}
            name={exploreTheSummit.name}
            basic={exploreTheSummit.basic}
            standard={exploreTheSummit.standard}
            handleBackButton={handleBackButton}
            showModal={props.showModal}
            openModal={props.openModal}
            closeModal={props.closeModal}
          />
        );
      case "Look Back In History":
        return (
          <AdminDestinations
            pageTitle="Look Back In History Destinations"
            data={lookBackInHistory}
            id={lookBackInHistory.id}
            name={lookBackInHistory.name}
            basic={lookBackInHistory.basic}
            standard={lookBackInHistory.standard}
            handleBackButton={handleBackButton}
            showModal={props.showModal}
            openModal={props.openModal}
            closeModal={props.closeModal}
          />
        );
      case "Nature And Culture":
        return (
          <AdminDestinations
            pageTitle="Nature And Culture Destinations"
            data={natureAndCulture}
            id={natureAndCulture.id}
            name={natureAndCulture.name}
            basic={natureAndCulture.basic}
            standard={natureAndCulture.standard}
            handleBackButton={handleBackButton}
            showModal={props.showModal}
            openModal={props.openModal}
            closeModal={props.closeModal}
          />
        );
      default:
        return null;
    }
  };

  const handleCardClick = (title) => {
    setSelectedCard(title);
  };

  const handleBackButton = () => {
    setSelectedCard(prevSelectedCard);
    setPrevSelectedCard(null);
  };

  return (
    <>
      <div className="col-xxl-10 col-xl-9 col-lg-9 ms-auto  p-2 pt-lg-5 mt-lg-2 adminPackageSection-container">
        {selectedCard ? (
          renderPage()
        ) : (
          <>
            <h4
              className="mb-0 fw-bolder text-dark fs-2 mb-3"
              style={{
                backgroundColor: "var(--clr-secondary-000)",
                textAlign: "center",
              }}
            >
              Categories
            </h4>
            <AdminPackageCard
              adminCard={adminCard}
              title={adminCard.title}
              selectedCard={selectedCard}
              handleCardClick={handleCardClick}
            />
          </>
        )}
      </div>
    </>
  );
};

export default AdminPackageSection;
