import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import CardView from '../modules/CardView.jsx';

function Experience() {
  return (
    <section id="experience">
      <Container className="experience">

        <div className='work-experience'>
          <Title_Desc title="Work Experience" />
          <div className='cards'>
            <CardView 
              title='Freelancer'
              place='Freelance'
              placeUrl=''
              date='Aug 2022 - now'
              desc='Working as front-end React developer' 
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Partnered with <a href='https://noorlogic.com/' target='_blank'>"Noor Logic"</a> company, developed on existing product called "UNDP", fixed 30+ bugs in a short time, added 6 new features. </li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>React, AntDesign, HTML, CSS, Sass, Bootstrap, JavaScript, jQuery, REST APIs, webpack, Git, etc. </p>
                </>
              }
            />
            <CardView 
              title='Frontend Web Developer'
              place='BetInspire'
              placeUrl='https://www.betinspire.com/'
              date='Apr 2022 - Aug 2022 · 4 month'
              desc='Changing and improving of existing platform functionality, development web sites frontend, bug fixes, adding the new features.'
            />
            <CardView 
              title='Professional development'
              place='Career Break'
              placeUrl=''
              date='Jan 2022 - Apr 2022 · 4 month'
              desc='Continued improved front-end skills. Decided get deep knowledge exactly on front-end. Want to continue my career particular in JavaScript and React JS.'
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Got new course from Udemy for improve my skills: <a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/' target='_blank'>React - The Complete Guide (incl Hooks, React Router, Redux);</a> 
                    </li>
                    <li>Developed some SPA and small projects with HTML, CSS, Vanilla JS and React (can see them on Portfolio section).</li>
                    <li>Researched and monitored technologies and best practices for code standards. Watched videos, read documentations and researched forums.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>HTML/HTML5, CSS/CSS3, Sass, Bootstrap, JavaScript, React, REST APIs, webpack, Git, etc. </p>
                </>
              }
            />
            <CardView 
              title='Full Stack Engineer'
              place='10Web.io'
              placeUrl='https://10web.io/'
              date='Aug 2020 - Jan 2022 · 1 year 6 month'
              desc='Worked as full stack mid level developer with Wordpress. Developed, modified, tested and fixed plugins and services (worked remote / full day)'
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Worked as a part of 5-person team and also worked closely with the other team-developers, designers, copywriters, managers and other cross-functional teams to improve and good modified plugins and services.</li>
                    <li>Worked in an agile environment with daily morning stand-ups, kept track of tasks/bugs in projects, and conducted 2 hours of sprint planning and sprint retrospectives per week.</li>
                    <li>Participated in product releases and code reviews with 2 senior developers and team lead.</li>
                    <li>Provided professional customer service, managing 7+ tickets and email requests a day. </li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>HTML, CSS, JavaScript, jQuery, PHP, Git, Jira, Zendesk, TeamViewer, Zoom etc. </p>
                </>
              }
            />
            <CardView 
              title='Maternity leave'
              place='Career Break'
              placeUrl=''
              date='Aug 2019 - Aug 2020 · 1 year'
              desc='Improved some front-end skills and built 3 web sites based on Wordpress.' 
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Got courses from Udemy for improve my skills: <br/> 1. <a href='https://www.udemy.com/course/the-complete-javascript-course/' target='_blank'>The Complete JavaScript Course 2023: From Zero to Expert!</a>;<br/> 2. <a href='https://www.udemy.com/course/advanced-css-and-sass/' target='_blank'>Advanced CSS and Sass: Flexbox, Grid, Animations and More!</a>;</li>
                    <li>Partnered with <a href='https://vtgsoftware.com/' target='_blank'>"VTG Software"</a> company for built, modified and optimized 3 web sites based on Wordpress (worked remote): <br/>
                    1. <a href='https://volterman.com/' target='_blank'>Volterman</a>; <br/> 2. <a href='https://maldeks.org/' target='_blank'>Maldeks</a>; <br/> 3. <a href='https://vahagnstepanyan.com/' target='_blank'>Vahagn Stepanyan</a> </li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>HTML, CSS, JavaScript, jQuery, React, Wordpress, PHP, MySQL, Git, FileZilla, Trello, etc. </p>
                </>
              }
            />
            <CardView 
              title='Tech Support specialist'
              place='10Web.io'
              placeUrl='https://10web.io/'
              date='Dec 2017 - Aug 2019 · 1 year 9 month'
              desc='Worked as tech support specialist and team lead.'
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Provided technical support for over 50+ Premium Plugins and Extensions. </li>
                    <li>Provided professional customer service, managing 20+ tickets and email requests a day. </li>
                    <li>Lead and managed a team of 4 junior developers, developed documentations and provide trainings to teach them company standards, services and plugins functionality and code standards. </li>
                    <li>Lead daily standup meetings for monitoring problems and prioritizing tasks.</li>
                    <li>Besides bugs and conflicts fast fixing, monitored users feedbacks and open tasks for new features or bug fixes.</li>
                    <li>Lead troubleshooting, fixed 3.000+ bugs and other issues, worked with live sites. </li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>PHP, MySQL, HTML, CSS, JavaScript, jQuery, FileZilla, Slack, Zendesk, TeamViewer, etc. </p>
                </>
              }
            />
            <CardView 
              title='Full Stack Engineer'
              place='Web-Dorado'
              placeUrl='https://web-dorado.com/'
              date='Jun 2014 - Dec 2017 · 3 year 7 month'
              desc='Worked full stack developer with Wordpress and Joomla. Developed, modified, tested and fixed plugins and themes.'
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Developed and modified themes and plugins for WordPress. <br/> The most famous plugins that  I've been the part developing are: <a href='https://wordpress.org/plugins/form-maker/' target='_blank'>'Form Maker'</a> and <a href='https://wordpress.org/plugins/photo-gallery/' target='_blank'>'Photo Gallery'</a>. Information about all plugins you can find <a href='https://10web.io/wordpress-plugins/' target='_blank'>here</a>. </li>
                    <li>Developed and modified templates and components for Joomla;</li>
                    <li>Worked closely with developers, designers, copywriters and other cross-functional teams to built more innovation plugins and services.</li>
                    <li>Created accessible, responsive and functional user interfaces to allow users on any device to have the same perfect user experience. </li>
                    <li>Worked as customer support tech specialist for help users fix bugs and conflict with the other plugins, themes. Added some new features based on users feedback.</li>
                    <li>Designed, coded and modified 10+ web sites based on Wordpress and Joomla.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>HTML, CSS, JavaScript, jQuery, Wordpress, Joomla, PHP, MySQL, Git, Photoshop, etc. </p>
                </>
              }
            />
            <CardView 
              title='Front-end development teacher'
              place='Optimum IT Center'
              placeUrl='https://yellow.place/en/optimum-it-center-yerevan-armenia'
              date='Oct 2015 - Jun 2016 · 9 month'
              desc="Taught HTML, CSS and 'Javascript for beginners'. I had 2 groups with 6-8 members. Developed documentations and slides to teach mentioned technologies." 
            />
            <CardView 
              title='Software Testing Manager'
              place='VxSoft'
              placeUrl='https://www.vxsoft.com/am/'
              date='Dec 2013 - Apr 2014 · 5 month'
              desc='Worked as QA and customer support specialist.' 
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Monitored, created and populated QA sheets with designers and managers.</li>
                    <li>Worked with documents automatization of Birth, Death and Marriage registration.</li>
                    <li>Provided trainings for continues documents automatization in Register Offices over the Yerevan.</li>
                    <li>Worked as customer specialist in call center.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>Mulberry Groupware, Word, Excel, etc.</p>
                </>
              }
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
              desc='Studied web technologies like HTML, CSS, PHP, MySQL, Wordpress.' 
            />
            <CardView 
              title='Computer Systems and Informatics'
              place='State Engineering University of Armenia'
              placeUrl='https://polytech.am/institutes/institute-of-information-and-telecommunication-technologies-and-electronics/institute/'
              date='Sep 2009 - Jun 2013'
              desc="Graduated chair of 'Information Technology and Automation' and got bachelor's degree." 
            />
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Experience;