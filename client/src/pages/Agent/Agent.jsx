import React, { useState, useEffect } from 'react'
import './Agent.css'
import AgentNavbar from './AgentNavbar'
import AgentBookings from './AgentBookings/AgentBookings'
import AgentDutyList from './AgentDutyList/AgentDutyList'
import AgentBookingsWaitlist from './AgentBookings/AgentBookingsModals/AgentBookingsWaitlist'
import AgentBookingsConfirmed from './AgentBookings/AgentBookingsModals/AgentBookingsConfirmed'
import AgentBookingsCancelled from './AgentBookings/AgentBookingsModals/AgentBookingsCancelled'
import starCity from '../../assets/images/cosmopolitan-lights/star-city.webp'
import mtApo from '../../assets/images/explore-the-summit/apo.jpg'
import calleCrisologo from '../../assets/images/look-back-in-history/calle-crisologo-593843_1920.jpg'
import chocolateHills from '../../assets/images/nature-and-culture/bohol.jpg'
import rizalPark from '../../assets/images/look-back-in-history/rizal.jpg'
import fortSantiago from '../../assets/images/look-back-in-history/fort-santiago.jpg'
import rizalShrine from '../../assets/images/look-back-in-history/rizal-shrine.jpg'
import chinatown from '../../assets/images/cosmopolitan-lights/chinatown.jpg'

const AgentDuties = [
  {id: 1, category: 'Cosmopolitan Lights', destination: 'Chinatown', package: 'Economy Class', transportation: 'Private Van, Padyak, Tour Guide', accommodation: 'Hotel Lucky Town', packageCode: 'CoChBa'},
  {id: 2, category: 'Cosmopolitan Lights', destination: 'Chinatown', package: 'Business Class', transportation: 'Private Van, Padyak, Tour Guide', accommodation: 'Hotel Lucky Town', packageCode: 'CoChSt'},
  {id: 3, category: 'Cosmopolitan Lights', destination: 'Chinatown', package: 'First Class', transportation: 'Private Van, Padyak, Tour Guide', accommodation: 'Ramada Manila Central', packageCode: 'CoChPr'},
  {id: 4, category: 'Cosmopolitan Lights', destination: 'Solaire', package: 'Economy Class', transportation: 'Private Van', accommodation: 'Lime Resort Manila', packageCode: 'CoSoBa'},
  {id: 5, category: 'Cosmopolitan Lights', destination: 'Solaire', package: 'Business Class', transportation: 'Private Van', accommodation: 'Savoy Hotel', packageCode: 'CoSoSt'},
  {id: 6, category: 'Cosmopolitan Lights', destination: 'Solaire', package: 'First Class', transportation: 'Private Van, Tour Guide', accommodation: 'Solaire Resort & Casino', packageCode: 'CoSoPr'},
  {id: 7, category: 'Dive Under Water', destination: 'Boracay', package: 'Economy Class', transportation: 'LoremIpsum', accommodation: 'LoremIpsum', packageCode: 'DiBoBa'},
  {id: 8, category: 'Dive Under Water', destination: 'Boracay', package: 'Business Class', transportation: 'LoremIpsum', accommodation: 'LoremIpsum', packageCode: 'DiBoSt'},
  {id: 9, category: 'Dive Under Water', destination: 'Boracay', package: 'First Class', transportation: 'Lorem Ipsum', accommodation: 'Lorem Ipsum', packageCode: 'DiBoPr'},
  {id: 10, category: 'Nature And Culture', destination: 'Barracuda Lake', package: 'Economomy Class', transportation: 'LoremIpsum', accommodation: 'LoremIpsum', packageCode: 'NaBaBA'},
  {id: 11, category: 'Nature And Culture', destination: 'Barracuda Lake', package: 'Business Class', transportation: 'LoremIpsum', accommodation: 'LoremIpsum', packageCode: 'NaBaSt'},
  {id: 12, category: 'Nature And Culture', destination: 'Barracuda Lake', package: 'First Class', transportation: 'LoremIpsum', accommodation: 'LoremIpsum', packageCode: 'NaBaPr'}
]

const travelDetails = [
  {
    id: 1,
    fullName: 'Dia Leocadio',
    destination: 'Star City',
    image: starCity,
    package: 'Basic',
    travelDate: 'March 14 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 1100,
    accommodationCost: 3000,
    otherCost: 1100,
    totalCost: 5200
  },
  {
    id: 2,
    fullName: 'Elnie Ebasan',
    destination: 'Mt. Apo',
    image: mtApo,
    package: 'Premium',
    travelDate: 'March 14 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 1400,
    accommodationCost: 2900,
    otherCost: 1000,
    totalCost: 5300
  },
  {
    id: 3,
    fullName: 'Faith Mariano',
    destination: 'Calle Crisologo',
    image: calleCrisologo,
    package: 'Standard',
    travelDate: 'March 14 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 1300,
    accommodationCost: 2800,
    otherCost: 900,
    totalCost: 5000
  },
  {
    id: 4,
    fullName: 'Gene Espejo',
    destination: 'Chocolate Hills',
    image: chocolateHills,
    package: 'Basic',
    travelDate: 'March 14 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 1200,
    accommodationCost: 2700,
    otherCost: 800,
    totalCost: 4700
  },
  {
    id: 5,
    fullName: 'James Osias',
    destination: 'Rizal Park',
    image: rizalPark,
    package: 'Premium',
    travelDate: 'March 14 2023',
    status: 'Confirmed',
    cancelledReason: '',
    transportationCost: 1700,
    accommodationCost: 2600,
    otherCost: 700,
    totalCost: 5000
  },
  {
    id: 6,
    fullName: 'Joffrey Acula',
    destination: 'Fort Santaiago',
    image: fortSantiago,
    package: 'Standard',
    travelDate: 'March 14 2023',
    status: 'Confirmed',
    cancelledReason: '',
    transportationCost: 1600,
    accommodationCost: 2500,
    otherCost: 600,
    totalCost: 4700
  },
  {
    id: 7,
    fullName: 'Rendi Aguila',
    destination: 'Mt .Apo',
    image: mtApo,
    package: 'Basic',
    travelDate: 'March 14 2023',
    status: 'Cancelled',
    cancelledReason: 'Lorem ipsum dolor sit amet.',
    transportationCost: 1500,
    accommodationCost: 2400,
    otherCost: 500,
    totalCost: 4400
  },
  {
    id: 8,
    fullName: 'Mohn Javier',
    destination: 'Fort Santiago',
    image: fortSantiago,
    package: 'Premium',
    travelDate: 'March 14 2023',
    status: 'Waitlist',
    cancelledReason: '',
    transportationCost: 2000,
    accommodationCost: 2300,
    otherCost: 400,
    totalCost: 4700
  },
  {
    id: 9,
    fullName: 'Ram Libres',
    destination: 'Rizal Shrine',
    image: rizalShrine,
    package: 'Standard',
    travelDate: 'March 14 2023',
    status: 'Cancelled',
    cancelledReason: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet.',
    transportationCost: 1900,
    accommodationCost: 2200,
    otherCost: 300,
    totalCost: 4400
  },
  {
    id: 10,
    fullName: 'Sketch Caneba',
    destination: 'Chinatown',
    image: chinatown,
    package: 'Basic',
    travelDate: 'March 14 2023',
    status: 'Tentative',
    cancelledReason: '',
    transportationCost: 1800,
    accommodationCost: 2100,
    otherCost: 200,
    totalCost: 4100
  }
]

const Agent = () => {

  const [filteredStatus, setFilteredStatus] = useState('Waitlist')

  /*for proceed button */
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (transportationCost, accommodationCost, otherCost, totalCost) => {
    let tempData = [transportationCost, accommodationCost, otherCost, totalCost]
    setTempdata(item => [1, ...tempData])
    return setModel(true)
  }

  /*for submit button */
  const [modelSubmit, setModelSubmit] = useState(false)
  const [tempsubmitdata, setTempSubmitData] = useState([]) 

  const getDataSubmit = (image, destination, packag, fullname) => {
    let tempSubmitdata = [image, destination, packag, fullname]
    setTempSubmitData(item => [1, ...tempSubmitdata])
    return setModelSubmit(true)
  }

  /*for remove button */
  const [modelRemove, setModelRemove] = useState(false)
  const [tempremovedata, setTempRemoveData] = useState([])

  const getDataRemove = (fullName, reason) => {
    let tempRemovedata = [fullName, reason]
    setTempRemoveData(item => [1, ...tempRemovedata])
    return setModelRemove(true)
  }

  /*for filtereng status */
  const filterChangeHandler = (selectedStatus) => {
      setFilteredStatus(selectedStatus)
  }

  const filteredCards = travelDetails.filter((travelDetail) => {
    return travelDetail.status === filteredStatus
  })



  const toFilterCards = (filteredCards.length === 0)? 
  <h2 className='text-secondary text-center'>No Booking Status</h2>:filteredCards.map((travelDetail, index) => (

      <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 p-2" key={index}>
        <div className="card cards">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className='d-flex flex-column align-items-start justify-content-evenly text-secondary'>
                <h5>{travelDetail.destination}</h5>
                <h6>{travelDetail.fullName}</h6>
              </div>
              <div className="d-flex flex-column align-items-end justify-content-evenly text-secondary">
                <h6>{travelDetail.package}</h6>                            
                <h6>{travelDetail.travelDate}</h6>
              </div>  
            </div>
          </div>
            <div className="card-footer text-secondary d-flex alight-items-center justify-content-between">

              {(travelDetail.status === 'Waitlist')?
              <button type='button' className='bookings-card__btn btn-outline-info' onClick={() => getData(travelDetail.transportationCost, travelDetail.accommodationCost, travelDetail.otherCost, travelDetail.totalCost)}>Proceed</button>:(travelDetail.status === 'Tentative')?<span className='cards-span2'>Required Confirmation</span>:(travelDetail.status === 'Confirmed')?<button type='button' className='bookings-card__btn2 btn outline-info' onClick={() => getDataSubmit(travelDetail.image, travelDetail.destination, travelDetail.package, travelDetail.fullName)}>View</button>:<button type='button' className='bookings-card__btn3 btn-outline-info'onClick={() => getDataRemove(travelDetail.fullName, travelDetail.cancelledReason)}>Remove</button>}

              <span className='cards-span'>{travelDetail.status}</span>
            </div>
        </div>
      </div>
      ))

  return (
    <div className='agent-body'>
      <AgentNavbar />
      <AgentBookings
      key={travelDetails.id}
      statusSelected={filteredStatus}
      onChangeFilter={filterChangeHandler}
      toFilterCards={toFilterCards}
      />
      <AgentDutyList 
      key={AgentDuties.id}
      agentDuties={AgentDuties}
      category={AgentDuties.category}
      destination={AgentDuties.destination}
      package={AgentDuties.package}
      transportation={AgentDuties.transportation}
      accommodation={AgentDuties.accommodation}
      packageCode={AgentDuties.packageCode}
      />
      {
        model === true ? <AgentBookingsWaitlist 
        transportationCost={tempdata[1]}
        accommodationCost={tempdata[2]}
        otherCost={tempdata[3]}
        totalCost={tempdata[4]}
        hide={() => setModel(false)}
        /> : ''
      }
      {
        modelSubmit === true ? <AgentBookingsConfirmed 
        image={tempsubmitdata[1]}
        destination={tempsubmitdata[2]}
        package={tempsubmitdata[3]}
        fullName={tempsubmitdata[4]}
        hide={() => setModelSubmit(false)}
        />: ''
      }
      {
        modelRemove === true ? <AgentBookingsCancelled 
        fullName={tempremovedata[1]}
        reason={tempremovedata[2]}
        hide={() => setModelRemove(false)}
        />: ''
      }
      
    </div>
  )
}

export default Agent