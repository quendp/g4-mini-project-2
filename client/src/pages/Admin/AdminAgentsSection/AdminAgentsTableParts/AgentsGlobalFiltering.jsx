import React from 'react'
import './AgentsGlobalFiltering.css'

const AgentsGlobalFiltering = (props) => {

  const filterHandler = (e) => {
    props.setFilter(e.target.value)
  }

  return (
    <span className='d-flex mb-2 adminAgent-filter__span'>
        <div className='adminAgent-filter__search'>
            Search:{' '}
        </div>
        <input className='adminAgent-filter__input' 
        value={props.filter || ''} 
        onChange={filterHandler}/>
    </span>
  )
}

export default AgentsGlobalFiltering
