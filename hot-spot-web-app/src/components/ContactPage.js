import React from 'react';
import './styling/ContactPage.scss';
import { FaEnvelope, FaMailBulk, FaMapMarked, FaPhone, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import ContactForm from './ContactForm';


const ContactPage = () => {
  return (
    <div className='contact'>
        <div className='contact-hero-container'>
            <div className='contact-hero-container-content'>
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className='contact-tags-container'>
            <div className='single-contact'>
                <a href='https://www.google.com/maps/search/?api=1&query=6 Rabie St, Vanderbijlpark C. E. 6, Vanderbijlpark, 1911' target='_blank'>
                    <FaMapMarked size={25} className='icon' />
                    <h1>Address</h1>
                </a>
                <p>Unit 10, Prime Business Park, 6 Rabie St</p>
            </div>
            <div className='single-contact'>
                <a href='mailto:info@samsung-smartcare.co.za'>
                    <FaMailBulk size={25} className='icon' />
                    <h1>Email</h1>
                </a>
                <p>info@samsung-hotspot.co.za</p>
            </div>
            <div className='single-contact'>
                <a href="tel:0160230349">
                    <FaPhoneAlt size={25} className='icon' />
                    <h1>Phone</h1>
                </a>
                <p>016 023 0349</p>
            </div>
            <div className='single-contact'>
              <a href="https://wa.me/27719080400">
                  <FaWhatsapp size={25} className='icon'/>
                  <h1>Whatsapp</h1>
              </a>
              <p>073 117 1145</p>
            </div>
        </div>
        <ContactForm />
        <div className='map-container'>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.1601226690177!2d27.849789982324545!3d-26.707331124738857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9459a30e3cd281%3A0x3f3ce7bca4f10fa5!2s6%20Rabie%20St%2C%20Vanderbijlpark%20C.%20E.%206%2C%20Vanderbijlpark%2C%201900!5e0!3m2!1sen!2sza!4v1739540109341!5m2!1sen!2sza" ></iframe>
        </div>
    </div>
  );
};

export default ContactPage;