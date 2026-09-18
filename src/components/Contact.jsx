import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import ContactInfo from '../modules/ContactInfo.jsx';
import SocialIcons from '../modules/SocialIcons.jsx';
import Reveal from '../modules/Reveal.jsx';
import { sectionIndex } from '../utils/nav-items.js';

const Contact = () => (
  <section id='contact' className='section section--contact'>
    <Container className="contact">
      <div className='contact__intro'>
        <Title_Desc index={sectionIndex('contact')} eyebrow="Contact" title='Contact Me' />
        <SocialIcons variant="outline" className="contact__social" />
      </div>
      <Reveal className='contact__block'>
        <ContactInfo />
      </Reveal>
    </Container>
  </section>
);

export default Contact;
