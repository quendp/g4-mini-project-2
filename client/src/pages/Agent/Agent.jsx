import React from 'react'
import AgentNavbar from './AgentNavbar'
// import AgentDashboard from './AgentDashboard/AgentDashboard'

const travelDetails = [
  {
    id: 1,
    fullName: 'Dia Leocadio',
    destination: 'Star City',
    package: 'Basic',
    travelDate: 'March 2 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 1100,
    accommodationCost: 3000,
    otherCost: 1100,
    totalCost: 5200
  },
  {
    id: 2,
    fullName: 'Elnie Ebasan',
    destination: 'Mt. Apo',
    package: 'Premium',
    travelDate: 'March 3 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 1400,
    accommodationCost: 2900,
    otherCost: 1000,
    totalCost: 5300
  },
  {
    id: 3,
    fullName: 'Faith Mariano',
    destination: 'Calle Crisologo',
    package: 'Standard',
    travelDate: 'March 4 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 1300,
    accommodationCost: 2800,
    otherCost: 900,
    totalCost: 5000
  },
  {
    id: 4,
    fullName: 'Gene Espejo',
    destination: 'Chocolate Hills',
    package: 'Basic',
    travelDate: 'March 5 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 1200,
    accommodationCost: 2700,
    otherCost: 800,
    totalCost: 4700
  },
  {
    id: 5,
    fullName: 'James Osias',
    destination: 'Rizal Park',
    package: 'Premium',
    travelDate: 'March 6 2023',
    status: 'Confirmed',
    cancelledReason: '',
    transportationCost: 1700,
    accommodationCost: 2600,
    otherCost: 700,
    totalCost: 5000
  },
  {
    id: 6,
    fullName: 'Joffrey Acula',
    destination: 'Fort Santaiago',
    package: 'Standard',
    travelDate: 'March 7 2023',
    status: 'Confirmed',
    cancelledReason: '',
    transportationCost: 1600,
    accommodationCost: 2500,
    otherCost: 600,
    totalCost: 4700
  },
  {
    id: 7,
    fullName: 'Rendi Aguila',
    destination: 'Mt .Apo',
    package: 'Basic',
    travelDate: 'March 8 2023',
    status: 'Cancelled',
    cancelledReason: 'Lorem ipsum dolor sit amet.',
    transportationCost: 1500,
    accommodationCost: 2400,
    otherCost: 500,
    totalCost: 4400
  },
  {
    id: 8,
    fullName: 'Mohn Javier',
    destination: 'Fort Santiago',
    package: 'Premium',
    travelDate: 'March 9 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 2000,
    accommodationCost: 2300,
    otherCost: 400,
    totalCost: 4700
  },
  {
    id: 9,
    fullName: 'Ram Libres',
    destination: 'Rizal Shrine',
    package: 'Standard',
    travelDate: 'March 10 2023',
    status: 'Cancelled',
    cancelledReason: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet.',
    transportationCost: 1900,
    accommodationCost: 2200,
    otherCost: 300,
    totalCost: 4400
  },
  {
    id: 10,
    fullName: 'Sketch Caneba',
    destination: 'Chinatown',
    package: 'Basic',
    travelDate: 'March 12 2023',
    status: 'Tentative',
    cancelledReason: '',
    transportationCost: 1800,
    accommodationCost: 2100,
    otherCost: 200,
    totalCost: 4100
  }
]

const DUMMY_CHART = [
  {
    id: 1,
    month: 'Jan',
    cosmopolitanLights: 20,
    diveUnderWater: 22,
    exploreTheSummit: 32,
    lookBackInHIstory: 13,
    natureAndCulture: 26,
  },
  {
    id: 2,
    month: 'Feb',
    cosmopolitanLights: 23,
    diveUnderWater: 35,
    exploreTheSummit: 56,
    lookBackInHIstory: 24,
    natureAndCulture: 27,
  },
  {
    id: 3,
    month: 'Mar',
    cosmopolitanLights: 36,
    diveUnderWater: 27,
    exploreTheSummit: 33,
    lookBackInHIstory: 13,
    natureAndCulture: 15,
  },
  {
    id: 4,
    month: 'Apr',
    cosmopolitanLights: 42,
    diveUnderWater: 14,
    exploreTheSummit: 22,
    lookBackInHIstory: 43,
    natureAndCulture: 56,
  },
  {
    id: 2,
    month: 'May',
    cosmopolitanLights: 56,
    diveUnderWater: 44,
    exploreTheSummit: 54,
    lookBackInHIstory: 30,
    natureAndCulture: 23,
  },
]

const statusesNumber = [
  {
    id: 1,
    estatus: 'Waitlist',
    number: 100
  },
  {
    id: 2,
    estatus: 'Tentative',
    number: 83
  },
  {
    id: 3,
    estatus: 'Confirmed',
    number: 162
  },
  {
    id: 4,
    estatus: 'Cancelled',
    number: 26
  }
]

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

      {/* <AgentDashboard 
      travelDetail={travelDetails}
      fullName={travelDetails.fullName}
      destination={travelDetails.destination}
      travelDate={travelDetails.traveldate}
      status={travelDetails.status}
      statusesNumber={statusesNumber}
      estatus={statusesNumber.status}
      number={statusesNumber.number} */}
      
    </div>
  )
}

export default Agent