import React from 'react'
import './AgentDutyList.css'

const AgentDutyList = (props) => {
  return (
    <section id='assignedDutySection'>
      <div className='container-fluid'>
        <div className='row mb-5 align-items-center'>
          <div className='col-xxl-10 col-xl-9 col-lg-9 ms-auto'>
            <div className='row'>
              <div className='col-xxl-12 col-xl-12 col-12 mb-4'>
                <h3 className="text-muted text-center fw-bold mb-2">Assigned Duties</h3>
                <div className='overflow-auto'>
                  <table className='table table-hover table-dark text-center' role='button'>
                    <thead>
                      <tr className='text-muted table-heading'>
                        <th>Category</th>
                        <th>Destination</th>
                        <th>Package</th>
                        <th>Transportation</th>
                        <th>Accomodation</th>
                        <th>Code</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                      {props.agentDuties.map((duty) => (
                      <tr className='text-muted table-values' key={duty.id}>
                      <td>{duty.category}</td>
                      <td>{duty.destination}</td>
                      <td>{duty.package}</td>
                      <td>{duty.transportation}</td>
                      <td>{duty.accommodation}</td>
                      <td>{duty.packageCode}</td>
                      </tr>
                      ))}
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgentDutyList