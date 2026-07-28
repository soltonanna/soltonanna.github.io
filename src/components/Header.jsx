import React, { useState } from 'react';
import SocialIcons from '../modules/SocialIcons.jsx';
import Navbar from './Navbar.jsx';
import { FaBars, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Header = ({ isSidebarOpen = true, onToggleSidebar }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <div
          className={`header-content for-desktop ${
            isSidebarOpen ? 'is-open' : 'is-closed'
          }`}
        >
          <div className="main-title-block">
            <h3 className="main-title">Sultanova Anahit</h3>
            <p className="main-role">Web developer</p>
            <SocialIcons />
          </div>

          <Navbar />

          <SocialIcons />
        </div>

        <button
          type="button"
          className={`sidebar-toggle ${isSidebarOpen ? 'is-open' : 'is-closed'}`}
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          aria-expanded={isSidebarOpen}
        >
          {isSidebarOpen ? (
            <FaChevronLeft size={14} className="icon" />
          ) : (
            <FaChevronRight size={14} className="icon" />
          )}
        </button>

        <div className="header-content for-mobile container">
          <h3><span>Sultanova Anahit</span> / Front-end, Web developer</h3>
          <button className="menu-toggle mobile-visible" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? 
              <FaTimes size={30} className="icon" /> : 
              <FaBars size={30} className="icon" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Navbar />
            <SocialIcons />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
