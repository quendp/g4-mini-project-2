import React from "react";
import "./AgentNavbar.css";
import AgentSidebar from "./AgentSidebar/AgentSidebar";
import AgentTopNav from "./AgentTopNav/AgentTopNav";
import AgentDashboard from "../AgentDashboard/AgentDashboard";
import AgentWaitlist from "../AgentStatusesSections/AgentWaitlist";
import AgentTentative from "../AgentStatusesSections/AgentTentative";
import AgentConfirmed from "../AgentStatusesSections/AgentConfirmed";
import AgentCancelled from "../AgentStatusesSections/AgentCancelled";
import AgentSettings from "../AgentSettings/AgentSettings";
import AgentAccountInformation from "../AgentAccountInformation/AgentAccountInformation";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light px-2">
        <button
          className="navbar-toggler ms-auto mb-2 bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container-fluid">
            <AgentSidebar
              travelDetails={props.travelDetails}
              transportationCost={props.transportationCost}
              accommodationCost={props.accommodationCost}
              otherCost={props.otherCost}
              totalCost={props.totalCost}
              destination={props.destination}
              package={props.package}
              fullName={props.fullName}
              cancelledReason={props.cancelledReason}
              DUMMY_CHART={props.DUMMY_CHART}
              month={props.month}
              cosmopolitanLights={props.cosmopolitanLights}
              diveUnderWater={props.diveUnderWater}
              exploreTheSummit={props.exploreTheSummit}
              lookBackInHIstory={props.lookBackInHIstory}
              natureAndCulture={props.natureAndCulture}
              statusesNumber={props.statusesNumber}
              estatus={props.estatus}
              number={props.number}
              startShowing={props.startShowing}
            />
            <AgentTopNav />
          </div>
        </div>
      </nav>
      {props.isShowing && props.currentNavSection == "Dashboard" && (
        <AgentDashboard
          DUMMY_CHART={props.DUMMY_CHART}
          month={props.month}
          cosmopolitanLights={props.cosmopolitanLights}
          diveUnderWater={props.diveUnderWater}
          exploreTheSummit={props.exploreTheSummit}
          lookBackInHIstory={props.lookBackInHIstory}
          natureAndCulture={props.natureAndCulture}
          travelDetails={props.travelDetails}
          fullName={props.fullName}
          destination={props.destination}
          travelDate={props.travelDate}
          status={props.status}
          statusesNumber={props.statusesNumber}
          estatus={props.estatus}
          number={props.number}
        />
      )}

      {props.isShowing && props.currentNavSection == "Waitlist" && (
        <AgentWaitlist
          travelDetails={props.travelDetails}
          transportationCost={props.transportationCost}
          accommodationCost={props.accommodationCost}
          otherCost={props.otherCost}
          totalCost={props.totalCost}
        />
      )}
      {props.isShowing && props.currentNavSection == "Tentative" && (
        <AgentTentative travelDetails={props.travelDetails} />
      )}
      {props.isShowing && props.currentNavSection == "Confirmed" && (
        <AgentConfirmed
          travelDetails={props.travelDetails}
          destination={props.destination}
          package={props.package}
          fullName={props.fullName}
        />
      )}
      {props.isShowing && props.currentNavSection == "Cancelled" && (
        <AgentCancelled
          travelDetails={props.travelDetails}
          fullName={props.fullName}
          cancelledReason={props.cancelledReason}
        />
      )}
      {props.isShowing && props.currentNavSection == "Settings" && (
        <AgentSettings />
      )}
      {props.isShowing && props.currentNavSection == "Account Information" && (
        <AgentAccountInformation />
      )}
    </>
  );
};

export default Navbar;
