import React from 'react';
import { FaLinkedinIn, FaTelegramPlane, FaGithub } from 'react-icons/fa';

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anahit-sultanova-8323a0a4/', Icon: FaLinkedinIn },
  { label: 'Telegram', href: 'https://t.me/soltonanna', Icon: FaTelegramPlane },
  { label: 'GitHub', href: 'https://github.com/soltonanna', Icon: FaGithub },
];

const SocialIcons = ({ className = '', variant = 'default' }) => (
  <ul className={`social-icons social-icons--${variant} ${className}`.trim()}>
    {socialLinks.map(({ label, href, Icon }) => (
      <li key={label}>
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
          <Icon aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
