// Single source of truth for page sections (navigation + scroll-spy).
// Labels are translated in i18n/locales/*.jsx (`nav`); `label` here is the English fallback.
export const navItems = [
  { id: 'main-info', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export const sectionIndex = (id) => {
  const i = navItems.findIndex((item) => item.id === id);
  return String(i).padStart(2, '0');
};
