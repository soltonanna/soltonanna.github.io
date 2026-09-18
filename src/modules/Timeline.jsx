import React, { Children, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

/**
 * Vertical timeline. On small screens only the first `mobileLimit`
 * items are shown until the visitor expands the list.
 */
const Timeline = ({ children, mobileLimit = 4, variant = 'default' }) => {
  const [expanded, setExpanded] = useState(false);
  const count = Children.count(children);
  const collapsible = count > mobileLimit;

  return (
    <div className={`timeline timeline--${variant}`} style={{ '--mobile-limit': mobileLimit }}>
      <ol className={`timeline__list ${collapsible && !expanded ? 'is-collapsed' : ''}`} data-limit={mobileLimit}>
        {children}
      </ol>
      {collapsible && (
        <button
          type="button"
          className="timeline__more button button--secondary button--md"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          <span className="button__label">{expanded ? 'Hide' : `Load More (${count - mobileLimit})`}</span>
          <span className="button__icon"><FiChevronDown aria-hidden="true" style={{ transform: expanded ? 'rotate(180deg)' : 'none' }} /></span>
        </button>
      )}
    </div>
  );
};

export default Timeline;
