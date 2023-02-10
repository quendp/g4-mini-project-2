import React from 'react'
import './AgentdashBoardStatuses.css'

const AgentDashBoardStatuses = (props) => {
  return (
    <section>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xxl-10 col-xl-9 col-lg-9 ms-auto'>
                    <div className='row pt-lg-5 mt-lg-3 mb-2'>

                        {
                            
                        props.statusesNumber.map((number, idx) =>
                        (<div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 p-2" key={idx}>
                            <div className="card agentdashBoardStatuses-cards">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        {
                                        (number.estatus === 'Waitlist') ? 
                                        <i className="fa-solid fa-list fa-3x text-primary"></i> : 
                                        (number.estatus === 'Tentative') ? 
                                        <i className="fa-solid fa-question fa-3x text-secondary"></i> :
                                        (number.estatus === 'Confirmed') ? 
                                        <i className="fa-solid fa-check fa-3x text-success"></i> : 
                                        <i className="fa-solid fa-ban fa-3x text-danger"></i>
                                        }

                                        <div className="d-flex flex-column align-items-end justify-content-evenly">
                                            <h3 className='text-dark fw-bold fs-1'>{number.number}</h3>
                                        </div>  
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <span className='text-dark fw-bold'>{number.estatus}</span>
                                </div>
                            </div>
                        </div>))

                        }

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AgentDashBoardStatuses
