import React from 'react';
import Container from '../modules/Container.jsx';
import SocialIcons from '../modules/SocialIcons.jsx';

const Footer = (props) => {
  return (
    <footer>
        <Container className="footer">
          <p>All right reserved - S.Anahit ©2023.<br /> Last update: 10/05/2023</p>
          <SocialIcons />
        </Container>
    </footer>
  )
}

export default Footer;