import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Container from '../modules/Container.jsx';

const Footer = () => (
  <footer className="site-footer">
    <Container className="footer">
      <p>© {new Date().getFullYear()} Sultanova Anahit</p>
      <a href="#main-info" className="text-button">
        Back to top <FiArrowUp aria-hidden="true" />
      </a>
    </Container>
  </footer>
);

export default Footer;
