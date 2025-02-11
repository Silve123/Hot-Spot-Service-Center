import React from 'react';
import './styling/HomePage.scss'
import WhoWeAre from './WhoWeAre';
import WhyChooseUs from './WhyChooseUs';
import { FaWhatsapp } from 'react-icons/fa6';
import phone from './assets/Samsung-Galaxy-Z-Fold.png';
import tv from './assets/samsung-tv-samsung-removebg-preview.png';
import microwave from './assets/microwave-removebg-preview.png';
import sound from './assets/home-theatre.png';
import accessories from './assets/Samsung-Online-Accessories_main_1-removebg-preview.png';
import parts from './assets/parts.png';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home-hero-container'>
        <div className='home-hero-container-background'>
          <div className='text-container'>
            <h2>CUSTOMER SERVICE REPAIR CENTRE VANDERBIJLPARK</h2>
            <h1>With Us, You’ll Be Able To Fix It Faster!</h1>
            <p>Diagnosing, troubleshooting, and fixing your complex gadgets with incredible precision and expertise.</p>
          </div>
          <div className='buttons-container'>
            <a className='find-device'>Find Your Device</a>
            <p><a href="tel:0160230349">Call Us Now!!!</a><br/>016 023 0349</p>
          </div>
        </div>
      </div>
      <WhoWeAre/>
      <div className='whatsapp-container'>
        <a href="https://wa.me/27719080400">
          <FaWhatsapp size={25} className='icon'/>
          <p>Click here to Whatsapp us for a quick quote</p>
        </a>
        <p>In a rush? WhatsApp us with your device repair requirements</p>
      </div>
      <div className='home-our-services'>
        <div className='home-our-services-text-container'>
          <h2>OUR SERVICES</h2>
          <h1>Comprehensive Solutions Tailored to Your Needs.</h1>
          <p>At Samsung Customer Services, we go beyond mere repairs – we offer transformative solutions for all your electronic needs. From seamless mobile device repairs to expert servicing of Samsung appliances, cutting-edge display and AV products, and personalized home theatre setups, our dedicated team of professionals is committed to delivering excellence. Elevate your tech experience with us, where precision meets passion.</p>
        </div>
        <div className='home-our-services-container'>
          <div className="card-container">
            <div className="card">
              <img src={phone} alt="Card 1" className="card-image" />
              <h2>Mobile Device Repairs</h2>
              <p className="card-description">
                We can help you with anything, from a cracked screen to software upgrades. Visit Us.
              </p>
              <a href='/pricing' className="card-tag">Learn more</a>
            </div>
            <div className="card">
              <img src={tv} alt="Card 2" className="card-image" />
              <h2>Display & AV Product Repairs</h2>
              <p className="card-description">
                If you have a Samsung Monitor, 32’ TV or larger that is faulty, then you come to right place. 
              </p>
              <a href='services' className="card-tag">Learn more</a>
            </div>
            <div className="card">
              <img src={microwave} alt="Card 3" className="card-image" />
              <h2>Samsung Microwave repairs</h2>
              <p className="card-description">
                Service and repairs to microwaves. We have all tools to get you up and running in no time.
              </p>
              <a href='services' className="card-tag">Learn more</a>
            </div>
            <div className="card">
              <img src={sound} alt="Card 4" className="card-image" />
              <h2>Home Theater Repairs</h2>
              <p className="card-description">
                Repairs to Home Theatre systems, DVD players and Sound Bars. The quickest way is for you to visit Us.
              </p>
              <a href='services' className="card-tag">Learn more</a>
            </div>
            <div className="card">
              <img src={accessories} alt="Card 5" className="card-image" />
              <h2>Accessories Provisions</h2>
              <p className="card-description">
                Supply of all accessories for mobile phones, tablets and appliances.
              </p>
              <a href='pricing' className="card-tag">Learn more</a>
            </div>
            <div className="card">
              <img src={parts} alt="Card 6" className="card-image" />
              <h2>Spare Parts Supply</h2>
              <p className="card-description">
                Simply tell us the model of your product and what you are looking for. We are here to assist you.
              </p>
              <a href='services' className="card-tag">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs/>
    </div>
  );
}; 

export default HomePage;