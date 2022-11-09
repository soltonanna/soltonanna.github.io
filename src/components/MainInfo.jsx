import React from 'react';
import Container from '../modules/Container';
import ContactInfo from '../modules/ContactInfo';
import Title_Desc from '../modules/Title_Desc';
import SocialIcons from '../modules/SocialIcons';

const MainInfo = () => {
  return (
    <section id="main__main-info">
      <Container className="main-info">
        <div>
          <div className='button chat-button'>Hello I'm</div>
          <Title_Desc 
            title="Sultanova Anahit"
            desc="Front-end Web developer"
          />
          <ContactInfo size='18' />
          <SocialIcons />
        </div>
        <div className='personal-image'></div>
      </Container>
    </section>
  )
}

export default MainInfo;