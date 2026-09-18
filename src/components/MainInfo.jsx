import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDownRight, FiDownload } from 'react-icons/fi';

import Container from '../modules/Container';
import SocialIcons from '../modules/SocialIcons';
import Button from '../modules/Button';
import { downloadCv } from '../utils/download-cv.js';
import { portfolioItems } from '../utils/portfolio-items.js';

// Recruiter-scannable facts: role, seniority, stack, location, languages, proof.
const profile = [
  { label: 'Role', value: 'Full-Stack Web Developer' },
  { label: 'Experience', value: '10+ years (since 2014)' },
  { label: 'Stack', value: 'React · TypeScript · PHP · WordPress' },
  { label: 'Based in', value: 'Yerevan, Armenia · Remote' },
  { label: 'Languages', value: 'English · Russian · Armenian' },
  { label: 'Projects', value: `${portfolioItems.length} in portfolio` },
];

const MainInfo = () => {
  const reduce = useReducedMotion();
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
            Full-Stack Web Developer
          </motion.p>

          <motion.h1 className="hero__title" {...fadeUp(0.05)}>
            Sultanova <em>Anahit</em>
          </motion.h1>

          <motion.p className="hero__lead" {...fadeUp(0.1)}>
            I build fast, reliable web apps with React and TypeScript, backed by 10+&nbsp;years of full-stack experience with PHP and WordPress.
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.15)}>
            <Button href="#portfolio" variant="primary" icon={<FiArrowDownRight aria-hidden="true" />}>
              View projects
            </Button>
            <Button variant="secondary" onClick={downloadCv} icon={<FiDownload aria-hidden="true" />}>
              Download CV
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
