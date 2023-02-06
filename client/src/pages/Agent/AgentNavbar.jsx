import React from 'react'
import AgentSidebar from './AgentSidebar/AgentSidebar'
import AgentTopNav from './AgentTopNav/AgentTopNav'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light px-2'>
      <button className="navbar-toggler ms-auto mb-2 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="container-fluid">
                  <AgentSidebar />
                  <AgentTopNav />
                </div>
            </div>
    </nav>
  )
}

export default Navbar