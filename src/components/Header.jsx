import React, { useEffect, useState } from 'react';
import SocialIcons from '../modules/SocialIcons.jsx';
import Navbar from './Navbar.jsx';
import MainImg from '../media/personal_photo.jpg';

const Header = (props) => {
  //const [isSticky, setIsSticky] = useState(false);
    
  // useEffect(() => {
  //     const handleScroll = () => {
  //         setIsSticky(window.scrollY > 200);
  //     }
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll)
  // }, []); 
  // {`${isSticky ? 'sticky' : ''}`}

  return (
    <>
      <header>
          <div className="header-content">
            
            {/* <div className='personal-photo'>
              <img src={MainImg} alt='my-photo'/>
            </div> */}

            <div className="main-title-block">
              <div className="main-title">Anahit Sultanova</div>
              <p className='main-role'>Front-end Web developer</p>
              <SocialIcons />
            </div>

            <Navbar />

            <SocialIcons />

            <div className="copyrights">
              All right reserved - S.Anahit ©2023. <br /><br />
              Last update: 22/06/2023
            </div>
          </div>
      </header>

      <div className="mobile-header">
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
    </>
  )
}

export default Header;