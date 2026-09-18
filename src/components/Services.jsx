import React from 'react';

import Container from '../modules/Container';
import Title_Desc from '../modules/Title_Desc';
import ServiceCard from '../modules/ServiceCard';
import Reveal from '../modules/Reveal';
import { sectionIndex } from '../utils/nav-items.js';
import { useT } from '../i18n/LanguageContext.jsx';

// Workflow spreadsheets, in the same order as `services.items` in i18n/locales/*.jsx.
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1WTbRX_qa0Qbw_6Tu_V-5GPYu5WB4CBtaAk-NCMRRcn4/edit';
const workflowSheets = [
  `${SHEET_URL}#gid=0`,
  `${SHEET_URL}#gid=170876302`,
  `${SHEET_URL}#gid=1236603325`,
  `${SHEET_URL}#gid=1750761091`,
];

const Services = () => {
  const t = useT();
  const tx = t.services;

  return (
    <section id='services' className='section section--services'>
        <Container className='services'>
            <Title_Desc
              index={sectionIndex('services')}
              eyebrow={tx.eyebrow}
              title={tx.title}
            />
            <Reveal className='services__grid'>
              {tx.items.map((item, i) => (
                <ServiceCard
                  key={i}
                  title={item.title}
                  place={item.price}
                  desc={item.desc}
                  fullDesc={item.fullDesc}
                  moreDesc={
                    <>
                      <h3>
                        {tx.workflow}{' '}
                        <a href={workflowSheets[i]} target="_blank" rel="noopener noreferrer">{tx.openSheet}</a>
                      </h3>
                      {item.more}
                    </>
                  }
                />
              ))}
            </Reveal>
        </Container>
    </section>
  )
}

export default Services;
