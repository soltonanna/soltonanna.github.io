import React from 'react';
import { motion } from 'framer-motion';

import Container from '../modules/Container';
import SocialIcons from '../modules/SocialIcons';

const MainInfo = () => {
  return (
    <section id="main-info">
      <Container className="main-info">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Sultanova Anahit
          </motion.h1>

          <motion.div 
            className='position'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I'm a Front-end, Web developer
          </motion.div>

          <SocialIcons />

        </motion.div>
      </Container>
    </section>
  )
}

export default MainInfo;