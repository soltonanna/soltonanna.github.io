import React from 'react';
import { FiEye, FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { useT } from '../i18n/LanguageContext.jsx';

const PortfolioItem = ({ imgUrl, title, demoUrl, codeUrl, category }) => {
  const t = useT();
  return (
  <article className="project-card">
    <a
      className="project-card__media"
      href={imgUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.common.preview(title)}
    >
      <img src={imgUrl} alt={title} loading="lazy" decoding="async" />
      <span className="project-card__preview" aria-hidden="true">
        <FiEye />
      </span>
    </a>
    <div className="project-card__body">
      {category && <p className="project-card__category">{category}</p>}
      <h3 className="project-card__title">{title}</h3>
      <div className="project-card__links">
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="pill-link">
            {t.common.demo} <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
        {codeUrl && (
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="pill-link">
            <FaGithub aria-hidden="true" /> {t.common.code}
          </a>
        )}
      </div>
    </div>
  </article>
  );
};

export default PortfolioItem;
