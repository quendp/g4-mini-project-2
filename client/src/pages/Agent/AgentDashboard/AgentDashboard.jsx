import React, { useState } from 'react'
import AgentDashBoardStatuses from './AgentDashComponents/AgentDashBoardStatuses'
import AgentDashBoardLatestUpdates from './AgentDashComponents/AgentDashBoardLatestUpdates'
import './Agentdashboard.css'
import AgentDashBoardLineChart from './AgentDashComponents/AgentDashBoardLineChart'
import AgentDashBoardStatusSortFilter
from './AgentDashComponents/AgentDashBoardStatusSortFilter'
import AgentDashBoardRadarChart from './AgentDashComponents/AgentDashBoardRadarChart'

const AgentDashboard = (props) => {
  
  const [sortType, setSortType] = useState("newest");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const sortTravels = (travels, sortType) => {
    return travels.sort((a, b) => {
      if (sortType === "newest") return b.id - a.id;
      if (sortType === "oldest") return a.id - b.id;
      return 0;
    });
  };

  const filteredTravels = (travels, selectedStatus) => {
    return selectedStatus === "All"
      ? travels
      : travels.filter((travel) => travel.status === selectedStatus);
  };


  return (
    <>
    <AgentDashBoardStatuses
          statusesNumber={props.statusesNumber}
          estatus={props.estatus}
          number={props.number} />
    <section>
        <div className='container-fluid'>
            <div className='row p-2 align-items-center'>
                <div className='col-xxl-10 col-xl-9 col-lg-9 ms-auto'>
                    <div className='row' >
                      <div className='col-xxl-6 col-xl-6 col-12 mb-4'>
                        <div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <h3 className='latest-update__heading text-dark'>Latest Updates</h3>
                            <AgentDashBoardStatusSortFilter 
                            selectedStatus={selectedStatus}
                            setSelectedStatus={setSelectedStatus}
                            sortType={sortType}
                            setSortType={setSortType}
                            />
                          </div>
                          <div className='overflow-auto agentDashboard-latest__updates p-1'>
                                { 
                                  
                                  sortTravels(
                                    filteredTravels
                                    (props.travelDetails, selectedStatus), sortType
                                      ).map((traveldetail, idx) => <AgentDashBoardLatestUpdates
                                  key={idx}
                                  fullName={traveldetail.fullName}
                                  destination={traveldetail.destination}
                                  travelDate={traveldetail.travelDate}
                                  status={traveldetail.status}
                                  />)
                                  
                                }
                          </div>
                        </div>    
                      </div>
                      <AgentDashBoardLineChart
                      month={props.month}
                      dummyChart={props.DUMMY_CHART}
                      cosmopolitanLights={props.cosmopolitanLights}
                      diveUnderWater={props.diveUnderWater}
                      exploreTheSummit={props.exploreTheSummit}
                      lookBackInHistory={props.lookBackInHistory}
                      natureAndCulture={props.natureAndCulture}
                      />        
                    </div>
                    <div className='row'>
                      <AgentDashBoardRadarChart />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AgentDashboard
