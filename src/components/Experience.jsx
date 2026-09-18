import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import TimelineItem from '../modules/TimelineItem.jsx';
import Timeline from '../modules/Timeline.jsx';
import Reveal from '../modules/Reveal.jsx';
import { sectionIndex } from '../utils/nav-items.js';
import { useT } from '../i18n/LanguageContext.jsx';

// Language-independent data. All texts (title, place, date, descriptions, achievements)
// are in i18n/locales/*.jsx under `experience.jobs[id]` / `experience.education[id]`.
const jobs = [
  { id: 'tumo', placeUrl: 'https://tumo.org/', stack: 'WordPress, PHP, MySQL, JavaScript, HTML5, CSS3, Sass, Git' },
  { id: 'freelance', placeUrl: '', stack: 'React, JavaScript, Redux, Next.js, HTML5, CSS3, Sass, Tailwind CSS, Ant Design, REST APIs, Webpack, Git, WordPress, PHP' },
  { id: 'brainstorm', placeUrl: 'https://brainstormtech.io/', stack: 'WordPress, Shopify, PHP, JavaScript, React, Ant Design, HTML5, CSS3, Sass, REST APIs, Webpack, Git' },
  { id: 'noorlogic', placeUrl: 'https://noorlogic.com/', stack: 'React, JavaScript, Ant Design, HTML5, CSS3, Sass, REST APIs, Figma, Webpack, Git' },
  { id: 'betinspire', placeUrl: 'https://www.betinspire.com/', stack: 'JavaScript, Ant Design, HTML5, CSS3, Sass, REST APIs, Webpack, Git' },
  { id: 'careerBreak', placeUrl: '', stack: 'JavaScript (ES6+), React, Redux, React Router, HTML5, CSS3, Sass, REST APIs, Webpack, Git' },
  { id: 'tenwebEngineer', placeUrl: 'https://10web.io/', stack: 'WordPress, PHP, JavaScript, jQuery, HTML5, CSS3, Git, Jira, Zendesk' },
  { id: 'vtg', placeUrl: 'https://vtgsoftware.com/', stack: 'WordPress, PHP, MySQL, JavaScript, jQuery, HTML5, CSS3, Git, Trello' },
  { id: 'tenwebSupport', placeUrl: 'https://10web.io/', stack: 'WordPress, PHP, MySQL, JavaScript, jQuery, HTML5, CSS3, Zendesk, Slack' },
  { id: 'webDorado', placeUrl: 'https://web-dorado.com/', stack: 'WordPress, PHP, MySQL, JavaScript, jQuery, HTML, CSS, Git, Photoshop' },
  { id: 'instructor', placeUrl: 'https://yellow.place/en/optimum-it-center-yerevan-armenia' },
  { id: 'vxsoft', placeUrl: 'https://www.vxsoft.com/am/', stack: 'Mulberry Groupware, Microsoft Word, Microsoft Excel' },
];

const education = [
  { id: 'course', placeUrl: 'https://yellow.place/en/optimum-it-center-yerevan-armenia' },
  { id: 'degree', placeUrl: 'https://polytech.am/institutes/institute-of-information-and-telecommunication-technologies-and-electronics/institute/' },
];

function Experience() {
  const t = useT();
  const tx = t.experience;

  // "More Info" dialog: achievements from the dictionary + the tech stack.
  const renderMore = (text, stack) => {
    if (!text.more) return undefined;
    return (
      <>
        <h3>{text.moreTitle || tx.keyAchievements}</h3>
        {text.more}
        {stack && (
          <>
            <br />
            <h3>{tx.workedWith}</h3>
            <p>{stack}</p>
          </>
        )}
      </>
    );
  };

  return (
    <section id="experience" className="section section--resume">
      <Container className="resume">

        <div className='resume__block'>
          <div className='resume__aside'>
            <Title_Desc index={sectionIndex('experience')} eyebrow={tx.eyebrow} title={tx.title} />
          </div>
          <Reveal className='resume__main'>
          <Timeline mobileLimit={4}>
            {jobs.map(({ id, placeUrl, stack }) => {
              const text = tx.jobs[id];
              return (
                <TimelineItem
                  key={id}
                  title={text.title}
                  place={text.place}
                  placeUrl={placeUrl}
                  date={text.date}
                  desc={text.desc}
                  fullDesc={text.fullDesc}
                  moreDesc={renderMore(text, stack)}
                />
              );
            })}
          </Timeline>
          </Reveal>
        </div>

        <div className='resume__block resume__block--education'>
          <div className='resume__aside'>
            <Title_Desc title={tx.educationTitle} as="h2" />
          </div>
          <Reveal className='resume__main'>
          <Timeline variant="compact" mobileLimit={4}>
            {education.map(({ id, placeUrl }) => {
              const text = tx.education[id];
              return (
                <TimelineItem
                  key={id}
                  title={text.title}
                  place={text.place}
                  placeUrl={placeUrl}
                  date={text.date}
                  desc={text.desc}
                />
              );
            })}
          </Timeline>
          </Reveal>
        </div>

      </Container>
    </section>
  )
}

export default Experience;
