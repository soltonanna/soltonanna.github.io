import React from 'react';

import Container from '../modules/Container';
import Title_Desc from '../modules/Title_Desc';
import ServiceCard from '../modules/ServiceCard';
import Reveal from '../modules/Reveal';
import { sectionIndex } from '../utils/nav-items.js';
import { useT } from '../i18n/LanguageContext.jsx';

// Workflow spreadsheets, keyed by `id` of `services.items` in i18n/locales/*.jsx.
// A card without an entry here simply shows no "Workflow" link.
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1WTbRX_qa0Qbw_6Tu_V-5GPYu5WB4CBtaAk-NCMRRcn4/edit';
const workflowSheets = {
  wordpress: `${SHEET_URL}#gid=0`,
  support: `${SHEET_URL}#gid=1781407907`,
  speed: `${SHEET_URL}#gid=751572246`,
  react: `${SHEET_URL}#gid=674369871`,
  shopify: `${SHEET_URL}#gid=288358989`,
  ai: `${SHEET_URL}#gid=438632895`,
};

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
              desc={tx.desc}
            />
            <Reveal className='services__grid'>
              {tx.items.map((item) => {
                const sheet = workflowSheets[item.id];
                return (
                  <ServiceCard
                    key={item.id}
                    title={item.title}
                    place={item.price}
                    desc={item.desc}
                    fullDesc={item.fullDesc}
                    moreDesc={
                      <>
                        {sheet && (
                          <h3>
                            {tx.workflow}{' '}
                            <a href={sheet} target="_blank" rel="noopener noreferrer">{tx.openSheet}</a>
                          </h3>
                        )}
                        {item.more}
                        <h3>{tx.howIWorkTitle}</h3>
                        {tx.howIWork(item.price)}
                      </>
                    }
                  />
                );
              })}
            </Reveal>
        </Container>
    </section>
  )
}

export default Services;
