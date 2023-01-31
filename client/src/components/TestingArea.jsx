import React, {useState} from 'react'
import './TestingArea.css'

import About from '../pages/About/About'
import Agent from '../pages/Agent/Agent'
import HomeTestimonials from '../pages/Home/HomeTestimonials/HomeTestimonials'
import Contact from '../pages/Contact/Contact'
import HomeStories from '../pages/Home/HomeStories/HomeStories'


const TestingArea = () => {

  const [isTesting, setIsTesting] = useState(false);
  const [currentDeveloper, setCurrentDeveloper] = useState("");

  const startTesting = (developer) => {
    setIsTesting(true)
    setCurrentDeveloper(developer)
  }

  return (
    <div>
      {
      !isTesting && (
        <div className='testingArea-wrapper vh-100 d-flex flex-column justify-content-center align-items-center'>
        <button onClick={ () => {startTesting("roland")} }  className='cta-dark rounded-pill mb-3' >
          Click here for Sir Roland
        </button>
        <button onClick={ () => {startTesting("nherwin")} } className='cta-dark rounded-pill mb-3'>
          Click here for Sir Nherwin
        </button>
        <button onClick={ () => {startTesting("radilyn")} } className='cta-dark rounded-pill mb-3'>
          Click here for Ms. Radilyn
        </button>
        <button onClick={ () => {startTesting("ce")} } className='cta-dark rounded-pill mb-3'>
          Click here for Ms. CE
        </button>
        <button onClick={ () => {startTesting("nick")} } className='cta-dark rounded-pill mb-3'>
          Click here for Sir Nick
        </button>
      </div>
      )
    }
    {isTesting && currentDeveloper == "roland" && (
        <About />
    )}
    {isTesting && currentDeveloper == "nherwin" && (
        <Agent />
    )}
    {isTesting && currentDeveloper == "radilyn" && (
        <HomeTestimonials />
    )}
    {isTesting && currentDeveloper == "ce" && (
        <Contact />
    )}
    {isTesting && currentDeveloper == "nick" && (
        <HomeStories />
    )}

    </div>
  )
}

export default TestingArea
