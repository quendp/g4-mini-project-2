import React, { useState } from 'react'
import './AgentBookings.css'


const AgentBookings = (props) => {


  const statusChangeHandler = (e) => {
      props.onChangeFilter(e.target.value)
  }


  return (
    <section id='bookingsSection'>
      <div className='container-fluid'>
        <div className='row pt-lg-5 mb-lg-5'>
          <div className='col-xxl-10 col-xl-9 col-lg-9 col-12 ms-auto'>
            <div>
              <select className='bg-secondary bookings-button__handler' value={props.statusSelected} onChange={statusChangeHandler}>
                <option value="Waitlist">Waitlist</option>
                <option value="Tentative">Tentative</option>
                <option value="Confirmed">Confirmed</option>
               <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div className='status-handler overflow-auto'>
              <div className="row pt-lg-2 mb-5 mx-2">
                {props.toFilterCards}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgentBookings
     
