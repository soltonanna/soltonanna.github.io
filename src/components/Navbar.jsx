import React from 'react';
import { navItems } from '../utils/nav-items.js';

const Navbar = ({ activeId, onNavigate, className = '', collapsed = false }) => (
  <nav className={`navbar ${className}`.trim()} aria-label="Sections">
    <ol className="navbar__list">
      {navItems.map(({ id, label }, i) => {
        const isActive = activeId === id;
        return (
          <li key={id} className={`navbar__item ${isActive ? 'is-active' : ''}`}>
            <a
              href={`#${id}`}
              className="navbar__link"
              aria-current={isActive ? 'true' : undefined}
              title={collapsed ? label : undefined}
              onClick={onNavigate}
            >
              <span className="navbar__index">{String(i).padStart(2, '0')}</span>
              <span className="navbar__label">{label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Navbar;
