import React from 'react'
import AgentSidebar from './AgentSidebar/AgentSidebar'
import AgentTopNav from './AgentTopNav/AgentTopNav'

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light px-2'>
      <button className="navbar-toggler ms-auto mb-2 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" 
            aria-label="Toggle navigation">
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
                  />
                  <AgentTopNav />
                </div>
            </div>
    </nav>
  )
}

export default Navbar