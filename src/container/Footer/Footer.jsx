import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" style={{ color: "#7D0202"}}>Contact Us</h1>
        <p className="p__opensans" style={{ color: "black"}}>101 George Street, Dalby, Queensland</p>
        <p className="p__opensans" style={{ color: "black"}}>0141-129240</p>
        <p className="p__opensans" style={{ color: "black"}}>0141-129240</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.curry} alt="footer_logo" />
        <p className="p__opensans" style={{ color: "black"}}>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext" style={{ color: "#7D0202"}}>Working Hours</h1>
        <p className="p__opensans" style={{ color: "black"}}>Monday-Friday:</p>
        <p className="p__opensans" style={{ color: "black"}}>08:00 am - 12:00 am</p>
        <p className="p__opensans" style={{ color: "black"}}>Saturday-Sunday:</p>
        <p className="p__opensans" style={{ color: "black"}}>07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" style={{ color: "black"}}>2023 Curry Resort. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;