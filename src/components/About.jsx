import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import Button from '../modules/Button.jsx';
import ProgItem from '../modules/ProgItem.jsx';
import CvPdf from '../media/pdf/SultanovaAnahit_cv.pdf';
import { CssCertificate, JsCertificate } from '../utils/media-files.js';

const About = () => {

  const downloadCvHandler = () => {
    fetch(CvPdf).then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Sultanova_Anahit_CV.pdf';
            alink.click();
        });
    });
  }

  return (
    <section id='about'>
      <Container className="about">
        <div className='about-text'>
          <Title_Desc 
              title="About me"
              desc={[
                <p key="p1">My name is Anahit and I'm front-end web developer with more than 7 years of experience.</p>, 
                <p key="p2">More than 5 years I worked with Content Management Systems (CMS) such a WordPress and Joomla.
                I worked as full stack developer and developed themes and plugins for WordPress, also templates and components for Joomla. Created accessible, responsive and functional user interfaces to allow users on any device to have the same perfect user experience.
                I also have experience in creating both simple websites and online stores built on WordPress. Used simple templates and plugins, also Elementor page builder plugin and E-Commerce. </p>,  
                <p key="p3">Have experience with providing technical support. Provided professional customer service, managing 20+ tickets and email requests a day. Lead troubleshooting, fixed 3.000+ bugs and other issues, worked with live sites.</p>,
                <p key="p4">Now I'm working as JavaScript and React JS developer. I don't have a lot experience with React yet, but I'm learn quickly. I very like my profession, that why I try improve my skills every single day!! And like to share my knowledge with others.</p>
              ]}
          />
          
          <Button onClick={downloadCvHandler}  className='download-cv btn-1'>
            Download PDF <FaDownload />
          </Button>
        </div>
        
        <div className='about-image'>
          <div className='program-items'>
            <ProgItem 
              title="HTML, HTML5"
              url="https://www.w3schools.com/html/" /> 
            <ProgItem 
              title="CSS, CSS3"
              url="https://www.w3schools.com/css/" 
              star={true}
              starUrl={CssCertificate} /> 
            <ProgItem 
              title="Sass, Less"
              url="https://sass-lang.com/" /> 
            <ProgItem 
              title="Bootstrap"
              url="https://getbootstrap.com/" />
            <ProgItem 
              title="JavaScript"
              url="https://www.w3schools.com/js/" 
              star={true}
              starUrl={JsCertificate} />
            <ProgItem 
              title="jQuery"
              url="https://jquery.com/" />
            <ProgItem 
              title="AJAX"
              url="https://www.w3schools.com/xml/ajax_intro.asp" />
            <ProgItem 
              title="React JS"
              url="https://reactjs.org/" />
            <ProgItem 
              title="Redux"
              url="https://redux.js.org/" />
            <ProgItem 
              title="TypeScript"
              url="https://www.typescriptlang.org/" />
            <ProgItem 
              title="RESTful API"
              url="https://aws.amazon.com/what-is/restful-api/" />
            <ProgItem 
              title="WordPress"
              url="https://wordpress.org/download/" />
            <ProgItem 
              title="Joomla!"
              url="https://www.joomla.org/" />
            <ProgItem 
              title="PHP"
              url="https://www.php.net/" />
            <ProgItem 
              title="MySQL"
              url="https://www.mysql.com/" />
            <ProgItem 
              title="Figma"
              url="https://www.figma.com/" />
              <br/>
            <ProgItem 
              title="Git (Git GUI, GitHub)"
              url="https://git-scm.com/" />
            <ProgItem 
              title="Jira"
              url="https://www.atlassian.com/software/jira" />
            <ProgItem 
              title="Webpack"
              url="https://webpack.js.org/" />
            <ProgItem 
              title="Eslint"
              url="https://eslint.org/" />
            <ProgItem 
              title="Airbnb"
              url="https://airbnb.io/javascript/react/" />
            <ProgItem 
              title="Git Hooks (Husky)"
              url="https://typicode.github.io/husky/#/" />  
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About;