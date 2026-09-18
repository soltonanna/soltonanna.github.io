import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Subtle, one-time fade-up when the block enters the viewport. */
const Reveal = ({ children, className, delay = 0, as = 'div', ...rest }) => {
  const reduce = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className} {...rest}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1], delay }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Reveal;
