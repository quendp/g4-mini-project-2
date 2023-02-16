import React from 'react'
import './BookingsGlobalFiltering.css'

const BookingsGlobalFiltering = (props) => {
 
  const filterhandler = (e) => {
    props.setFilter(e.target.value)
  }

  return (
    <span className='d-flex mb-2 global-filter__span'>
        <div className='global-filter__search'>
            Search: {' '}
        </div>
        <input className='global-filter__input' value={props.filter || ''} 
        onChange={filterhandler}
        />
    </span>
  )
}

export default BookingsGlobalFiltering
