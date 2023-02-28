import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminTopNav from './AdminTopNav'

const AdminNavigations = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{zIndex: '10'}}>
      {/* <button className="navbar-toggler ms-auto mb-2 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" 
        aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className=" navbar-collapse" id="navbarSupportedContent">
        <div className='container-fluid'>
            <div className='row'>
                <AdminSidebar />
                <AdminTopNav />
            </div>
        </div>
      </div>
    </nav>
  )
}

export default AdminNavigations
