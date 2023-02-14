import React from 'react'
import AgentNavbar from './AgentNavbar'
import travelDetails from './AgentDataCollection/AgentTravelDetailsData'
import DUMMY_CHART from './AgentDataCollection/AgentLineChartData'
import statusesNumber from './AgentDataCollection/AgentDataForCards'

const Agent = () => {

  return (
    <div style={{backgroundColor: '#ffffff'}}>
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
  )
}

export default Agent