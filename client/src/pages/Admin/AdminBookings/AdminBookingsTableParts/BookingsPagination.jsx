import React from 'react'
import './BookingsPagination.css'
import BookingTablePageSize from './BookingTablePageSize'

const BookingsPagination = (props) => {

  return (
    <div className='bookings-table__pagination'>
          <span className='bookings-pagination__whatPage'>
            Page{' '}
            <strong className='bookings-pagination__numberPage'>
                {props.pageIndex + 1} of {props.pageOptions.length}
            </strong>{' '}
          </span>
          <BookingTablePageSize 
          pageSize={props.pageSize}
          setPageSize={props.setPageSize}
          />
          <button  className='bookings-pagination__button' onClick={() => props.gotoPage(0)} disabled={!props.canPreviousPage}>{'<<'}</button>
          <button  className='bookings-pagination__button' onClick={() => props.previousPage()} disabled={!props.canPreviousPage}>Previous</button>
          <button  className='bookings-pagination__button' onClick={() => props.nextPage()} disabled={!props.canNextPage}>Next</button>
          <button className='bookings-pagination__button'  onClick={() => props.gotoPage(props.pageCount - 1)} disabled={!props.canNextPage}>{'>>'}</button>
    </div>
    
  )
}

export default BookingsPagination
