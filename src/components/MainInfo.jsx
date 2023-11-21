import React from 'react';
import Container from '../modules/Container';
import Title_Desc from '../modules/Title_Desc';
import SocialIcons from '../modules/SocialIcons';

const MainInfo = () => {
  return (
    <section id="main-info">
      <Container className="main-info">
        <div>
          <Title_Desc 
            title="Hi! I'm Sultanova Anahit"
            desc="Front-end Web developer"
          />
          <SocialIcons />
        </div>
        <div className='personal-image'></div>
      </Container>
    </section>
  )
}

export default MainInfo;