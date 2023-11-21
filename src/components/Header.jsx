import React, { useEffect, useState } from 'react';
import SocialIcons from '../modules/SocialIcons.jsx';
import Navbar from './Navbar.jsx';

const Header = (props) => {

  return (
    <>
      <header>
          <div className="header-content for-desktop">
            <div className="main-title-block">
              <div className="main-title">Anahit Sultanova</div>
              <p className='main-role'>Front-end Web developer</p>
              <SocialIcons />
            </div>

            <Navbar />

            <SocialIcons />

            <div className="copyrights">
              All right reserved - S.Anahit ©2023. <br /><br />
              Last update: 26/10/2023
            </div>
          </div>

          <div className="header-content for-mobile">
            <div className="mobile-logo-container">
              <div className="mobile-header-image">
                <a href="#">
                    
                </a>
              </div>
              <div className="mobile-site-title"><a href="#">Alex Smith</a></div>
            </div>

            <a className="menu-toggle mobile-visible">
              <i className="fa fa-bars"></i>
            </a>
          </div>
      </header>
    </>
  )
}

export default Header;