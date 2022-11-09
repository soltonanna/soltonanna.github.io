import React from 'react';
import Container from '../modules/Container.jsx';
import SocialIcons from '../modules/SocialIcons.jsx';

const Footer = (props) => {
  return (
    <footer>
        <Container className="footer">
          <p>All right reserved - S.Anahit ©2022</p>
          <SocialIcons />
        </Container>
    </footer>
  )
}

export default Footer;