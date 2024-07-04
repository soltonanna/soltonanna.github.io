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
              title='Freelancer as React JS and Wordpress developer'
              place='Freelance'
              placeUrl=''
              date='Sep 2019 - Present'
              desc="As React JS and Wordpress developer, I specialize in bug fixing, performance optimization, and feature enhancements. My hands-on experience ... "
              fullDesc="As React JS and Wordpress developer, I specialize in bug fixing, performance optimization, and feature enhancements. My hands-on experience includes creating dynamic and responsive web applications."
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <p><b>As React JS developer:</b></p>
                  <ul>
                    <li>I've been refactoring and implementing reusable components that have resulted in significant increases in page load speed and user engagement.</li>
                    <li>Utilized Redux for state management, resulting in reduction in code complexity and increase in team productivity.</li>
                    <li>Collaborated with back-end developers to integrate RESTful APIs, optimizing data flow and user interactions.</li>
                    <li>I specialize in bug fixing, performance optimization, and feature enhancements. My hands-on experience includes creating dynamic and responsive web applications.</li>
                    <li>I collaborating with the company <a href='https://noorlogic.com/' target='_blank'>"Noor Logic"</a> to enhance their existing product known as "UNDP." My work involved identifying areas for improvement, and implementing ReactJS-based solutions to enhance its functionality and user experience.</li>
                  </ul>
                  <p><b>As an independent WordPress developer:</b></p>
                  <ul>
                    <li>I have successfully developed over 10 websites, utilizing popular builders like Elementor and Divi, and crafting custom themes with the ACF plugin. My expertise extends to comprehensive hosting and domain configurations, optimizing sites for faster loading times, and implementing effective SEO strategies to enhance online visibility.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>ReactJS, JavaScript, HTML, CSS, Sass, Redux, Next.js, Tailwind CSS, AntDesign, jQuery, REST APIs, Webpack, Git, Wordpress, PHP, etc. </p>
                </>
              }
            />

            <CardView 
              title='Web Developer'
              place='Brainstormtech'
              placeUrl='https://brainstormtech.io/'
              date='Jun 2023 - Present'
              desc="I've developed 5 WordPress projects from inception to completion and provided support for an additional 6 projects..." 
              fullDesc="I've developed 5 WordPress projects from inception to completion and provided support for an additional 6 projects, involving customization, new features and troubleshooting. Adept at optimizing website performance, successfully elevating page load scores from >50% to 95% and more through meticulous enhancements."
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Designing and implementing new features and functionality</li>
                    <li>Ensuring high performance and availability, and managing all technical aspects of the CMS</li>
                    <li>Document processes and code in a clear, comprehensive and organized manner and in line with product and engineering standards.</li>
                    <li>Helping formulate an effective, responsive design.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>React, AntDesign, Wordpress, Shopify, HTML, CSS, Sass, Bootstrap, JavaScript, jQuery, REST APIs, webpack, Gulp, Git, etc. </p>
                </>
              }
            />

            <CardView 
              title='Front-end developer'
              place='BetInspire'
              placeUrl='https://www.betinspire.com/'
              date='Apr 2022 - Aug 2022 · 4 month'
              desc="I've been responsible for changing and improving existing platform functionality, developing website frontend, conducting bug fixes, and adding new features."
            />

            <CardView 
              title='Professional development'
              place='Career Break'
              placeUrl=''
              date='Jan 2022 - Apr 2022 · 4 month'
              desc="During my career break, I concentrated on honing my frontend skills. I enrolled in a course on Udemy..."
              fullDesc="During my career break, I concentrated on honing my frontend skills. I enrolled in a course on Udemy, where I focused on advancing my proficiency in JavaScript and React, as well as strengthening my grasp of fundamental frontend concepts. "
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>I completed the course <a href='https://www.udemy.com/course/the-complete-javascript-course/' target='_blank'>"The Complete JavaScript Course 2024: From Zero to Expert!" on Udemy to enhance my skills on full JavaScript;</a> 
                    </li>
                    <li>I completed the course <a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/' target='_blank'>"ReactJS - The Complete Guide (incl Hooks, React Router, Redux)" on Udemy to enhance my skills on ReactJS;</a> 
                    </li>
                    <li>I completed the course <a href='https://www.udemy.com/course/advanced-css-and-sass/?couponCode=ACCAGE0923' target='_blank'>"Advanced CSS and Sass: Flexbox, Grid, Animations and More!" on Udemy to enhance my skills;</a> 
                    </li>
                    <li>Developed some SPA and small projects with HTML, CSS, Vanilla JS and React (can see them on Portfolio section).</li>
                    <li>Researched and monitored technologies and best practices for code standards. Watched videos, read documentations and researched forums.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>HTML/HTML5, CSS/CSS3, Sass, Bootstrap, JavaScript, React, Redux, REST APIs, webpack, Git, etc. </p>
                </>
              }
            />

            <CardView 
              title='Full Stack Engineer'
              place='10Web.io'
              placeUrl='https://10web.io/'
              date='Aug 2020 - Jan 2022 · 1 year 6 month'
              desc="I've worked as full-stack developer proficient in WordPress, where I've developed, modified, and tested ..."
              fullDesc="I've worked as full-stack developer proficient in WordPress, where I've developed, modified, and tested plugins and services. I've honed my skills in agile methodologies, teamwork, and customer service."
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Collaborating within a dynamic 5-person team, I closely interacted with fellow developers, designers, copywriters, managers, and other cross-functional teams to enhance and refine plugins and services.</li>
                    <li>Operating within an agile framework, my routine comprised daily morning stand-ups, meticulous task/bug tracking, and conducting two hours of sprint planning and retrospectives weekly.</li>
                    <li>I actively contributed to product releases and engaged in code reviews alongside two senior developers and the team lead.</li>
                    <li>Additionally, I prioritized delivering professional customer service, efficiently managing over 7+ tickets and email requests daily.</li>
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
              desc='Enhanced my frontend skills and created three websites using WordPress.' 
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Collaborated with <a href='https://vtgsoftware.com/' target='_blank'>"VTG Software"</a> company on a freelance basis to develop, customize, and optimize three websites using WordPress.<br/><br/>
                    1. <a href='https://volterman.com/' target='_blank'>Volterman</a> <br/> <br/>2. <a href='https://maldeks.org/' target='_blank'>Maldeks</a> <br/><br/> 3. <a href='https://vahagnstepanyan.com/' target='_blank'>Vahagn Stepanyan</a> </li>
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
              desc="I've served as a tech support specialist and team lead, overseeing the resolution of technical issues and ..."
              fullDesc="I've served as a tech support specialist and team lead, overseeing the resolution of technical issues and leading a team of junior developers."
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>I've worked as a tech support specialist and team lead, where I've been responsible for providing technical support for over 50+ Premium Plugins and Extensions, addressing 20+ tickets and email requests daily with a focus on professional customer service.</li>
                    <li>In my role as team lead, I've led and managed a team of 4 junior developers, developing documentations and providing trainings to ensure adherence to company standards, services, and plugin functionality and code standards.</li>
                    <li>Additionally, I've led daily standup meetings to monitor problems and prioritize tasks, while actively engaging with user feedback and open tasks for new features or bug fixes.</li>
                    <li>Over the course of my tenure, I've successfully troubleshooted and resolved over 3,000+ bugs and other issues, demonstrating proficiency in handling live site challenges.</li>
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
              desc="I've served as a full-stack developer specializing in WordPress and Joomla, contributing to the development,..."
              fullDesc="I've served as a full-stack developer specializing in WordPress and Joomla, contributing to the development, modification, and enhancement of plugins, themes, and templates."
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>I've worked as a full-stack developer, focusing on WordPress and Joomla platforms, where I've played a pivotal role in developing, modifying, testing, and fixing plugins, themes, templates, and components. Notably, I've contributed to the development and modification of prominent plugins such as <a href='https://wordpress.org/plugins/form-maker/' target='_blank'>'Form Maker'</a> and <a href='https://wordpress.org/plugins/photo-gallery/' target='_blank'>'Photo Gallery'</a>.</li>
                    <li>I've had closely collaborating with developers, designers, copywriters, and other cross-functional teams to innovate and improve plugins and services. </li>
                    <li>I've also served as a customer support tech specialist, assisting users in resolving bugs and conflicts with other plugins and themes, and incorporating new features based on user feedback. </li>
                    <li>Furthermore, I've designed, coded, and modified over 10 websites utilizing WordPress and Joomla.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>HTML, CSS, JavaScript, jQuery, Wordpress, Joomla, PHP, MySQL, Git, Photoshop, etc. </p>
                </>
              }
            />

            <CardView 
              title='Frontend Instruction Specialist'
              place='Optimum IT Center'
              placeUrl='https://yellow.place/en/optimum-it-center-yerevan-armenia'
              date='Oct 2015 - Jun 2016 · 9 month'
              desc="As a frontend teacher, I instructed two groups of 6-8 members each on HTML, CSS, and
              JavaScript for beginners, utilizing tailored documentations and slides for effective teaching." 
            />

            <CardView 
              title='Software Testing Manager'
              place='VxSoft'
              placeUrl='https://www.vxsoft.com/am/'
              date='Dec 2013 - Apr 2014 · 5 month'
              desc="I've served as a QA and customer support specialist, focusing on document automation and ..."
              fullDesc="I've served as a QA and customer support specialist, focusing on document automation and providing training for Register Offices."
              moreDesc={
                <>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>I've worked extensively as a QA and customer support specialist, where my responsibilities included monitoring, creating, and populating QA sheets in collaboration with designers and managers.</li>
                    <li>One of my notable projects involved document automation for Birth, Death, and Marriage registration, where I facilitated the development and implementation of automated processes.</li>
                    <li>I provided training sessions aimed at continuing document automation in Register Offices throughout Yerevan. </li>
                    <li>I gained valuable experience as a customer specialist in a call center environment, where I provided timely and effective support to customers.</li>
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
              desc='Learned web technologies such as HTML, CSS, PHP, MySQL, and WordPress.' 
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