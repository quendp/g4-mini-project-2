import React from 'react'
import './AgentTopNav.css'

const AgentTopNav = () => {
  return (
      <div className='col-xxl-10 col-xl-9 col-lg-9 bg-dark  ms-auto fixed-top px-3 py-2 agentTopNav'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-xl-4 col-lg-4'>
            <h4 className='text-light text-uppercase mb-0'>
              Agent 1
            </h4>
          </div>
          <div className='co-xl-4 col-lg-4'>
            <form>
              <div className='input-group'>
                <input type="text" className='form-control bg-secondary text-light agentTopNav-search__input' />
                <button className='btn btn-light agentTopNav-search__button'>
                <i className="fas fa-search text-primary"></i>
                </button>
              </div>
            </form>
          </div>
          <div className='col-xl-4 col-lg-4'>
            <ul className='navbar-nav'>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-bell text-light fa-lg"></i>
                </a>
              </li>
              <li className='nav-item ms-lg-auto'>
                <a href="#" className="nav-link"><i className="fas fa-sign-out-alt  fa-lg text-light"></i>
                </a>
              </li>
            </ul>
          </div>

          
        </div>
      </div>
  )
}

export default AgentTopNav