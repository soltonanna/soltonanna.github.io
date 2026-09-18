import React, { useState } from 'react';
import { FiDownload, FiChevronDown } from 'react-icons/fi';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import Button from '../modules/Button.jsx';
import ProgItem from '../modules/ProgItem.jsx';
import Reveal from '../modules/Reveal.jsx';
import { skillGroups, personalGroups } from '../utils/skills.js';
import { downloadCv } from '../utils/download-cv.js';
import { sectionIndex } from '../utils/nav-items.js';

const SkillGroup = ({ title, items }) => (
  <div className='skill-group'>
    <h3 className='skill-group__title'>{title}</h3>
    <ul className='chip-list'>
      {items.map((item) => (
        <ProgItem
          key={item.title}
          title={item.title}
          url={item.url}
          star={Boolean(item.certificate)}
          starUrl={item.certificate}
        />
      ))}
    </ul>
  </div>
);

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id='about' className='section section--about'>
      <Container className="about">
        <div className='about__text'>
          <Title_Desc index={sectionIndex('about')} eyebrow="About" title="About me" />

          <div className={`about__body prose ${expanded ? 'is-expanded' : ''}`}>
              <p key="p1">I'm a full-stack web developer with 10+ years of experience building websites, plugins and web applications. I focus on React and TypeScript on the front end, and bring deep production experience with PHP, MySQL, REST APIs and WordPress on the back end.</p>
              <p key="p2">I started in 2014 on a WordPress plugin team, helping build and maintain widely used plugins such as <a href='https://wordpress.org/plugins/form-maker/' target='_blank' rel='noopener noreferrer'>Form Maker</a> and <a href='https://wordpress.org/plugins/photo-gallery/' target='_blank' rel='noopener noreferrer'>Photo Gallery</a>. As a tech support team lead, I managed 4 junior developers and resolved 3,000+ bugs on live sites. Since 2022 I've worked on JavaScript and React products, including a workspace collaboration tool and an iGaming platform, and delivered 10+ WordPress sites for freelance clients.</p>
              <p key="p3">Right now I'm co-building a full-stack book library app with React 19, TypeScript, Node.js/Express and MongoDB. I use AI tools like Claude, ChatGPT and Cursor every day to prototype, debug and review code faster, while I stay responsible for the quality of every line I ship.</p>
              <p key="p4">Years of customer-facing support taught me to turn vague bug reports into clear fixes and to explain technical decisions in plain language. I'm used to agile teams, with daily stand-ups, sprint planning and code reviews. I hold a degree in Computer Systems and Informatics from the <a href='https://polytech.am/en/institutes/institute-of-information-and-telecommunication-technologies-and-electronics/institute/' target='_blank' rel='noopener noreferrer'>National Polytechnic University of Armenia (SEUA)</a> and work in English, Russian and Armenian.</p>
              <p key="p5">I'm looking for a full-stack or front-end role on a product team that builds with React and TypeScript, remote or in Yerevan. Outside of code, I read, paint, watch films and hike in the mountains.</p>
          </div>

          <div className='about__actions'>
            <button
              type='button'
              className='text-button about__toggle'
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'Read more'}
              <FiChevronDown aria-hidden="true" style={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
            </button>
            <Button onClick={downloadCv} variant='primary' className='download-cv' icon={<FiDownload aria-hidden="true" />}>
              Download CV
            </Button>
          </div>
        </div>

        <Reveal as='aside' className='about__skills skills-panel' aria-label='Skills'>
          {skillGroups.map((group) => <SkillGroup key={group.title} {...group} />)}
          <div className='skills-panel__personal'>
            {personalGroups.map((group) => <SkillGroup key={group.title} {...group} />)}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default About;
