import './styling/Footer.scss';
import { FaEnvelope, FaMap, FaPhone, FaWhatsapp } from 'react-icons/fa';
import samsungLogo from './assets/samsung-plain-Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <a 
                href="https://wa.me/27719080400" 
                className="whatsapp-icon" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaWhatsapp size={25} />
            </a>
            <div className='footer_content-container'>
                <div className='footer_content-container-samsung-tab'>
                    <img src={samsungLogo}/>
                    <p>Diagnosing, troubleshooting, and fixing your complex gadgets with incredible precision and expertise.</p>
                </div>
                <div className='footer_content-container-pages'>
                    <h2>Pages</h2>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/services" >Services</Link></li>
                        <li><Link to="/pricing" >Pricing</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </div>
                <div className='footer_content-container-other'>
                    <h2>Other</h2>
                    <li><Link to="/terms/general" >Term & Conditions</Link></li>
                    <li><Link to="https://www.samsung.com/za/support/warranty/" >Warranty</Link></li>
                    <li><Link to="/https://www.samsung.com/za/offer/samsung-care-plus/" >SMC</Link></li>
                    <li><Link to="/book" >Book</Link></li>
                    <li><Link to="/track" >Track</Link></li>
                </div>
                <div className='footer_content-container-quick-contact'>
                    <h2>Quick Contact</h2>
                    <li>
                        <FaPhone size={25} className='icon' />
                        <Link to="/contact" >071 908 0400</Link>
                    </li>
                    <li>
                        <FaWhatsapp size={25} className='icon'/>
                        <Link to="/contact" >084 212 4444</Link>
                    </li>
                    <li>
                        <FaMap size={25} className='icon' />
                        <Link to="/contact" >31 Solstice Road New Town Centre Umhlanga</Link>
                    </li>
                    <li>
                        <FaEnvelope size={25} className='icon' />
                        <Link to="/contact" >info@samsung-smartcare.co.za</Link>
                    </li>
                </div>
            </div>
            <div className='copyright-container'>
                <h2>@Copyright 2025 HotSpot Samsung Service Centre</h2>
            </div>
        </footer>
    );
};

export default Footer;
