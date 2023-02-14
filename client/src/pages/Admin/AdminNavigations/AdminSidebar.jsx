import React from 'react'
import './AdminSidebar.css'
import Image from '../../../assets/images/user-avatar/user1.jpg'

const AdminSidebar = () => {
  return (
    <div className="col-xxl-2 col-xl-3 col-lg-3  admin-sidebar fixed-top">
        <a href='#' className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 admin-bottom__border">
            LAKBAY
        </a>
        <div className="bottom-border pb-3">
            <img src={Image} alt="pogi" width="50" className="rounded-circle me-3"/>
            <a href="#" className="text-decoration-none text-white">Juan Delacruz</a>
        </div>
        <ul className="navbar-nav flex-column mt-2">
            <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 admin-sidebar__panel">
                <i className="fa-solid fa-house-user text-light fa-lg me-3"></i>Dashboard</a>
            </li>
            <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 admin-sidebar__link">
                <i className="fa-solid fa-user text-light fa-lg me-3"></i>Bookings</a>
            </li>
            <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 admin-sidebar__link">
                <i className="fa-solid fa-inbox text-light fa-lg me-3"></i>Agents</a>
            </li>
            <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 admin-sidebar__link">
                <i className="fa-solid fa-book text-light fa-lg me-3"></i>Package</a>
            </li>
        </ul>
    </div>
  )
}

export default AdminSidebar
