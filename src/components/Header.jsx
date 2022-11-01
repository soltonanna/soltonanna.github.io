import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import MainInfo from './MainInfo.jsx';
import Navbar from './Navbar.jsx';

const Header = (props) => {
  return (
    <header>
        <Container className="header">
            <Navbar />
        </Container>
    </header>
  )
}

export default Header;