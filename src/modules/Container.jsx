import React from 'react';

const Container = ({ className = '', children, ...rest }) => (
  <div className={`container ${className}`.trim()} {...rest}>
    {children}
  </div>
);

export default Container;
