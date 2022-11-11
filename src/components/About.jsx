import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import ProgItem from '../modules/ProgItem.jsx';
import CvPdf from '../media/pdf/SultanovaAnahit_cv.pdf';
import { CssCertificate } from '../utils/media-files.js';

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
    <section id='main__about'>
      <Container className="about">
        <div className='about-image'></div>
        <div className='about-text'>
          <Title_Desc 
              title="About me"
              desc="Hello, I'm Anahit, front-end web developer with more than 7 years experience. I have experience in web site design, building, testing and customization. Also I am good at"
          />
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
              url="https://www.w3schools.com/js/" />
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
              title="Git, GitHub"
              url="https://git-scm.com/" />
            <ProgItem 
              title="Jira"
              url="https://www.atlassian.com/software/jira" />
            <ProgItem 
              title="Webpack"
              url="https://webpack.js.org/" />
            <ProgItem 
              title="Figma"
              url="https://www.figma.com/" />
          </div>
          <button onClick={downloadCvHandler}  className='button download-cv'>
            Download PDF <FaDownload />
          </button>
        </div>
      </Container>
    </section>
  )
}

export default About;