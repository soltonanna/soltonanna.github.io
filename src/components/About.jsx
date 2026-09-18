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
import { useT } from '../i18n/LanguageContext.jsx';

const SkillGroup = ({ title, items, names = {} }) => (
  <div className='skill-group'>
    <h3 className='skill-group__title'>{title}</h3>
    <ul className='chip-list'>
      {items.map((item) => (
        <ProgItem
          key={item.title}
          title={names[item.title] || item.title}
          url={item.url}
          star={Boolean(item.certificate)}
          starUrl={item.certificate}
        />
      ))}
    </ul>
  </div>
);

const About = () => {
  const t = useT();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id='about' className='section section--about'>
      <Container className="about">
        <div className='about__text'>
          <Title_Desc index={sectionIndex('about')} eyebrow={t.about.eyebrow} title={t.about.title} />

          <div className={`about__body prose ${expanded ? 'is-expanded' : ''}`}>
              {t.about.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>

          <div className='about__actions'>
            <button
              type='button'
              className='text-button about__toggle'
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? t.about.showLess : t.about.readMore}
              <FiChevronDown aria-hidden="true" style={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
            </button>
            <Button onClick={downloadCv} variant='primary' className='download-cv' icon={<FiDownload aria-hidden="true" />}>
              {t.common.downloadCv}
            </Button>
          </div>
        </div>

        <Reveal as='aside' className='about__skills skills-panel' aria-label={t.about.skills}>
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.id}
              title={t.about.groups[group.id] || group.title}
              items={group.items}
              names={t.about.skillNames}
            />
          ))}
          <div className='skills-panel__personal'>
            {personalGroups.map((group) => (
              <SkillGroup
                key={group.id}
                title={t.about.groups[group.id] || group.title}
                items={(t.about.personal[group.id] || []).map((title) => ({ title }))}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default About;
