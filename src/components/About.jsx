import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import Button from '../modules/Button.jsx';
import ProgItem from '../modules/ProgItem.jsx';
import CvPdf from '../media/pdf/SultanovaAnahit_cv.pdf';
import { CssCertificate, JsCertificate, ReactCertificate } from '../utils/media-files.js';

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
                <p key="p1">I'm Anahit, a front-end web developer with over 9 years of experience in the field. Throughout my career, I have specialized in working with Content Management Systems (CMS) such as WordPress and Joomla for more than 7 years. As a full-stack developer, I have developed themes and plugins for WordPress, as well as templates and components for Joomla. My focus has always been on creating accessible, responsive, and functional user interfaces to ensure a seamless user experience across all devices. Additionally, I have expertise in building both simple websites and e-commerce stores using WordPress, employing a combination of templates, plugins, and tools like the Elementor page builder and E-Commerce plugins.</p>, 
                <p key="p2">I also have a background in providing technical support, offering professional customer service and managing a high volume of tickets and email requests on a daily basis. I have successfully resolved over 3,000 bugs and other issues while working with live sites.</p>,  
                <p key="p3">Currently, I am working as a JavaScript and React JS developer. I am passionate about my profession and strive to improve my skills every day. I also enjoy sharing my knowledge with others.</p>,
                <p key="p4">Feel free to reach out to me if you have any further questions or require my services.</p>,
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
              url="https://reactjs.org/"
              star={true}
              starUrl={ReactCertificate} />
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