import React, { useState } from 'react';
import './styling/NavBar.scss';
import logo from './assets/hotspot-logo.png'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className='logo-container'>
                <img src={logo} alt='HotSpot-Logo' className='navbar__logo'/>
            </div>
            <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="navbar__hamburger" onClick={toggleMenu}>
                <span className="navbar__hamburger-line"></span>
                <span className="navbar__hamburger-line"></span>
                <span className="navbar__hamburger-line"></span>
            </div>
        </nav>
    );
};

export default NavBar;