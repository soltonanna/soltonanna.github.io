import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Container from '../modules/Container.jsx';
import { useT } from '../i18n/LanguageContext.jsx';

const Footer = () => {
  const t = useT();
  return (
  <footer className="site-footer">
    <Container className="footer">
      <p>© {new Date().getFullYear()} {t.footer.name}</p>
      <a href="#main-info" className="text-button">
        {t.footer.backToTop} <FiArrowUp aria-hidden="true" />
      </a>
    </Container>
  </footer>
  );
};

export default Footer;
