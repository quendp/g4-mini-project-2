import React from 'react'
import AdminSidebar from './AdminSidebar'

const AdminNavigations = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-2">
        <div className='container-fluid'>
            <div className='row'>
                <AdminSidebar />
            </div>
        </div>
        
    </nav>
  )
}

export default AdminNavigations
