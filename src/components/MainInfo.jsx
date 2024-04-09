import React from 'react';
import Container from '../modules/Container';
import Title_Desc from '../modules/Title_Desc';
import SocialIcons from '../modules/SocialIcons';

const MainInfo = () => {
  return (
    <section id="main-info">
      <Container className="main-info">
        <div>
          <h1>Sultanova Anahit</h1>
          <div className='position'>I'm a Front-end, Web developer</div>
          <SocialIcons />
        </div>
      </Container>
    </section>
  )
}

export default MainInfo;