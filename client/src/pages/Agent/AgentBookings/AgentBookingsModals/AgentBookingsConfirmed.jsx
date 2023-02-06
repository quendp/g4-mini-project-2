import React from 'react'

const AgentBookingsConfirmed = (props) => {
  
  let modelStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.8)'
  }

  return (
    <div className="modal show fade" style={modelStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Booking Confirmed!</h5>
            <button type="button" className="btn-close" onClick={props.hide}></button>
          </div>
          <div className="modal-body">
            <img src={props.image} className='img-fluid'/>
            <h3>Destination: {props.destination}</h3>
            <h4>Package: {props.package}</h4>
            <h4>Full Name: {props.fullName}</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={props.hide}>Later</button>
            <button type="button" className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentBookingsConfirmed

