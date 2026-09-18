import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import en from './locales/en.jsx';
import ru from './locales/ru.jsx';
import hy from './locales/hy.jsx';

// Supported languages. `code` is the ISO code used for <html lang> and ?lang=,
// `label` is shown in the switcher, `name` is the native name (tooltip / screen readers).
export const LANGUAGES = [
  { code: 'en', label: 'ENG', name: 'English' },
  { code: 'ru', label: 'РУС', name: 'Русский' },
  { code: 'hy', label: 'ՀԱՅ', name: 'Հայերեն' },
];

export const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'lang';
const dictionaries = { en, ru, hy };
const isSupported = (code) => Boolean(dictionaries[code]);

// Initial language: ?lang=ru in the URL > saved choice > English.
const getInitialLanguage = () => {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (isSupported(fromUrl)) return fromUrl;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isSupported(saved)) return saved;
  } catch (e) {
    /* storage or URL unavailable - fall back to default */
  }
  return DEFAULT_LANGUAGE;
};

const LanguageContext = createContext({ lang: DEFAULT_LANGUAGE, setLang: () => {}, t: en });

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLanguage);

  const setLang = (code) => {
    if (isSupported(code)) setLangState(code);
  };

  const t = dictionaries[lang] || en;

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }

    // Keep <html lang>, the tab title and the meta description in sync.
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', t.meta.description);

    // Keep a shared ?lang= link in sync (English = clean URL).
    try {
      const url = new URL(window.location.href);
      if (lang === DEFAULT_LANGUAGE) url.searchParams.delete('lang');
      else url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url);
    } catch (e) {
      /* ignore */
    }
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

/** Full context: { lang, setLang, t } */
export const useLanguage = () => useContext(LanguageContext);

/** Shortcut for the current dictionary. */
export const useT = () => useContext(LanguageContext).t;
