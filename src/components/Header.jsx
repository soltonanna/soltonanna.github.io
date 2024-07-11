import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SocialIcons from '../modules/SocialIcons.jsx';
import Navbar from './Navbar.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const desktopMenuVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 }
  };

  return (
    <>
      <header>
        <motion.div
          className="header-content for-desktop"
          initial="hidden"
          animate="visible"
          variants={desktopMenuVariants}
          transition={{ type: 'spring', stiffness: 100, duration: 1.5 }}
        >
          <div className="main-title-block">
            <h3 className="main-title">Sultanova Anahit</h3>
            <p className="main-role">Front-end, Web developer</p>
            <SocialIcons />
          </div>

          <Navbar />

          <SocialIcons />

          <div className="copyrights">
            All right reserved: <br/> S.Anahit ©2024. <br /><br />
            Last update: <br/> 11-Jun-2024
          </div>
        </motion.div>

        <div className="header-content for-mobile container">
          <h3><span>Sultanova Anahit</span> / Front-end, Web developer</h3>
          <button className="menu-toggle mobile-visible" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? 
              <FaTimes size={30} className="icon" /> : 
              <FaBars size={30} className="icon" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial="hidden"
            animate="visible"
            variants={desktopMenuVariants}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Navbar />
            <SocialIcons />
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;
