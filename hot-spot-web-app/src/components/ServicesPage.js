import React from 'react';
import './styling/ServicesPage.scss'
import { TiArrowSortedDown } from 'react-icons/ti';
import phone from './assets/Samsung-Galaxy-Z-Fold.png';
import tv from './assets/samsung-tv-samsung-removebg-preview.png';
import microwave from './assets/microwave-removebg-preview.png';
import sound from './assets/home-theatre.png';
import accessories from './assets/Samsung-Online-Accessories_main_1-removebg-preview.png';
import parts from './assets/parts.png';


const ServicesPage = () => {
  return (
    <div className='services'>
      <div className='services-hero-container'>
        <div className='services-hero-container-background'>
          <div className='text-container'>
            <h1>Our Services</h1>
            <p>Delivering top-notch quality services for a wide range of electronic devices.</p>
          </div>
        </div>
      </div>
      <div className='services-quick-navigations'>
        <a className='navigation' href='#mobile-repairs'> 
          <TiArrowSortedDown size={40} className='icon'/>
          <p>Mobile Device repairs</p>
        </a>
        <a className='navigation' href='#display-repairs'> 
          <TiArrowSortedDown size={40} className='icon'/>
          <p>Display & AV Product Repairs</p>
        </a>
        <a className='navigation' href='#microwave-repairs'> 
          <TiArrowSortedDown size={40} className='icon'/>
          <p>Samsung Microwave repairs</p>
        </a>
        <a className='navigation' href='#home-theatre-repairs'> 
          <TiArrowSortedDown size={40} className='icon'/>
          <p>Home Theater Repairs</p>
        </a>
        <a className='navigation' href='#accessories-provisions'> 
          <TiArrowSortedDown size={40} className='icon'/>
          <p>Accessories Provisions</p>
        </a>
        <a className='navigation' href='#services-phone-repairs'> 
          <TiArrowSortedDown size={40} className='icon'/>
          <p>Spare Parts Supply</p>
        </a>
      </div>
      <div id='mobile-repairs' className='services-left-start'>
        <div className='image-container'>
          <img src={phone} alt="Card 1" className="card-image" />
        </div>
        <div className='contents-container'>
          <h2>Mobile Device Repairs</h2>
          <p>We, at our Samsung Customer Service Centre, take great pride in being able to assist our customers with a wide variety of concerns. If you’re experiencing a problem with your Samsung device such as a cracked screen or software upgrades, you can rely on us to help you out. Our team of highly skilled technicians has the expertise and experience necessary to diagnose and repair any issue you might be experiencing. We understand how frustrating it can be when your device doesn’t perform as expected, which is why we are committed to providing you with fast and efficient service. Whether you prefer to visit us in person at our convenient location in Umhlanga or call us directly at 031 569 2806, we are always here to help. Don’t let a malfunctioning device ruin your day – give us a call today and let us take care of it for you!</p>
          <a className='button' href='/pricing'>I'm Interested</a>
        </div>
      </div>
      <div id='display-repairs' className='services-right-start'>
        <div className='image-container'>
          <img src={tv} alt="Card 1" className="card-image" />
        </div>
        <div className='contents-container'>
          <h2>Display & AV Product Repairs</h2>
          <p>Are you currently experiencing issues with your Samsung monitor or TV that is 32 inches or larger? If so, we have great news for you! You have arrived at the perfect destination to solve any problems you may be encountering. We understand how frustrating it can be when you’re trying to enjoy your favorite programs, movies, or games, only to be interrupted by a faulty device. That’s where our expertise comes in – we offer an on-site service to provide you with the support you need to fix any issues and get back to enjoying all of your favorite activities. We are dedicated to providing the highest level of service to our customers and would be honored to assist you with your Samsung device. Carry-in Service only</p>
          <a className='button' href='/contact'>I'm Interested</a>
        </div>
      </div>
      <div id='microwave-repairs' className='services-left-start'>
        <div className='image-container'>
          <img src={microwave} alt="Card 1" className="card-image" />
        </div>
        <div className='contents-container'>
          <h2>Samsung Microwave repairs</h2>
          <p>At our repair service, we specialize in providing top-notch service and repairs to microwaves. As an experienced team of appliance repair professionals, we understand how frustrating it can be when one of your appliance’s malfunctions, disrupting your daily routine. That’s why we are dedicated to providing quick, comprehensive repairs that get you up and running in no time. Count on our team to have all the necessary tools and equipment to get your appliance back to working order as soon as possible. We pride ourselves on our quality workmanship, professionalism, and dedication to customer satisfaction. Contact us today to schedule service and have your appliance running like new again!</p>
          <a className='button' href='/pricing'>I'm Interested</a>
        </div>
      </div>
      <div id='home-theatre-repairs' className='services-right-start'>
        <div className='image-container'>
          <img src={sound} alt="Card 1" className="card-image" />
        </div>
        <div className='contents-container'>
          <h2>Home Theatre Repairs</h2>
          <p>If you are experiencing any issues with your Home Theatre system, DVD player or Sound Bar, we are here to assist you with expert repairs. Our team of skilled technicians are available at our authorised service centres to promptly diagnose the issue and provide reliable solutions to ensure that your equipment is functioning at its best performance level. We understand that your time is valuable, which is why we encourage you to utilise our efficient service by visiting one of our centres or calling us on 031 569 2806. Our friendly and professional customer service team will be happy to guide you through any questions or concerns you may have and provide you with the necessary support. Trust us to get your equipment back to top condition, so you can enjoy uninterrupted entertainment.</p>
          <a className='button' href='/contact'>I'm Interested</a>
        </div>
      </div>
      <div id='accessories-provisions' className='services-left-start'>
        <div className='image-container'>
          <img src={accessories} alt="Card 1" className="card-image" />
        </div>
        <div className='contents-container'>
          <h2>Accessories Provisions</h2>
          <p>At our store, customers can find an extensive selection of high-quality accessories for their mobile phones, tablets, and appliances. We understand how important these devices are to our customers and the vital role they play in their everyday lives. That’s why we take great pride in supplying only the best and most reliable products on the market. Our range includes, screen guards, chargers, and cables, to batteries, headphones, and styluses for selected models. Our knowledgeable and friendly staff are always available to help customers find the perfect accessory to suit their individual needs and preferences. Whether you’re looking for something to enhance your device’s style, function, or durability, you can trust us to have exactly what you need.</p>
          <a className='button' href='/pricing'>I'm Interested</a>
        </div>
      </div>
      <div id='spare-parts' className='services-right-start'>
        <div className='image-container'>
          <img src={parts} alt="Card 1" className="card-image" />
        </div>
        <div className='contents-container'>
          <h2>Spare Parts Supply</h2>
          <p>At our company, we are committed to offering a wide range of Samsung original spare parts for different types of devices in order to meet your needs and ensure you have a hassle-free experience. Whether it’s a gadget you use frequently or something older that you cannot simply replace, it can be a huge relief to know that there is a dependable source for spare parts nearby. Simply provide us with the model and serial number of your device and we will assist you in identifying which particular parts you require. Our warehouse, which is conveniently located in JHB, is fully stocked with quality, genuine parts, ensuring that you will be more than satisfied with the outcome. One of the things that sets us apart from others in the industry is our rapid delivery service. We understand that you may need your replacement parts sooner rather than later, which is why we are proud to offer a delivery time of just 24-48 hours if ordered before 13h00. So, what are you waiting for? Get in touch with us today and let us assist you with your device maintenance needs.</p>
          <a className='button' href='/contact'>I'm Interested</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;