import React from "react";
import './Footer.styles.css';
import { IconContext } from "react-icons";
import { FaMapMarkerAlt, FaEnvelope, FaLink, FaEnvelopeSquare, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-row'>
        <div className='footer-col1'>
          <IconContext.Provider value={{ color: "grey", className: "loc-icon" }}>
            <div className='tc loc-icon'>
              <FaMapMarkerAlt />
            </div>
          </IconContext.Provider>
          <h3>LA Interactive</h3>
          <span> 
            Phone: 403-560-5262 <br />
            Location: Downtown Calgary <br />
          </span>
        </div>
        <div className='footer-col2'>
          <IconContext.Provider value={{ color: "grey", className: "env-icon" }}>
            <div className='tc env-icon'>
              <FaEnvelope />
            </div>
          </IconContext.Provider>
          <a href="mailto:lana@la-interactive.com">lana@lanaasuchak.com</a>
        </div>
        <div className='footer-col3'>
          <IconContext.Provider value={{ color: "grey", className: "link-icon" }}>
            <div className='tc link-icon'>
              <FaLink />
            </div>
          </IconContext.Provider>
          <h3>Connect With Me</h3>
          <div className='link-icons'>
            <div>
              <IconContext.Provider value={{ color: `#70AF82`, className: "envsq-icon" }}>
                <div className='tc fb-icon grow-large'>
                  <a href="mailto:lana@la-interactive.com"><FaEnvelopeSquare /></a>
                </div>
              </IconContext.Provider>
            </div>
            <div>
              <IconContext.Provider value={{ color: `#7aa0bd`, className: "fb-icon" }}>
                <div className='tc fb-icon grow-large'>
                  <a href="mailto:lana@la-interactive.com"><FaFacebookSquare /></a>
                </div>
              </IconContext.Provider>
            </div>
            <div>
              <IconContext.Provider value={{ color: `#FA8072`, className: "ins-icon" }}>
                <div className='tc fb-icon grow-large'>
                  <a href="mailto:lana@la-interactive.com"><FaInstagramSquare /></a>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
      <div className='tc copyright'>
        <span>© Copyright 2020 Stephanie Wang, Design by Stephanie Wang</span>
      </div>
    </div>
  );
}

export default Footer;