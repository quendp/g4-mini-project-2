import React from "react";

const AdminPackageCard = (props) => {
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
              className={
                card.title === "Cosmopolitan Lights"
                  ? "adminPackage-card__header adminPackage-card__header1"
                  : card.title === "Dive Under Water"
                  ? "adminPackage-card__header adminPackage-card__header2"
                  : card.title === "Explore The Summit"
                  ? "adminPackage-card__header adminPackage-card__header3"
                  : card.title === "Look Back In History"
                  ? "adminPackage-card__header adminPackage-card__header4"
                  : "adminPackage-card__header adminPackage-card__header5"
              }
            >
              {card.title === "Cosmopolitan Lights" ? (
                <i className="fas fa-globe adminPackage-card__headerIcon1" />
              ) : card.title === "Dive Under Water" ? (
                <i className="fas fa-swimmer adminPackage-card__headerIcon2" />
              ) : card.title === "Explore The Summit" ? (
                <i className="fas fa-mountain adminPackage-card__headerIcon3" />
              ) : card.title === "Look Back In History" ? (
                <i className="fas fa-history adminPackage-card__headerIcon4" />
              ) : (
                <i className="fas fa-leaf adminPackage-card__headerIcon5" />
              )}
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
