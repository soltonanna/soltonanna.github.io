import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import CardView from '../modules/CardView.jsx';

function Experience() {
  return (
    <section id="main__experience">
      <Container className="experience">

        <div className='work-experience'>
          <Title_Desc title="Work Experience" />
          <div className='cards'>
            <CardView 
              title='Freelancer'
              place='Freelance'
              placeUrl=''
              date='Aug 2022 - now'
              desc="Working with React" 
            />
            <CardView 
              title='Frontend Web Developer'
              place='BetInspire'
              placeUrl='https://www.betinspire.com/'
              date='Apr 2022 - Aug 2022 · 4 mos'
              desc="Changing and improving of existing platform functionality, development web sites frontend, bug fixes, adding the new features." 
            />
            <CardView 
              title='Professional development'
              place='Career Break'
              placeUrl=''
              date='Jan 2022 - Apr 2022 · 4 mos'
              desc="I've been improved my skills in the front-end. Wanted to continue my career particular in JavaScript and React JS." 
            />
            <CardView 
              title='Full Stack Engineer'
              place='10Web.io'
              placeUrl='https://10web.io/'
              date='Aug 2020 - Jan 2022 · 1 yr 6 mos'
              desc="__" 
            />
            <CardView 
              title='Maternity leave'
              place='Career Break'
              placeUrl=''
              date='Aug 2019 - Aug 2020 · 1 yr'
              desc="__" 
            />
            <CardView 
              title='Tech Support specialist'
              place='10Web.io'
              placeUrl='https://10web.io/'
              date='Dec 2017 - Aug 2019 · 1 yr 9 mos'
              desc="__" 
            />
            <CardView 
              title='Full Stack Engineer'
              place='Web-Dorado'
              placeUrl='https://web-dorado.com/'
              date='Jun 2014 - Dec 2017 · 3 yr 7 mos'
              desc="Wordked mostly as front-end developer with Wordpress and Joomla. Developed, modified, tested and fixed plugins and themes..."
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Developed and modified themes and plugins for WordPress. <br/> The most famous plugins that  I've been the part developing are: <a href='https://wordpress.org/plugins/form-maker/' target='_blank'>'Form Maker'</a> and <a href='https://wordpress.org/plugins/photo-gallery/' target='_blank'>'Photo Gallery'</a>. Information about all plugins you can find <a href='https://10web.io/wordpress-plugins/' target='_blank'>here</a>. </li>
                    <li>Developed and modified templates and components for Joomla;</li>
                    <li>Created accessiable, responsive and functional user interfaces to allow users on any device to have the same perfect user experience. </li>
                    <li>Worked as customer support tech specialist for help users fix bugs and conflict with the other plugins, themes. Added some new features based on users feedback.</li>
                    <li>Built some web sites based on Wordpress and Joomla.</li>
                  </ul>
                  <br/>
                  <h3>Work with:</h3>
                  <p>HTML, CSS, JavaScript, Wordpress, Joomla, PHP, MySQL, Git </p>
                </>
              }
            />
            <CardView 
              title='Front-end web development teacher'
              place='Optimum IT Center'
              placeUrl='https://yellow.place/en/optimum-it-center-yerevan-armenia'
              date='Oct 2015 - Jun 2016 · 9 mos'
              desc="__" 
            />
            <CardView 
              title='Software Testing Manager'
              place='VxSoft'
              placeUrl='https://www.vxsoft.com/am/'
              date='Dec 2013 - Apr 2014 · 5 mos'
              desc="__" 
            />
          </div>
        </div>

        <div className='education'>
          <Title_Desc title="Education" /> 
          <div className='cards'>
            <CardView 
              title='Web Technologies'
              place='Optimum IT Center'
              placeUrl='https://yellow.place/en/optimum-it-center-yerevan-armenia'
              date='Sep 2013 - May 2014'
              desc="I've been studied web technologies like HTML, CSS, PHP, MySQL, Wordpress." 
            />
            <CardView 
              title='Computer Systems and Informatics'
              place='State Engineering University of Armenia'
              placeUrl='https://polytech.am/institutes/institute-of-information-and-telecommunication-technologies-and-electronics/institute/'
              date='Sep 2009 - Jun 2013'
              desc="I've been graduated chair of 'Information Technology and Automation' and got bachelor's degree." 
            />
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Experience;