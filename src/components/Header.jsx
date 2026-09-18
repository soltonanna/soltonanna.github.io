import React, { useEffect, useState } from 'react';
import { FiChevronsLeft, FiChevronsRight, FiDownload } from 'react-icons/fi';
import SocialIcons from '../modules/SocialIcons.jsx';
import Button from '../modules/Button.jsx';
import Navbar from './Navbar.jsx';
import useLockBodyScroll from '../hooks/useLockBodyScroll';
import useEscape from '../hooks/useEscape';
import { downloadCv } from '../utils/download-cv.js';

const Monogram = () => (
  <a href="#main-info" className="monogram" aria-label="Sultanova Anahit — back to top">SA</a>
);

/**
 * Desktop: sticky left rail (collapsible).
 * Mobile/tablet: compact top bar + full-screen menu sheet.
 */
const Header = ({ activeId, isSidebarOpen = true, onToggleSidebar }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useLockBodyScroll(isMobileMenuOpen);
  useEscape(isMobileMenuOpen, () => setMobileMenuOpen(false));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      {/* Desktop rail */}
      <aside className={`rail ${isSidebarOpen ? 'is-open' : 'is-collapsed'}`}>
        <div className="rail__top">
          <Monogram />
          <div className="rail__identity">
            <p className="rail__name">Sultanova Anahit</p>
            <p className="rail__role">Full-Stack Developer</p>
          </div>
        </div>

        <Navbar activeId={activeId} collapsed={!isSidebarOpen} className="rail__nav" />

        <div className="rail__bottom">
          <SocialIcons variant="compact" className="rail__social" />
          <Button
            variant="secondary"
            size="sm"
            className="rail__cv"
            onClick={downloadCv}
            icon={<FiDownload aria-hidden="true" />}
            title="Download CV (PDF)"
          >
            Download CV
          </Button>
          <button
            type="button"
            className="rail__toggle"
            onClick={onToggleSidebar}
            aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <FiChevronsLeft aria-hidden="true" /> : <FiChevronsRight aria-hidden="true" />}
            <span className="rail__toggle-label">Collapse</span>
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className={`topbar ${isScrolled || isMobileMenuOpen ? 'is-raised' : ''} ${isMobileMenuOpen ? 'is-menu-open' : ''}`}>
        <div className="topbar__brand">
          <Monogram />
          <p className="topbar__title">
            <span>Sultanova Anahit</span>
            <span className="topbar__role">Full-Stack Web Developer</span>
          </p>
        </div>
        <button
          type="button"
          className={`menu-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`} inert={!isMobileMenuOpen}>
        <Navbar activeId={activeId} onNavigate={closeMenu} className="mobile-menu__nav" />
        <div className="mobile-menu__footer">
          <Button variant="primary" onClick={downloadCv} icon={<FiDownload aria-hidden="true" />}>
            Download CV
          </Button>
          <SocialIcons variant="outline" />
        </div>
      </div>
    </header>
  );
};

export default Header;
