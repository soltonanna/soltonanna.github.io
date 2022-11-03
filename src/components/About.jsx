import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import ProgItem from '../modules/ProgItem.jsx';

const About = () => {
  return (
    <section id='main__about'>
      <Container className="about">
        <div className='about-image'></div>
        <div className='about-text'>
          <Title_Desc 
              title="About me"
              desc="Hello, I'm Anahit, front-end web developer with more than 7 years experience. I have experience in web site design & building and customization. Also I am good at"
          />
          <div className='program-items'>
            <ProgItem title="HTML, HTML5" /> 
            <ProgItem title="CSS, CSS3" /> 
            <ProgItem title="JavaScript" />
            <ProgItem title="jQuery" />
            <ProgItem title="AJAX" />
            <ProgItem title="React JS" />
            <ProgItem title="Redux" />
            <ProgItem title="TypeScript" />
            <ProgItem title="RESTful API" />
            <ProgItem title="WordPress" />
            <ProgItem title="Joomla!" />
            <ProgItem title="PHP" />
            <ProgItem title="MySQL" />
            <ProgItem title="GIT" />
            <ProgItem title="Jira" />
            <ProgItem title="Webpack" />
            <ProgItem title="Figma" />
          </div>
          <button className='button downalod-cv'> Download CV <FaDownload/> </button>
        </div>
      </Container>
    </section>
  )
}

export default About;