import React from 'react';
import { FiAward } from 'react-icons/fi';

/** Skill chip. Optional `url` (reference link) and `starUrl` (certificate PDF). */
const ProgItem = ({ title, url, star, starUrl }) => (
  <li className={`chip ${star ? 'chip--certified' : ''}`}>
    {url && url !== '#' ? (
      <a className="chip__label" href={url} target="_blank" rel="noopener noreferrer">{title}</a>
    ) : (
      <span className="chip__label">{title}</span>
    )}
    {star && (
      <a
        className="chip__badge"
        href={starUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} certificate`}
        title="Certificate"
      >
        <FiAward aria-hidden="true" />
      </a>
    )}
  </li>
);

export default ProgItem;
