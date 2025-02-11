import { FaCertificate, FaPeopleGroup } from 'react-icons/fa6';
import tvRepair from './assets/tv-fix-image.jpg';
import { FaMobile, FaTv, FaSmile } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './styling/WhoWeAreWhyChooseUs.scss';


const WhyChooseUs = () => {
    const location = useLocation();

    return(
        <div className='why-choose-us-container'>
            <div className='left-container'>
                <img src={tvRepair}/>
                <div className='reviews-count'>
                    <h2>5+</h2>
                    <p>Years Experience</p>
                </div>
            </div>
            <div className='right-container'>
                <h2>WHY CHOOSE US</h2>
                <h1>We Fix All Devices & All Problems​ with Ease</h1>
                <p>Embark on a journey of device repairs that transcends the ordinary. Our services are meticulously crafted for perfection, guaranteeing that your devices are treated with the utmost care and attention they deserve.</p>
                {
                    location.pathname === "/about" ?
                    <>
                        <div className='cards-container'>
                            <div className='single-card'>
                                <FaMobile className='icon'/>
                                <div className='content'>
                                    <h2>5000+</h2>
                                    <p>Phone Repairs</p>
                                </div>
                            </div>
                            <div className='single-card'>
                                <FaTv className='icon'/>
                                <div className='content'>
                                    <h2>2500+</h2>
                                    <p>Appliance Repairs</p>
                                </div>
                            </div>
                        </div>
                        <div className='cards-container'>
                            <div className='single-card'>
                                <FaPeopleGroup className='icon' />
                                <div className='content'>
                                    <h2>5+</h2>
                                    <p>Expert Technicians</p>
                                </div>
                            </div>
                            <div className='single-card'>
                                <FaSmile className='icon' />
                                <div className='content'>
                                    <h2>99%</h2>
                                    <p>Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='cards-container'>
                            <div className='single-card'>
                                <FaCertificate className='icon' size={50}/>
                                <div className='content'>
                                    <h2>Professional Technicians</h2>
                                    <p>Rely on our team of seasoned technicians, each equipped with the expertise and commitment needed to provide unparalleled repair services for your device.</p>
                                </div>
                            </div>
                        </div>
                        <div className='cards-container'>
                            <div className='single-card'>
                                <FaMobile className='icon' size={50}/>
                                <div className='content'>
                                    <h2>Affordable Prices</h2>
                                    <p>Exceptional repairs at budget-friendly rates – because outstanding service shouldn't drain your wallet.</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default WhyChooseUs;