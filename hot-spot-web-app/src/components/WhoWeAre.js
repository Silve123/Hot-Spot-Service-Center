import phoneRepair from './assets/phone-repair.jpg';
import './styling/WhoWeAreWhyChooseUs.scss';
import { useLocation } from 'react-router-dom';


const WhoWeAre = () =>{
    const location = useLocation();

    return(
        <div className='who-we-are-container'>
        <div className='left-container'>
          <img src={phoneRepair}/>
          <div className='reviews-count'>
            <h2>4.5</h2>
            <p>From 500+ Reviews</p>
          </div>
        </div>
        <div className='right-container'>
          <h2>WHO WE ARE</h2>
          <h1>We Provide Top-Notch Quality Computer Repair Services</h1>
          <p>Welcome to Samsung Customer Services, where excellence meets expertise. With a stellar reputation built on 500+ positive reviews, we pride ourselves on delivering top-notch quality services for a wide range of electronic devices.<br/> <br/> Based in Prime Business Park Vanderbijlpark, our skilled technicians specialize in repairing mobile devices, Samsung appliances, display and AV products, and home theatre systems. Whether your smartphone needs a quick fix, your appliance requires expert attention, or you seek professional assistance for your home entertainment setup, we’ve got you covered.</p>
          {location.pathname === "/" 
            ? <a href='/pricing'>Find Your Device</a>
            : <a href='/services'>See Our Services</a>
          }
        </div>
      </div>
    )
}

export default WhoWeAre;