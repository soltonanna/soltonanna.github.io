import React, { useEffect, useRef, useState } from 'react';
import { FiCheck, FiChevronDown, FiGlobe } from 'react-icons/fi';
import { LANGUAGES, useLanguage } from '../i18n/LanguageContext.jsx';

// Scroll distance (px) after which the switcher collapses into a compact dropdown.
const SCROLL_THRESHOLD = 80;

/**
 * Language switcher.
 * variant="floating" (desktop, rendered in App.js): fixed in the top-right corner.
 *   - At the top of the page (over the hero): segmented ENG / РУС / ՀԱՅ buttons.
 *   - After scrolling: a compact pill with the current language that opens a dropdown.
 * variant="inline" (mobile top bar, rendered in Header.jsx): segmented buttons only.
 */
const LanguageSwitcher = ({ variant = 'floating', className = '' }) => {
  const isFloating = variant === 'floating';
  const { lang, setLang, t } = useLanguage();
  const [isCompact, setCompact] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);

  const current = LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0];

  // Switch between the full and compact look on scroll.
  useEffect(() => {
    if (!isFloating) return undefined;
    const onScroll = () => setCompact(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isFloating]);

  // The dropdown only exists in compact mode.
  useEffect(() => {
    if (!isCompact) setOpen(false);
  }, [isCompact]);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const choose = (code) => {
    setLang(code);
    setOpen(false);
  };

  const classes = ['lang-switcher', `lang-switcher--${variant}`, isCompact && 'is-compact', isOpen && 'is-open', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={rootRef} className={classes}>
      {/* Full segmented control (top of the page) */}
      <div className="lang-switcher__segmented" role="group" aria-label={t.common.language} inert={isCompact}>
        {LANGUAGES.map(({ code, label, name }) => {
          const isActive = code === lang;
          return (
            <button
              key={code}
              type="button"
              lang={code}
              className={`lang-switcher__option ${isActive ? 'is-active' : ''}`}
              aria-pressed={isActive}
              aria-label={name}
              title={name}
              onClick={() => choose(code)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Compact dropdown (after scroll, floating variant only) */}
      {isFloating && (
      <div className="lang-switcher__compact" inert={!isCompact}>
        <button
          ref={triggerRef}
          type="button"
          className="lang-switcher__trigger"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label={`${t.common.language}: ${current.name}`}
          onClick={() => setOpen((open) => !open)}
        >
          <FiGlobe aria-hidden="true" />
          <span lang={current.code}>{current.label}</span>
          <FiChevronDown aria-hidden="true" className="lang-switcher__chevron" />
        </button>

        <ul className="lang-switcher__menu" role="menu" aria-label={t.common.language} hidden={!isOpen}>
          {LANGUAGES.map(({ code, label, name }) => {
            const isActive = code === lang;
            return (
              <li key={code} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={isActive}
                  lang={code}
                  className={`lang-switcher__item ${isActive ? 'is-active' : ''}`}
                  onClick={() => choose(code)}
                >
                  <span className="lang-switcher__item-code">{label}</span>
                  <span className="lang-switcher__item-name">{name}</span>
                  {isActive && <FiCheck aria-hidden="true" className="lang-switcher__check" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
