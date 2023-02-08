import React from 'react'
import AgentDashBoardStatuses from './AgentDashComponents/AgentDashBoardStatuses'
import AgentDashBoardLatestUpdates from './AgentDashComponents/AgentDashBoardLatestUpdates'

const statusesNumber = [
    {
      id: 1,
      status: 'Waitlist',
      number: 10
    },
    {
      id: 2,
      status: 'Tentative',
      number: 8
    },
    {
      id: 3,
      status: 'Confirmed',
      number: 16
    },
    {
      id: 4,
      status: 'Cancelled',
      number: 2
    }
  ]

const AgentDashboard = () => {
  return (
    <>
    <AgentDashBoardStatuses
          statusesNumber={statusesNumber}
          status={statusesNumber.status}
          number={statusesNumber.number} />
          
    
    
    <section>
        <div className='container-fluid'>
            <div className='row mb-5 align-items-center'>
                <div className='col-xxl-10 col-xl-9 col-lg-9 ms-auto'>
                    <div className='row'>
                        <div className='col-xxl-6 col-xl-6 col-12 mb-4' style={{backgroundColor: 'white'}}>
                            <AgentDashBoardLatestUpdates />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AgentDashboard
