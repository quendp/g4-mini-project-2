import React from "react";
import Cosmopolitan from "../../../../assets/images/hero-section-thumbnails/city-poster.jpg";
import DiveUnderWater from "../../../../assets/images/hero-section-thumbnails/water-poster.jpg";
import ExploreTheSummit from "../../../../assets/images/hero-section-thumbnails/mountain-poster.jpg";
import LookBackInHistory from "../../../../assets/images/hero-section-thumbnails/history-poster.jpg";
import NatureAndCulture from "../../../../assets/images/hero-section-thumbnails/nature-poster.jpg";

const AdminPackageCard = (props) => {
  const cardImages = {
    "Cosmopolitan Lights": Cosmopolitan,
    "Dive Under Water": DiveUnderWater,
    "Explore The Summit": ExploreTheSummit,
    "Look Back In History": LookBackInHistory,
    "Nature And Culture": NatureAndCulture,
  };

  return (
    <>
      <div className="adminPackage-Card__container">
        {props.adminCard.map((card) => (
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 adminPackage-card"
            key={card.id}
            onClick={() => props.handleCardClick(card.title)}
          >
            <div
              className=" adminPackage-card__headerImage"
              style={{ backgroundImage: `url(${cardImages[card.title]})` }}
            >
              <h2>{card.title}</h2>
            </div>

            <div className="adminPackage-card__body">
              <p className="fst-italic">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminPackageCard;
