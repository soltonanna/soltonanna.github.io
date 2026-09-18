import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDownRight, FiDownload } from 'react-icons/fi';

import Container from '../modules/Container';
import SocialIcons from '../modules/SocialIcons';
import Button from '../modules/Button';
import { downloadCv } from '../utils/download-cv.js';
import { portfolioItems } from '../utils/portfolio-items.js';
import { useT } from '../i18n/LanguageContext.jsx';

// Recruiter-scannable facts: role, seniority, stack, location, languages, proof.
// Texts live in i18n/locales/*.jsx (`hero.profile`).
const profileKeys = ['role', 'experience', 'stack', 'location', 'languages', 'projects'];

const MainInfo = () => {
  const t = useT();
  const reduce = useReducedMotion();
  const profile = profileKeys.map((key) => {
    const { label, value } = t.hero.profile[key];
    return { label, value: typeof value === 'function' ? value(portfolioItems.length) : value };
  });
  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.2, 0.7, 0.2, 1] },
        };

  return (
    <section id="main-info" className="hero">
      <Container className="hero__inner">
        <div className="hero__content">
          <motion.p className="hero__eyebrow" {...fadeUp(0)}>
            <span className="hero__dot" aria-hidden="true" />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1 className="hero__title" {...fadeUp(0.05)}>
            {t.hero.firstName} <em>{t.hero.lastName}</em>
          </motion.h1>

          <motion.p className="hero__lead" {...fadeUp(0.1)}>
            {t.hero.lead}
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.15)}>
            <Button href="#portfolio" variant="primary" icon={<FiArrowDownRight aria-hidden="true" />}>
              {t.hero.viewProjects}
            </Button>
            <Button variant="secondary" onClick={downloadCv} icon={<FiDownload aria-hidden="true" />}>
              {t.common.downloadCv}
            </Button>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <SocialIcons variant="outline" className="hero__social" />
          </motion.div>
        </div>

        <motion.dl className="profile-card" {...fadeUp(0.2)}>
          {profile.map(({ label, value }) => (
            <div className="profile-card__row" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
};

export default MainInfo;
