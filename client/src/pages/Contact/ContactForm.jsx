import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, phone, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="contact-form__container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="contact-form__label" htmlFor="name">
            Full Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="contact-form__label" htmlFor="phone">
            Contact Number
          </label>
          <input className="form-control" type="tel" id="phone" required />
        </div>        
        <div className="mb-3">
          <label className="contact-form__label" htmlFor="email">
            Email Address
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="contact-form__label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="contact-form__button" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm
