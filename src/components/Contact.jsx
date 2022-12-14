import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import ContactInfo from '../modules/ContactInfo.jsx';

const Contact = () => {
  return (
    <section id='contact'>
        <Container className="contact">
          <Title_Desc title='Contact Me' />
          <div className='contact__block'>
              <ContactInfo size='80' />
          </div>
        </Container>
    </section>
  )
}

export default Contact;