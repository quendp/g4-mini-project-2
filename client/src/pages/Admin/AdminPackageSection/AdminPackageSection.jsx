import React, { useState } from "react";
import adminCard from "../AdminDataCollection/AdminPackageCardData";
import AdminPackageCard from "./AdminPackageCards/AdminPackageCard";
import "./AdminPackageSection.css";
import CosmoLightPage from "./AdminPackageCards/AdminDestinationsList/CosmoLightPage";
import DiveUnderWaterPage from "./AdminPackageCards/AdminDestinationsList/DiveUnderWaterPage";
import ExploreTheSummitPage from "./AdminPackageCards/AdminDestinationsList/ExploreTheSummitPage";
import LookBackInHIstoryPage from "./AdminPackageCards/AdminDestinationsList/LookBackInHIstoryPage";
import NatureAndCulturePage from "./AdminPackageCards/AdminDestinationsList/NatureAndCulturePage";

const AdminPackageSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [prevSelectedCard, setPrevSelectedCard] = useState(null);

  const renderPage = () => {
    switch (selectedCard) {
      case "Cosmopolitan Lights":
        return <CosmoLightPage handleBackButton={handleBackButton} />;
      case "Dive Under Water":
        return <DiveUnderWaterPage handleBackButton={handleBackButton} />;
      case "Explore The Summit":
        return <ExploreTheSummitPage handleBackButton={handleBackButton} />;
      case "Look Back In History":
        return <LookBackInHIstoryPage handleBackButton={handleBackButton} />;
      case "Nature And Culture":
        return <NatureAndCulturePage handleBackButton={handleBackButton} />;
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
      <div
        style={{ backgroundColor: "#ffffff", height: "140vh" }}
        className="col-xxl-10 col-xl-9 col-lg-9 ms-auto  p-2 pt-lg-5 mt-lg-2"
      >
        {selectedCard ? (
          renderPage()
        ) : (
          <>
            <h4
              className="mb-0 fw-bolder text-dark fs-2 mb-3"
              style={{ backgroundColor: "#ffffff", textAlign: "center" }}
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
