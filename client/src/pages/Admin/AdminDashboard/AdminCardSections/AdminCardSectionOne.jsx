import React from 'react'
import './AdminCardSectionOne.css'
import firstCardInfo from '../../AdminDataCollection/SectionOneCardsInfo'

const AdminCardSectionOne = () => {
  return (
    <section style={{backgroundColor: '#ffffff'}}>
        <div className='container-fluid'>
            <div className='row'>
                <div>
                    <div className="row pt-lg-5 mt-lg-2">
                        {
                        firstCardInfo.map((info) =>
                        (<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 p-2" key={info.id}>
                            <div className="card admin-cards__sectionOne">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        {
                                        (info.type === 'Users') ?
                                        <i className="fa-solid fa-users fa-2x text-success"></i> :
                                        (info.type === 'Bookings') ?
                                        <i className="fa-solid fa-plane fa-2x text-muted"></i> : 
                                        (info.type === 'Tours') ? 
                                        <i className="fa-solid fa-mountain-city fa-2x text-primary"></i> :
                                        <i className="fa-solid fa-user-tie fa-2x text-dark"></i>
                                        }
                                        <div className="d-flex flex-column align-items-end justify-content-evenly text-dark">
                                            <h3 className='fw-bold fs-1'>{info.number}</h3>
                                        </div>  
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <span className='fw-bold text-dark'>{info.type}</span>
                                </div>
                            </div>
                        </div>))
                        }
                    </div>
                </div>
            </div>
        </div>
        <h4 className='mb-0 fw-bolder text-muted fs-2' style={{backgroundColor: '#ffffff', textAlign: 'center'}}>Monthly Report</h4>
    </section>
  )
}

export default AdminCardSectionOne
