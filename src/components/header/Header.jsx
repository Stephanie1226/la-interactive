import React from 'react';
import { Link } from 'react-router-dom';
import la_logo from '../../images/la_logo.png';
import './Header.styles.css';

const Header = () => {
    return (
      <div className='header'>
        <Link className='logo-container' to="/">
          <img src={la_logo} alt="LA-logo" height="100" />
        </Link>
        <div className='options'>
          <Link className='option' to='/'>HOME</Link>
          <Link className='option' to='/training'>TRAINING</Link>
          <Link className='option' to='/qandas'>Q&A</Link>
          <Link className='option' to='/rates'>RATES</Link>
          <Link className='option' to='/ravereviews'>RAVE REVIEWS</Link>
          <Link className='option' to='/ravereviews'>CONTACT LANA</Link>
        </div>
      </div>
    );
}


export default Header;

