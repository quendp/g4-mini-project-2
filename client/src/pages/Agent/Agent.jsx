import React from "react";
import AgentNavbar from "./AgentNavbar";
import travelDetails from "./AgentDataCollection/AgentTravelDetailsData";
import DUMMY_CHART from "./AgentDataCollection/AgentLineChartData";
import statusesNumber from "./AgentDataCollection/AgentDataForCards";

const Agent = () => {
  /*

    February 28, 2023 
    Good day Sir Nherwin,

      For your next task, I'd just like you to refactor the agent page like how you did it in the admin page. You did really well in that task 
    and I was hope that you can also do it here.

      There are just a few things that I'd like you to focus on, which I will enumerate below, while I will let you decide if you want to 
    refactor other parts that I didn't 
    mention here as well.

      1. Make the AgentTopNav component similar to the one in the admin page.

      2. Similarly, refactor the AgentSideBar Component and the AgentSideBarNavItemsSections (if it's fine with you, I hope can also rename
       "AgentSideBarNavItemsSections" and the files inside it because, technically, they are not or they shouldn't be a part of the sidebar
       example: AgentSidebarWaitlistNav --> AgentWaitList, and so on... just for readability purposes ). 

        Below are my suggestions on how you can do the rafactorization:

        a. Move the "currentNavSection" usestate and the function "setCurrentNavSection" that handles  to the main component "Agent.jsx".
        The idea is that if the sidebar menu item like "dashboard" or "waitlist" is clicked, the function inside the AgentSideBar will just 
        call the props.functionFromMainComponent. Which means that the components like AgentSidebarWaitlistNav (before renaming it to AgentWaitList) 
        will now be called directly inside the main component Agent.jsx. You can look at the Home component in the pages directory for an example
        of how it can be implemented. The flow of information in that example looks like this:
        (example in home page)

          (1) categoryCurrent (the current item state) and onChangeCategory (the function that handles state changes) is stored in Home.jsx
          (2)    ---> onChangeCategory (the function that handles state changes) passed to HomeHero.jsx from Home.jsx
          (3)      ---> onChangeCategory (the function that handles state changes) passed to HomeHeroMenu.jsx from HomeHero.jsx
          (4)         ---> onChangeCategory (the function that handles state changes) passed to HomeHeroMenuItem.jsx from HomeHeroMenu.jsx
          (5)            --> onChangeCategory (the function that handles state changes) is called in HomeHeroMenuItem.jsx through an onclickhandler function
          (6) <------------- onChangeCategory (the function that handles state changes) is executed in Home.jsx and categoryCurrent (the current item state) is changed
          (7) From here, you can now create a conditional rendering of the components...
       
      3. Add active states of sidebar menu items
      4. Add settings and account information in the sidebar menu
      5. Change the dashboard number cards to the same layout as the one in admin dashboard. You can also add a "general overview" title.
      6. Increase the height of Latest updates and Monthly bookings in dashboard
      7. Descrease the height and width of the graph below the dashboard. You can set it to width:50vw; and height:50vw; and put it in the center.
      8. Show modal for tentative cards when clicked


    That's all for now.. those are just suggestions so it's fine if you cannot finish it all. You are also free to modify and refactor other files in the
    Agent directory that wasn't meantioned here, especially those with repetitive lines.

    Thank you and have a nice day!

    - Quen DP

  */

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <AgentNavbar
        travelDetails={travelDetails}
        transportationCost={travelDetails.transportationCost}
        accommodationCost={travelDetails.accommodationCost}
        otherCost={travelDetails.otherCost}
        totalCost={travelDetails.totalCost}
        destination={travelDetails.destination}
        package={travelDetails.package}
        fullName={travelDetails.fullName}
        cancelledReason={travelDetails.cancelledReason}
        DUMMY_CHART={DUMMY_CHART}
        month={DUMMY_CHART.month}
        cosmopolitanLights={DUMMY_CHART.cosmopolitanLights}
        diveUnderWater={DUMMY_CHART.diveUnderWater}
        exploreTheSummit={DUMMY_CHART.exploreTheSummit}
        lookBackInHIstory={DUMMY_CHART.lookBackInHIstory}
        natureAndCulture={DUMMY_CHART.natureAndCulture}
        travelDate={travelDetails.travelDate}
        status={travelDetails.status}
        statusesNumber={statusesNumber}
        estatus={statusesNumber.estatus}
        number={statusesNumber.number}
      />
    </div>
  );
};

export default Agent;
