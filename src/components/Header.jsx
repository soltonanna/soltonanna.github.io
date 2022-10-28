import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import Navbar from './Navbar.jsx';

const Header = (props) => {
  return (
    <header>
        <Container className="header">
            <Navbar />
            <Title_Desc 
                title="Sultanova Anahit"
                desc="Web developer"
            />
        </Container>
    </header>
  )
}

export default Header;