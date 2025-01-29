import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styling/NavBar.scss';
import logo from './assets/hotspot-logo.png';
import serviceCentre from './assets/servicecentre.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className='logo-container'>
        <Link to="/">
          <img src={logo} alt='HotSpot-Logo' className='navbar__logo' />
        </Link>
      </div>
      <div className={`links-container ${isOpen ? 'active' : ''}`}>
        <ul className={'navbar__links'}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        <ul className={'navbar__links'}>
          <li className='important-links'>
            <div className="dropdown">
              <span>Book/Track</span>
              <ul className="dropdown-menu">
                <li><Link to="/book" onClick={closeMenu}>Book</Link></li>
                <li><Link to="/track" onClick={closeMenu}>Track</Link></li>
              </ul>
            </div>
          </li>
          <li className='important-links'>
            <div className="dropdown">
              <span>T's & C's</span>
              <ul className="dropdown-menu">
                <li><Link to="/terms/general" onClick={closeMenu}>General</Link></li>
                <li><Link to="https://www.samsung.com/za/support/warranty/" onClick={closeMenu}>Warranty</Link></li>
                <li><Link to="https://www.samsung.com/za/offer/samsung-care-plus/" onClick={closeMenu}>SMC</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className='service-centre-container'>
        <img src={serviceCentre} alt='service-centre-Logo' className='service-centre__logo' />
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <span className="navbar__hamburger-line"></span>
        <span className="navbar__hamburger-line"></span>
        <span className="navbar__hamburger-line"></span>
      </div>
    </nav>
  );
};

export default NavBar;