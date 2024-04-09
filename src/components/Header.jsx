import React, { useState, useEffect } from 'react';
import SocialIcons from '../modules/SocialIcons.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
          <div className={`header-content for-desktop ${isMobileMenuOpen ? 'visible' : 'hidden'}`}>
            <div className="main-title-block">
              <h3 className="main-title">Sultanova Anahit</h3>
              <p className='main-role'>Front-end, Web developer</p>
              <SocialIcons />
            </div>

            <Navbar />

            <SocialIcons />

            <div className="copyrights">
              All right reserved - S.Anahit ©2024. <br /><br />
              Last update: 10/04/2024
            </div>
          </div>

          <div className={`header-content for-mobile container`}>
              <h3><span>Sultanova Anahit</span> / Front-end, Web developer</h3>
              <button className="menu-toggle mobile-visible" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? 
                <FaTimes size={30} className="icon" /> : 
                <FaBars size={30} className="icon" />}
              </button>
          </div>
      </header>
    </>
  )
}

export default Header;