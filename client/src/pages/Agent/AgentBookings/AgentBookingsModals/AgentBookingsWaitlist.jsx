import React from 'react'
import './AgentBookingsWaitlist.css'

const AgentBookingsWaitlist = (props) => {
  
    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }


  return (


    <div className="modal show-fade" style={modelStyle}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title text-primary " style={{textShadow: 'none', fontWeight: 'bold'}}>New Booking!</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.hide}></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex justify-content-between align-items-center text-secondary'>
                        <h6>Transportation Cost:</h6>
                        <h6>{props.transportationCost}</h6>
                    </div>
                    <div className='d-flex justify-content-between align-items-center text-secondary'>
                        <h6>Accommodation Cost:</h6>
                        <h6>{props.accommodationCost}</h6>
                    </div>
                    <div className='d-flex justify-content-between align-items-center other-cost__details text-secondary'>
                        <h6>Other Cost:</h6>
                        <h6>{props.otherCost}</h6>
                    </div>
                    <div className='d-flex justify-content-between align-items-center text-secondary'>
                        <h6>Total Cost:</h6>
                        <h6>{props.totalCost}</h6>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgentBookingsWaitlist
