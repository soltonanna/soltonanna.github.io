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
                <p key="p1">I have been working as a web developer since 2014. I hold a degree in Computer Systems and Informatics (Information Technologies and Automation) from the <a href='https://polytech.am/en/institutes/institute-of-information-and-telecommunication-technologies-and-electronics/institute/' target='_blank'>State Engineering University of Armenia (SEUA)</a>. Throughout my professional journey, I've gained diverse experience in web development.</p>, 
                <p key="p2">I've built websites using a variety of platforms, including React, WordPress, Shopify, and Joomla. Furthermore, I've developed plugins and themes for these platforms. As a technical customer specialist, I've honed my problem-solving skills and can effectively bridge the gap between technology and customer needs.</p>,  
                <p key="p3">My expertise extends to both frontend and backend development. I'm well-versed in PHP and MySQL as a full stack developer, and I have a solid grasp of frontend technologies such as JavaScript, HTML, and CSS. My experience encompasses different work arrangements, from full-time and part-time roles to freelancing, allowing me to adapt to various work environments.</p>,
                <p key="p4">In addition to my technical skills, I possess a strong command of languages, including English at a B1/B2 level, as well as a good knowledge of Russian and Armenian. This linguistic versatility enables me to effectively communicate with a diverse audience.</p>,
                <p key="p5">On a personal note, I have a deep passion for reading, watching movies, painting, and hiking, which enriches my life beyond the world of web development.</p>,
              ]}
          />
          
          <Button onClick={downloadCvHandler}  className='download-cv btn-1'>
            Download PDF <FaDownload />
          </Button>
        </div>
        
        <div className='about-skills'>
          <div className='program-items'>
            <h2>Technical Skills</h2>
            <p>Here, I've highlighted additional significant technologies and programming languages that I am experienced with. The items marked with stars indicate areas where I hold certificates – simply click on them to view the details.</p>
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
            
            <br/><br/><br/>
            
            <h2>Language Skills</h2>
            <ProgItem 
              title="English"
              url="#" />
            <ProgItem 
              title="Russian"
              url="#" />
            <ProgItem 
              title="Armenian"
              url="#" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About;