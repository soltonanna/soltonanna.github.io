import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

export const THEMES = ['light', 'dark'];
const STORAGE_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

const getSystemTheme = () => {
  try {
    return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
  } catch (e) {
    return 'light';
  }
};

const getSavedTheme = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(saved) ? saved : null;
  } catch (e) {
    return null;
  }
};

// Initial theme: whatever the inline script in index.html already applied > saved choice > OS setting.
const getInitialTheme = () => {
  const applied = document.documentElement.getAttribute('data-theme');
  if (THEMES.includes(applied)) return applied;
  return getSavedTheme() || getSystemTheme();
};

const ThemeContext = createContext({ theme: 'light', setTheme: () => {}, toggleTheme: () => {} });

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(getInitialTheme);
  // Follow the OS setting until the user picks a theme explicitly.
  const [isExplicit, setExplicit] = useState(() => getSavedTheme() !== null);
  const transitionTimer = useRef(null);

  // Apply to <html data-theme> and keep the browser UI color in sync.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f1113' : '#f7f6f2');
  }, [theme]);

  // Persist only an explicit choice.
  useEffect(() => {
    if (!isExplicit) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore */
    }
  }, [theme, isExplicit]);

  // React to OS theme changes while the user hasn't chosen.
  useEffect(() => {
    if (isExplicit || !window.matchMedia) return undefined;
    const media = window.matchMedia(DARK_QUERY);
    const onChange = (event) => setThemeState(event.matches ? 'dark' : 'light');
    media.addEventListener?.('change', onChange);
    return () => media.removeEventListener?.('change', onChange);
  }, [isExplicit]);

  const setTheme = useCallback((next) => {
    if (!THEMES.includes(next)) return;

    // Short crossfade so backgrounds / text / icons change together.
    const root = document.documentElement;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      root.classList.add('theme-transition');
      window.clearTimeout(transitionTimer.current);
      transitionTimer.current = window.setTimeout(() => root.classList.remove('theme-transition'), 350);
    }

    setExplicit(true);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/** { theme, setTheme, toggleTheme } */
export const useTheme = () => useContext(ThemeContext);
