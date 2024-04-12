import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const FindUs = () => (
  <div className='app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant'style={{marginBottom:'3rem', color: "#7D0202"}}>Find us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ color: 'black'}}>101 George Street, Dalby, Queensland</p>
        <p className="p__cormorant" style={{ color: '#7D0202', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans" style={{ color: 'black'}}>Mon - Fri: 10:00 am - 05:00 am</p>
        <p className="p__opensans" style={{ color: 'black'}}>Sat - Sun: 10:00 am - 04:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{backgroundColor: "#7D0202", color: "white", marginTop: '2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus'/>
    </div>
  </div>
);

export default FindUs;
