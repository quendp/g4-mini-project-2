import React from 'react'
import './AgentSidebar.css'
import user2 from '../../../assets/images/user-avatar/user2.jpg'

const AgentSidebar = () => {
  return (
    <div className='row'>
      <div className='col-xxl-2 col-xl-3 col-lg-3  sidebar fixed-top'>
        <a href="#" className='navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border navbar-brand__name'>
          LAKBAY
        </a>
        <div className='bottom-border pb-3'>
          <img src={user2} width='50' className='rounded-circle me-3'/>
          <a href="#" className="text-decoration-none text-white agent-name">Tyron Perez</a>
        </div>
        <ul className='navbar-nav flex-column mt-2'>
          <li className="nav-item">
            <a href="#assignedDutySection" to='' className="nav-link text-white p-3 mb-2 bg-secondary sidebar-panel">
              <i className="fa-solid fa-list text-light fa-lg me-3"></i>Assigned Duties
            </a>
          </li>
          <li className="nav-item">
            <a href="#bookingsSection" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fa-solid fa-address-card text-light fa-lg me-3"></i>Bookings</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fa-solid fa-bell text-light fa-lg me-3"></i>Notifications</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AgentSidebar
