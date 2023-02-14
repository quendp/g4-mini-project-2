import React, { useState } from 'react'
import './AgentSidebarWaitlistNav.css'
import AgentWailtlistModal from './AgentSideBarItemsModal/AgentWailtlistModal';

const AgentSidebarWaitlistNav = (props) => {

    const [filteredStatus, setFilteredStatus] = useState('Waitlist')

    const [model, setModel] = useState(false);
    const [tempdata, setTempdata] = useState([]);
  
    const getData = (transportationCost, accommodationCost, otherCost, totalCost) => {
      let tempData = [transportationCost, accommodationCost, otherCost, totalCost]
      setTempdata(item => [1, ...tempData])
      return setModel(true)
    }

    const filteredCards = props.travelDetails.filter((travelDetail) => {
        return travelDetail.status === filteredStatus
      })

  return (
    <section id='bookingsSection' style={{height: '100vh'}}>
      <div className='container-fluid'>
        <div className='row pt-lg-5'>
          <div className='col-xxl-10 col-xl-9 col-lg-9 col-12 ms-auto'>
            <div className='status-handler overflow-auto'>
              <div className="row pt-lg-2 mb-5 mx-2">
                {

                        filteredCards.map((travelDetail, index) => (

                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 p-2" key={index}>
                            <div className="card agentSidebarWaitlistNav-cards">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                <div className='d-flex flex-column align-items-start justify-content-evenly text-secondary'>
                                    <h5>{travelDetail.destination}</h5>
                                    <h6>{travelDetail.fullName}</h6>
                                </div>
                                <div className="d-flex flex-column align-items-end justify-content-evenly text-secondary">
                                    <h6>{travelDetail.package}</h6>                            
                                    <h6>{travelDetail.travelDate}</h6>
                                </div>  
                                </div>
                            </div>
                                <div className="card-footer text-secondary d-flex alight-items-center justify-content-between">

                                {(travelDetail.status === 'Waitlist')?
                                <button type='button' className='agentSidebarWaitlistNav-cards__btn btn-outline-info' 
                                onClick={() => getData(travelDetail.transportationCost, travelDetail.accommodationCost, 
                                travelDetail.otherCost, travelDetail.totalCost)}>Proceed</button>:''}

                                <span className='agentSidebarWaitlistNav-cards__span'>{travelDetail.status}</span>
                                </div>
                            </div>
                        </div>
                        ))

                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    {
    model === true ? <AgentWailtlistModal 
    transportationCost={tempdata[1]}
    accommodationCost={tempdata[2]}
    otherCost={tempdata[3]}
    totalCost={tempdata[4]}
    hide={() => setModel(false)}
    /> : ''
    }
    </section>

    
  )
}

export default AgentSidebarWaitlistNav
