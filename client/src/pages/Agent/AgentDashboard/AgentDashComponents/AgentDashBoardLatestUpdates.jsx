import React from 'react'
import './AgentDashBoardLatestUpdates.css'


const AgentDashBoardLatestUpdates = (props) => {


  return (
    <div className= {(props.status === 'Waitlist')? 'card cards my-1 text-bg-primary':
                     (props.status === 'Tentative')? 'card cards my-1 text-bg-secondary':
                     (props.status === 'Confirmed')? 'card cards my-1 text-bg-success': 
                     'card cards my-1 text-bg-danger'
                    } >
      <h5 className="card-header">{props.status}</h5>
      <div className="card-body">
        <h5 className="card-title">{props.destination}</h5>
        <div className='d-flex justify-content-between align-items-center '>
        <h6>{props.fullName}</h6>
        <p className='fst-italic'>{props.travelDate}</p>
        </div>
      </div>
    </div>


  )
}

export default AgentDashBoardLatestUpdates
