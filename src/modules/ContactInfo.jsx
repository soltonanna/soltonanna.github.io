import React, { useEffect, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const MAP_URL =
  "https://www.google.com/maps/place/40%C2%B010'11.8%22N+44%C2%B026'50.4%22E/@40.169941,44.4467798,223m/data=!3m2!1e3!4b1!4m20!1m13!4m12!1m6!1m2!1s0x406abdd8ab0d759f:0xf3bfc983b7522755!2s105+Andranik+Zoravar+St,+Yerevan,+Armenia!2m2!1d44.4423586!2d40.1660812!1m3!2m2!1d44.4473231!2d40.1699473!3e2!3m5!1s0x0:0x3e8e892a9da78e46!7e2!8m2!3d40.1699405!4d44.4473267";

const contacts = [
  {
    key: 'email',
    Icon: FiMail,
    label: 'Email',
    value: 'sultanova.anahit92@gmail.com',
    copy: 'sultanova.anahit92@gmail.com',
    href: 'mailto:sultanova.anahit92@gmail.com',
  },
  {
    key: 'phone',
    Icon: FiPhone,
    label: 'Phone',
    value: '(+374 77) 42-18-86',
    copy: '+37477421886',
    href: 'tel:+37477421886',
  },
  {
    key: 'location',
    Icon: FiMapPin,
    label: 'Location',
    value: 'Zoravar Andranik str, Yerevan, Armenia',
    copy: MAP_URL,
    href: MAP_URL,
  },
];

const ContactInfo = () => {
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(null), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="contact-info">
      <ul className="contact-info__list">
        {contacts.map(({ key, Icon, label, value, copy, href }) => (
          <li key={key} className="contact-tile">
            <CopyToClipboard text={copy} onCopy={() => setCopied(key)}>
              <button type="button" className="contact-tile__main" aria-label={`Copy ${label}`}>
                <span className="contact-tile__icon"><Icon aria-hidden="true" /></span>
                <span className="contact-tile__text">
                  <span className="contact-tile__label">{label}</span>
                  <span className="contact-tile__value">{value}</span>
                </span>
                <span className="contact-tile__copy" aria-hidden="true">
                  {copied === key ? <FiCheck /> : <FiCopy />}
                </span>
              </button>
            </CopyToClipboard>
            <a
              className="contact-tile__open"
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`Open ${label}`}
            >
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <p className={`toast ${copied ? 'is-visible' : ''}`} role="status" aria-live="polite">
        {copied && (<><FiCheck aria-hidden="true" /> Copied to clipboard</>)}
      </p>
    </div>
  );
};

export default ContactInfo;
