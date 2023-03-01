import React from 'react';
import './ContactHeading.css';

const ContactHeading = () => {
  return (
    <div className='contact-heading__container'>
      <div className='heading-logo'>
        <img src="../../logo-svg/logo-outline-black.svg" alt="Lakbay Logo" />
      </div>
      <div className='brand-name'>
        <p>LAKBAY</p>
      </div>
    </div>
  )
}

export default ContactHeading
