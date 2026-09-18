import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../theme/ThemeContext.jsx';
import { useT } from '../i18n/LanguageContext.jsx';

/**
 * Light / dark mode switch. Sits in the same row as the language switcher
 * (floating controls on desktop, top bar on mobile).
 */
const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const t = useT();
  const isDark = theme === 'dark';
  const label = isDark ? t.common.switchToLight : t.common.switchToDark;

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'is-dark' : 'is-light'} ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      <FiSun aria-hidden="true" className="theme-toggle__icon theme-toggle__icon--sun" />
      <FiMoon aria-hidden="true" className="theme-toggle__icon theme-toggle__icon--moon" />
    </button>
  );
};

export default ThemeToggle;
