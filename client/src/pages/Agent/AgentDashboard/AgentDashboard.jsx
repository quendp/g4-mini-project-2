import React, { useState } from 'react'
import AgentDashBoardStatuses from './AgentDashComponents/AgentDashBoardStatuses'
import AgentDashBoardLatestUpdates from './AgentDashComponents/AgentDashBoardLatestUpdates'
import './Agentdashboard.css'
import AgentDashBoardLineChart from './AgentDashComponents/AgentDashBoardLineChart'

const statusesNumber = [
    {
      id: 1,
      status: 'Waitlist',
      number: 100
    },
    {
      id: 2,
      status: 'Tentative',
      number: 83
    },
    {
      id: 3,
      status: 'Confirmed',
      number: 162
    },
    {
      id: 4,
      status: 'Cancelled',
      number: 26
    }
  ]

const AgentDashboard = (props) => {

  

  const sortTravels = (travels, sortType) => {
    return travels.sort((a, b) => {
      if (sortType === "newest") return b.id - a.id;
      if (sortType === "oldest") return a.id - b.id;
      return 0;
    });
  };

  const [sortType, setSortType] = useState("newest");

  return (
    <>
    <AgentDashBoardStatuses
          statusesNumber={statusesNumber}
          status={statusesNumber.status}
          number={statusesNumber.number} />
          
    
    
    <section>
        <div className='container-fluid'>
            <div className='row p-2 align-items-center'>
                <div className='col-xxl-10 col-xl-9 col-lg-9 ms-auto'>
                    <div className='row' >
                      <div className='col-xxl-6 col-xl-6 col-12 mb-4'>
                        <div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <h3 className='latest-update__heading text-dark'>Latest Updates</h3>
                            <div className="form-group m-1 d-flex ">
                              {/* <label htmlFor="sortSelect" className='fw-bold'>Sort By:</label> */}
                              <select
                                className="form-control fw-bold"
                                // id="sortSelect"
                                value={sortType}
                                onChange={(e) => setSortType(e.target.value)}
                              >
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                              </select>
                            </div>
                          </div>
                          <div className='overflow-auto latest-updates p-1'>
                                {

                                  sortTravels(props.travelDetails, sortType).map((traveldetail, idx) => <AgentDashBoardLatestUpdates
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
                      <AgentDashBoardLineChart />
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default AgentDashboard
