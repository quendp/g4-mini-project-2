import React, { useState } from 'react'
import './AgentSidebar.css'
import user2 from '../../../assets/images/user-avatar/user2.jpg'
import AgentDashboard from '../AgentDashboard/AgentDashboard'
import AgentSidebarWaitlistNav from '../AgentSidebarNavItemsSections/AgentSidebarWaitlistNav'
import AgentSidebarTentativeNav from '../AgentSidebarNavItemsSections/AgentSidebarTentativeNav'
import AgentSidebarConfirmedNav from '../AgentSidebarNavItemsSections/AgentSidebarConfirmedNav'
import AgentSidebarCancelledNav from '../AgentSidebarNavItemsSections/AgentSidebarCancelledNav'

const AgentSidebar = (props) => {
  
  const [isShowing, setIsShowing] = useState(true);

  const [currentNavSection, setCurrentNavSection] = useState('Dashboard')

  const startShowing = (section) => {
    setIsShowing(true)
    setCurrentNavSection(section)
    console.log(section.target)
    
  }

  return (
    <>


    <div className='row'>
      <div className='col-xxl-2 col-xl-3 col-lg-3  agentSidebar fixed-top'>
        <a href="#" className='navbar-brand text-white d-block mx-auto text-center py-3 mb-4 agentSidebar-bottom__border agentSidebar-brand__name'>
          LAKBAY
        </a>
        <div className='bottom-border pb-3'>
          <img src={user2} width='50' className='rounded-circle me-3'/>
          <a href="#" className="text-decoration-none text-white agent-name">Tyron Perez</a>
        </div>
        <ul className='navbar-nav flex-column mt-2'>
          <li className="nav-item" onClick={() => {startShowing('Dashboard')}}>
            <a href="#" to='' className="nav-link text-white p-3 mb-2 bg-secondary agentSidebar-dashboard__navItem">
              <i className="fa-solid fa-chart-line text-light fa-lg me-3"></i>Dashboard
            </a>
          </li>
          {
          
          <>
        
          <li className="nav-item sidebar-item" onClick={() => {startShowing('Waitlist')}}>
            <a href="#" className="nav-link text-white p-3 mb-2 agentSidebar-navItem"><i className="fa-solid fa-list text-light fa-lg me-3"></i>Waitlist</a>
          </li>
          <li className="nav-item sidebar-item" onClick={() => {startShowing('Tentative')}}>
            <a href="#" className="nav-link text-white p-3 mb-2 agentSidebar-navItem"><i className="fa-solid fa-question text-light fa-lg me-3"></i>Tentative</a>
          </li>
          <li className="nav-item sidebar-item" onClick={() => {startShowing('Confirmed')}}>
            <a href="#" className="nav-link text-white p-3 mb-2 agentSidebar-navItem"><i className="fa-solid fa-check text-light fa-lg me-3"></i>Confirmed</a>
          </li>
          <li className="nav-item sidebar-item" onClick={() => {startShowing('Cancelled')}}>
            <a href="#" className="nav-link text-white p-3 mb-2 agentSidebar-navItem"><i className="fa-solid fa-ban text-light fa-lg me-3"></i>Cancelled</a>
          </li>
          </>
          
          }
        </ul>
      </div>
    </div>
          
          {
             isShowing && currentNavSection ==
             'Dashboard' &&
             <AgentDashboard 
              DUMMY_CHART={props.DUMMY_CHART}
              month={props.month}
              cosmopolitanLights={props.cosmopolitanLights}
              diveUnderWater={props.diveUnderWater}
              exploreTheSummit={props.exploreTheSummit}
              lookBackInHIstory={props.lookBackInHIstory}
              natureAndCulture={props.natureAndCulture}

      
              travelDetails={props.travelDetails}
              fullName={props.fullName}
              destination={props.destination}
              travelDate={props.travelDate}
              status={props.status}

              statusesNumber={props.statusesNumber}
              estatus={props.estatus}
              number={props.number}
              />
          }
             

          {
            isShowing && currentNavSection ==
            'Waitlist' && <AgentSidebarWaitlistNav 
            travelDetails={props.travelDetails}
            transportationCost={props.transportationCost}
            accommodationCost={props.accommodationCost}
            otherCost={props.otherCost}
            totalCost={props.totalCost}
            />
          }
          {
            isShowing && currentNavSection ==
            'Tentative' &&
            <AgentSidebarTentativeNav 
            travelDetails={props.travelDetails}
          />
          }
          {
            isShowing && currentNavSection ==
            'Confirmed' &&
            <AgentSidebarConfirmedNav 
            travelDetails={props.travelDetails}
            destination={props.destination}
            package={props.package}
            fullName={props.fullName}
          />
          }
          {
            isShowing && currentNavSection ==
            'Cancelled' &&
            <AgentSidebarCancelledNav
            travelDetails={props.travelDetails}
            fullName={props.fullName}
            cancelledReason={props.cancelledReason}
          />
          }
          
          </>
          
  )
}

export default AgentSidebar
