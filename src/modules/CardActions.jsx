import React from 'react';
import { FiArrowUpRight, FiPlus, FiMinus } from 'react-icons/fi';
import { useT } from '../i18n/LanguageContext.jsx';

/** "Read more / Hide" toggle + "More Info" dialog trigger used by several cards. */
const CardActions = ({ hasFull, expanded, onToggle, hasMore, onMore }) => {
  const t = useT();
  if (!hasFull && !hasMore) return null;
  return (
    <div className="card-actions">
      {hasFull && (
        <button type="button" className="text-button" onClick={onToggle} aria-expanded={expanded}>
          {expanded ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
          {!expanded ? t.common.readMore : t.common.hide}
        </button>
      )}
      {hasMore && (
        <button type="button" className="text-button text-button--strong" onClick={onMore}>
          {t.common.moreInfo} <FiArrowUpRight aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default CardActions;
