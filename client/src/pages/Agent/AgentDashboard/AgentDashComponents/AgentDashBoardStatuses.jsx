import React from 'react'

const AgentDashBoardStatuses = (props) => {
  return (
    <section>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xxl-10 col-xl-9 col-lg-9 ms-auto'>
                    <div className='row pt-lg-5 mt-lg-3 mb-5'>

                        {
                            
                        props.statusesNumber.map((number, idx) =>
                        (<div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 p-2" key={idx}>
                            <div className="card cards">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        {
                                        (number.status === 'Waitlist') ? 
                                        <i className="fa-solid fa-list fa-3x text-primary"></i> : 
                                        (number.status === 'Tentative') ? 
                                        <i className="fa-solid fa-question fa-3x text-secondary"></i> :
                                        (number.status === 'Confirmed') ? 
                                        <i className="fa-solid fa-check fa-3x text-success"></i> : 
                                        <i className="fa-solid fa-ban fa-3x text-danger"></i>
                                        }

                                        <div className="d-flex flex-column align-items-end justify-content-evenly text-secondary">
                                            <h3>{number.number}</h3>
                                        </div>  
                                    </div>
                                </div>
                                <div className="card-footer text-secondary">
                                    <span>{number.status}</span>
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
