import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import TimelineItem from '../modules/TimelineItem.jsx';
import Timeline from '../modules/Timeline.jsx';
import Reveal from '../modules/Reveal.jsx';
import { sectionIndex } from '../utils/nav-items.js';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

function Experience() {
  return (
    <section id="experience" className="section section--resume">
      <Container className="resume">

        <div className='resume__block'>
          <div className='resume__aside'>
            <Title_Desc index={sectionIndex('experience')} eyebrow="Resume" title="Work Experience" />
          </div>
          <Reveal className='resume__main'>
          <Timeline mobileLimit={4}>

            <TimelineItem
              title='WordPress / Web Developer'
              place='TUMO Center for Creative Technologies'
              placeUrl='https://tumo.org/'
              date='Jan 2024 - Present'
              desc="I develop and maintain 20+ websites for TUMO's international partners and built the Camp TUMO website."
              fullDesc="I develop and maintain 20+ websites for TUMO's international partners: support, maintenance, bug fixing and new features. I built a custom WordPress plugin and theme for the partner sites, developed the Camp TUMO website from scratch, and improved 5 other TUMO websites."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <ul>
                    <li>Maintain and support 20+ websites for TUMO's international partner centers, handling bug fixes, updates and new feature requests.</li>
                    <li>Built a custom WordPress plugin and theme for the partner websites.</li>
                    <li>Developed the <a href='https://camptumo.com/' {...ext}>Camp TUMO</a> website, the site for TUMO's international summer program in Yerevan and Dilijan.</li>
                    <li>Improved 5 other TUMO websites with new features, design updates and fixes.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>WordPress, PHP, MySQL, JavaScript, HTML5, CSS3, Sass, Git</p>
                </>
              }
            />

            <TimelineItem
              title='Freelance React & WordPress Developer'
              place='Freelance'
              placeUrl=''
              date='Sep 2019 - Present'
              desc="I build and improve React apps and WordPress sites for clients: new features, bug fixes and performance work."
              fullDesc="I build and improve React apps and WordPress sites for clients: new features, bug fixes and performance work. I've delivered 10+ WordPress websites and contributed React features to client products, including a project for Noor Logic."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <p><b>React:</b></p>
                  <ul>
                    <li>Refactored UI into reusable React components, making pages faster to load and easier to maintain.</li>
                    <li>Managed application state with Redux to keep data flow predictable and code simpler.</li>
                    <li>Integrated REST APIs together with back-end developers.</li>
                    <li>Worked with <a href='https://noorlogic.com/' {...ext}>Noor Logic</a> to improve their existing "UNDP" product: found weak spots in the UI and shipped React-based improvements.</li>
                  </ul>
                  <p><b>WordPress:</b></p>
                  <ul>
                    <li>Delivered 10+ websites using Elementor, Divi and custom themes built with ACF.</li>
                    <li>Set up hosting and domains, improved load times and applied on-page SEO.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>React, JavaScript, Redux, Next.js, HTML5, CSS3, Sass, Tailwind CSS, Ant Design, REST APIs, Webpack, Git, WordPress, PHP</p>
                </>
              }
            />

            <TimelineItem
              title='Full-Stack Web Developer'
              place='Brainstormtech'
              placeUrl='https://brainstormtech.io/'
              date='Jun 2023 - Jun 2024 · 1 yr 1 mo'
              desc="I built 5 WordPress projects end to end, supported 6 more and raised PageSpeed scores to 95+."
              fullDesc="I built 5 WordPress projects from start to launch and supported 6 more with customization, new features and troubleshooting. I raised Google PageSpeed scores from about 50 to 95+ through performance optimization."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <ul>
                    <li>Built 5 WordPress projects end to end and supported 6 more.</li>
                    <li>Designed and implemented new features across WordPress and Shopify sites.</li>
                    <li>Raised Google PageSpeed scores from about 50 to 95+.</li>
                    <li>Built responsive layouts and kept the CMS fast, stable and secure.</li>
                    <li>Documented processes and code in line with the team's engineering standards.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>WordPress, Shopify, PHP, JavaScript, React, Ant Design, HTML5, CSS3, Sass, REST APIs, Webpack, Git</p>
                </>
              }
            />

            <TimelineItem
              title='Frontend Developer (React)'
              place='NoorLogic LLC'
              placeUrl='https://noorlogic.com/'
              date='Sep 2022 - Jun 2023 · 10 mos'
              desc="I built new features and fixed bugs in a React workspace collaboration tool, working from Figma designs."
              fullDesc="I built new features, fixed bugs and improved the UI of the Workspace Collaboration Tool, working from Figma prototypes. I made sure the app worked smoothly across browsers and devices."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <ul>
                    <li>Built new features and fixed bugs in the <a href="https://noorlogic.com/portfolio/workspace-collaboration-tool" {...ext}>Workspace Collaboration Tool</a>, a React web app.</li>
                    <li>Turned Figma prototypes into responsive, pixel-accurate React components.</li>
                    <li>Tested and fixed cross-browser and cross-device issues and improved performance.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>React, JavaScript, Ant Design, HTML5, CSS3, Sass, REST APIs, Figma, Webpack, Git</p>
                </>
              }
            />

            <TimelineItem
              title='Frontend Developer (JavaScript)'
              place='BetInspire'
              placeUrl='https://www.betinspire.com/'
              date='Apr 2022 - Aug 2022 · 5 mos'
              desc="I added features to an iGaming platform and built responsive client website front ends."
              fullDesc="I added features, fixed bugs and improved existing functionality on an iGaming platform. I also built and maintained responsive, cross-browser front ends for client websites."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <ul>
                    <li>Added features and fixed bugs on the company's <a href="https://www.betinspire.com/igaming-platform/" {...ext}>iGaming platform</a>.</li>
                    <li>Built and maintained front ends for several client web apps, making them responsive and cross-browser compatible.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>JavaScript, Ant Design, HTML5, CSS3, Sass, REST APIs, Webpack, Git</p>
                </>
              }
            />

            <TimelineItem
              title='Professional Development: JavaScript & React'
              place='Career break'
              placeUrl=''
              date='Jan 2022 - Apr 2022 · 4 mos'
              desc="I took a focused break to move from WordPress to modern JavaScript and React."
              fullDesc="I took a focused break to move from WordPress to modern JavaScript and React. I completed 4 in-depth courses and built several single-page apps, which you can see in the Portfolio section."
              moreDesc={
                <>
                  <h3>What I did:</h3>
                  <ul>
                    <li>Completed <a href='https://www.udemy.com/course/the-complete-javascript-course/' {...ext}>The Complete JavaScript Course: From Zero to Expert</a> (Udemy).</li>
                    <li>Completed <a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/' {...ext}>React: The Complete Guide (incl. Hooks, React Router, Redux)</a> (Udemy).</li>
                    <li>Completed <a href='https://www.udemy.com/course/advanced-css-and-sass/' {...ext}>Advanced CSS and Sass: Flexbox, Grid, Animations and More</a> (Udemy).</li>
                    <li>Completed <a href="https://www.udemy.com/course/css-animation-transitions-and-transforms-creativity-course/" {...ext}>Creative Advanced CSS &amp; JavaScript Animations</a> (Udemy).</li>
                    <li>Built single-page apps and small projects with HTML, CSS, vanilla JavaScript and React (see the Portfolio section).</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>JavaScript (ES6+), React, Redux, React Router, HTML5, CSS3, Sass, REST APIs, Webpack, Git</p>
                </>
              }
            />

            <TimelineItem
              title='Full-Stack Engineer'
              place='10Web.io'
              placeUrl='https://10web.io/'
              date='Aug 2020 - Jan 2022 · 1 yr 6 mos'
              desc="I developed, tested and shipped WordPress plugins and services in a 5-person agile team."
              fullDesc="I developed, tested and shipped WordPress plugins and services in a 5-person agile team, took part in code reviews and product releases, and handled customer tickets for the products I worked on."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <ul>
                    <li>Developed and improved WordPress plugins and services with developers, designers, copywriters and managers.</li>
                    <li>Worked in Scrum: daily stand-ups, task and bug tracking in Jira, weekly sprint planning and retrospectives.</li>
                    <li>Contributed to product releases and took part in code reviews with two senior developers and the team lead.</li>
                    <li>Handled 7+ customer tickets and emails a day for the team's products.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>WordPress, PHP, JavaScript, jQuery, HTML5, CSS3, Git, Jira, Zendesk</p>
                </>
              }
            />

            <TimelineItem
              title='Freelance WordPress Developer'
              place='VTG Software · contract during parental leave'
              placeUrl='https://vtgsoftware.com/'
              date='Aug 2019 - Aug 2020 · 1 yr 1 mo'
              desc="I built, customized and optimized 3 WordPress websites on a part-time contract."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <ul>
                    <li>Built, customized and optimized 3 WordPress websites for <a href='https://vtgsoftware.com/' {...ext}>VTG Software</a> clients:
                      {' '}<a href='https://volterman.com/' {...ext}>Volterman</a>,
                      {' '}<a href='https://maldeks.org/' {...ext}>Maldeks</a> and
                      {' '}<a href='https://vahagnstepanyan.com/' {...ext}>Vahagn Stepanyan</a>.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>WordPress, PHP, MySQL, JavaScript, jQuery, HTML5, CSS3, Git, Trello</p>
                </>
              }
            />

            <TimelineItem
              title='Tech Support Specialist & Team Lead'
              place='10Web.io'
              placeUrl='https://10web.io/'
              date='Dec 2017 - Aug 2019 · 1 yr 9 mos'
              desc="I led a team of 4 junior developers and resolved 3,000+ bugs across 50+ premium WordPress plugins."
              fullDesc="I led a team of 4 junior developers supporting 50+ premium WordPress plugins and extensions. I handled 20+ tickets a day and resolved 3,000+ bugs and issues on live customer sites."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <ul>
                    <li>Led and mentored a team of 4 junior developers, wrote internal documentation and ran trainings on products and code standards.</li>
                    <li>Ran daily stand-ups to prioritize issues and passed user feedback to the product team as feature requests and bug reports.</li>
                    <li>Supported 50+ premium plugins and extensions, handling 20+ tickets and emails a day.</li>
                    <li>Found and fixed 3,000+ bugs and conflicts on live customer sites.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>WordPress, PHP, MySQL, JavaScript, jQuery, HTML5, CSS3, Zendesk, Slack</p>
                </>
              }
            />

            <TimelineItem
              title='Full-Stack Engineer'
              place='Web-Dorado'
              placeUrl='https://web-dorado.com/'
              date='Jun 2014 - Dec 2017 · 3 yrs 7 mos'
              desc="I developed and maintained WordPress plugins and themes, including Form Maker and Photo Gallery."
              fullDesc="I developed, tested and maintained WordPress plugins and themes, including the widely used Form Maker and Photo Gallery plugins. I also built 10+ websites and helped users resolve plugin and theme conflicts."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <ul>
                    <li>Developed, tested and maintained plugins, themes and extensions, including <a href='https://wordpress.org/plugins/form-maker/' {...ext}>Form Maker</a> and <a href='https://wordpress.org/plugins/photo-gallery/' {...ext}>Photo Gallery</a>.</li>
                    <li>Worked with developers, designers and copywriters to plan and ship plugin improvements.</li>
                    <li>Helped users fix bugs and conflicts with other plugins and themes, and turned their feedback into new features.</li>
                    <li>Designed and built 10+ websites on WordPress and Joomla.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>WordPress, PHP, MySQL, JavaScript, jQuery, HTML, CSS, Git, Photoshop</p>
                </>
              }
            />

            <TimelineItem
              title='Frontend Instructor'
              place='Optimum IT Center'
              placeUrl='https://yellow.place/en/optimum-it-center-yerevan-armenia'
              date='Oct 2015 - Jun 2016 · 9 mos'
              desc="I taught HTML, CSS and JavaScript to two beginner groups of 6–8 students, using slides and handouts tailored to each group."
            />

            <TimelineItem
              title='QA & Customer Support Specialist'
              place='VxSoft'
              placeUrl='https://www.vxsoft.com/am/'
              date='Dec 2013 - Apr 2014 · 5 mos'
              desc="I tested a document automation system for civil registry offices and trained staff to use it."
              fullDesc="I tested a document automation system for birth, death and marriage registration, wrote QA checklists with designers and managers, and trained staff at civil registry offices across Yerevan."
              moreDesc={
                <>
                  <h3>Key achievements:</h3>
                  <ul>
                    <li>Created and maintained QA sheets together with designers and managers.</li>
                    <li>Tested and helped roll out document automation for birth, death and marriage registration.</li>
                    <li>Trained staff at civil registry offices across Yerevan on the new system.</li>
                    <li>Supported customers through the call center.</li>
                  </ul>
                  <br/>
                  <h3>Worked with:</h3>
                  <p>Mulberry Groupware, Microsoft Word, Microsoft Excel</p>
                </>
              }
            />
          </Timeline>
          </Reveal>
        </div>

        <div className='resume__block resume__block--education'>
          <div className='resume__aside'>
            <Title_Desc title="Education" as="h2" />
          </div>
          <Reveal className='resume__main'>
          <Timeline variant="compact" mobileLimit={4}>
            <TimelineItem
              title='Web Development Course'
              place='Optimum IT Center'
              placeUrl='https://yellow.place/en/optimum-it-center-yerevan-armenia'
              date='Sep 2013 - May 2014'
              desc='9-month intensive course: HTML, CSS, PHP, MySQL and WordPress.'
            />
            <TimelineItem
              title="Bachelor's Degree, Computer Systems and Informatics"
              place='National Polytechnic University of Armenia (SEUA)'
              placeUrl='https://polytech.am/institutes/institute-of-information-and-telecommunication-technologies-and-electronics/institute/'
              date='Sep 2009 - Jun 2013'
              desc="Chair of Information Technology and Automation."
            />
          </Timeline>
          </Reveal>
        </div>

      </Container>
    </section>
  )
}

export default Experience;
