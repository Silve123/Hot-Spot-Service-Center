import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styling/NavBar.scss';
import logo from './assets/hotspot-logo.png';
import serviceCentre from './assets/servicecentre.png'

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
            <img src={logo} alt='HotSpot-Logo' className='navbar__logo' />
        </div>
        <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>
            <li><Link to="/book-track" onClick={closeMenu}>Book/Track</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/terms&conditions" onClick={closeMenu}>T's & C's</Link></li>
        </ul>
        <div className="navbar__hamburger" onClick={toggleMenu}>
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
        </div>
        <div className='service-centre-container'>
            <img src={serviceCentre} alt='service-centre-Logo' className='service-centre__logo' />
        </div>
      </nav>
    );
};

export default NavBar;