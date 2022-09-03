import React from 'react';
import '../../css/style.css';
import Logogreen from '../../img/logo-green.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <img src={Logogreen} alt='footer green logo' />
      </div>
      <ul className='footer__nav'>
        <li>About us</li>
        <li>Download apps</li>
        <li>Become a guide</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <p className='footer__copyright'>
        &copy; by Ayyubxon Kamoldinov. Feel free to use this project for your
        own purposes, EXCEPT producing your own course or tutorials!
      </p>
    </footer>
  );
};

export default Footer;
