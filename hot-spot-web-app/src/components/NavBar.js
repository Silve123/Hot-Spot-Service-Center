import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styling/NavBar.scss';
import logo0 from './assets/hotspot-logo.png';
import logo1 from './assets/hotspot-logo-One.png';
import logo2 from './assets/hotspot-logo-Two.png';
import logo3 from './assets/hotspot-logo-Three.png';
import serviceCentre from './assets/servicecentre.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logos = [
    logo0,
    logo1,
    logo2,
    logo3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevIndex) => (prevIndex + 1) % logos.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      if (currentScrollY < prevScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav className={`navbar ${isAtTop || isScrollingUp ? 'full-opacity' : ''}`}>
      <div className='logo-container'>
        <Link to="/">
          <img src={logos[currentLogo]} alt='HotSpot-Logo' className='navbar__logo' />
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