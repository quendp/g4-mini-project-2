import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  
  return (
    <div className='contact-container'>
      <div className='contact-container__details'>
        <ContactDetails/>
      </div>
      <div className='contact-container__form'>
        <ContactForm/>
      </div>  
    </div>
  );
};

export default Contact;