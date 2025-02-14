import React from 'react';
import './styling/AboutPage.scss';
import person from './assets/placeholder-person.jpg';
import { FaEye, FaMedal, FaRunning, FaTrophy } from 'react-icons/fa';
import WhoWeAre from './WhoWeAre';
import WhyChooseUs from './WhyChooseUs';

const AboutPage = () => {

  return (
    <div className='about'>
      <div className='about-hero-container'>
        <div className='about-hero-container-content'>
          <h1>About Us</h1>
          <p>Authorised Service Partner, Original Parts, Service guaranteed!</p>
        </div>
      </div>
      <div className='about-summary-container'>
        <FaMedal size={40} className='icon'/>
        <h1>Company Summary</h1>
        <p>
          SAMSUNG Customer Service in Vanderbijlpark is proudly managed and operated by Hot Spot Mobile, a company founded in April 2020 with extensive management, operational, and technical experience. Committed to excellence, our team is well-versed in the intricacies of the IT and service industry, ensuring a knowledgeable and proficient approach to customer needs.
        </p>
        <p>
          As a company, our primary objective is to specialize in a carefully selected range of product sets. Mobile Phones, LCD Monitors, TV’s, Home Theatre Systems, Microwaves, home appliances, Notebooks, and Gaming Consoles form our strategic business product repair lines. Our skilled engineers excel in repairing the entire spectrum of these products, with a specialized focus on modular and electronic board-level repairs, including intricate tasks such as BGA chips and surface-mounted technology. Trust us to bring precision and expertise to the repair of your valuable devices.
        </p>
      </div>
      <WhoWeAre/>
      <div className='about-missions-container'>
        <div className='about-missions-container-background'>
          <div className='mission-cards'>
            <FaEye size={40} className='icon'/>
            <h1>Our Virsion</h1>
            <p>To make our company the place of choice in the Vaal region for all in/out of warranty Samsung repairs. We aspire to be the best, compliant, strategic city, financially sound while pioneering individuals. We aim to have an effective, strong, and focused team.</p>
          </div>
          <div className='mission-cards'>
            <FaTrophy size={40} className='icon'/>
            <h1>Our Achievements</h1>
            <p>2015 TOP Service Centre Award, 2016 Best Parts Return Award, 2016 Best overall Service in Samsung SA, 2016 Best in ‘Turn-around time’ Management Award, 2017 Best in Customer Satisfaction Award, 2017 Best overall Achievement Award, 2018 Best Partner Award.</p>
          </div>
          <div className='mission-cards'>
            <FaRunning size={40} className='icon'/>
            <h1>Our Mission</h1>
            <p>Our mission is to inspire moments of optimism and happiness, achieving the highest standards in servicing the IT sector, motivating, creating and empowering employees, and satisfying the needs of the individuals, clients, businesses or who-ever we have the honor to serve.</p>
          </div>
        </div>
      </div>
      <WhyChooseUs/>
      <div className='about-meet-team'>
        <div className='about-meet-team-background'>
          <h1>Meet The Team</h1>
          <div className='team'>
            <div className='person'>
              <img src={person}/>
              <div className='details'>
                <h1>Ismail Omar</h1>
                <h2>Exective Director</h2>
              </div>
            </div>
            <div className='person'>
              <img src={person}/>
              <div className='details'>
                <h1>Zuleikha Omar</h1>
                <h2>Managing Director</h2>
              </div>
            </div>
            <div className='person'>
              <img src={person}/>
              <div className='details'>
                <h1>Haroon Khosana</h1>
                <h2>Senior Technician</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;