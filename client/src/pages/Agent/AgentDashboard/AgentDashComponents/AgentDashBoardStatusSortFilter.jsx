import React from 'react'

const AgentDashBoardStatusSortFilter = (props) => {
  return (
    <div className="form-group m-1 d-flex justify-content-between">
        <div className='mr-2'>
        <select
        className="form-control fw-bold"
        value={props.selectedStatus}
        onChange={(e) => props.setSelectedStatus(e.target.value)}
        >
            <option value="All">All</option>
            <option value="Waitlist">Waitlist</option>
            <option value="Tentative">Tentative</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
        </select>
        </div>
        <h6 className='text-white px-1'>$</h6>
        <div>
        <select
            className="form-control fw-bold"
            value={props.sortType}
            onChange={(e) => props.setSortType(e.target.value)}
        >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
        </select>
        </div>
    </div>
  )
}

export default AgentDashBoardStatusSortFilter
