import React from 'react';

/**
 * Button / link-button.
 * variant: 'primary' | 'secondary' | 'ghost' | 'link'
 * size: 'md' | 'sm'
 * Pass `href` to render an anchor.
 */
const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'end',
  ...rest
}) => {
  const classes = ['button', `button--${variant}`, `button--${size}`, className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'start' && <span className="button__icon">{icon}</span>}
      <span className="button__label">{children}</span>
      {icon && iconPosition === 'end' && <span className="button__icon">{icon}</span>}
    </>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
