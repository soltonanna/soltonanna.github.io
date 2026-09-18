import React from 'react';

/**
 * Section heading: mono index + eyebrow, large title, optional description.
 * (Kept the original name/API: `title`, `desc`.)
 */
const Title_Desc = ({ title, desc, index, eyebrow, className = '', as: Tag = 'h2' }) => (
  <header className={`section-heading ${className}`.trim()}>
    {(index || eyebrow) && (
      <p className="section-heading__eyebrow">
        {index && <span className="section-heading__index">{index}</span>}
        {eyebrow && <span>{eyebrow}</span>}
      </p>
    )}
    {title && <Tag className="section-heading__title">{title}</Tag>}
    {desc && <div className="section-heading__desc">{desc}</div>}
  </header>
);

export default Title_Desc;
