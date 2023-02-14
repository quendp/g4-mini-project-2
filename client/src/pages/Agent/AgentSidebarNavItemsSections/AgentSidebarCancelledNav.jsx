import React, { useState } from 'react'
import './AgentSidebarCancelledNav.css'
import AgentCancelledModal from './AgentSideBarItemsModal/AgentCancelledModal'

const AgentSidebarCancelledNav = (props) => {
    const [filteredStatus, setFilteredStatus] = useState('Cancelled')

    const [modelRemove, setModelRemove] = useState(false)
    const [tempremovedata, setTempRemoveData] = useState([])
  
    const getDataRemove = (fullName, reason) => {
      let tempRemovedata = [fullName, reason]
      setTempRemoveData(item => [1, ...tempRemovedata])
      return setModelRemove(true)
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

                                {(travelDetail.status === 'Cancelled')?
                                <button type='button' className='agentSidebarCancelledNav-cards__btn btn-outline-info'onClick={() => getDataRemove(travelDetail.fullName, travelDetail.cancelledReason)}>Remove</button>:''}

                                <span className='agentSidebarCancelledNav-cards__span'>{travelDetail.status}</span>
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
        modelRemove === true ? <AgentCancelledModal 
        fullName={tempremovedata[1]}
        reason={tempremovedata[2]}
        hide={() => setModelRemove(false)}
        />: ''
      }
    </section>

    
  )
}

export default AgentSidebarCancelledNav
