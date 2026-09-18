import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { InfoModal } from './InfoModal.jsx';
import CardActions from './CardActions.jsx';
import useDetails from '../hooks/useDetails';

/** Resume entry. Same props as the former CardView. */
const TimelineItem = ({ title, place, placeUrl, date = '', desc, fullDesc, moreDesc }) => {
  const { expanded, toggleExpanded, modalOpen, openModal, closeModal } = useDetails();
  const [period, duration] = date.split('·').map((part) => part.trim());

  return (
    <li className="timeline-item">
      <div className="timeline-item__meta">
        <span className="timeline-item__period">{period}</span>
        {duration && <span className="timeline-item__duration">{duration}</span>}
      </div>

      <article className="timeline-item__body">
        <h3 className="timeline-item__title">{title}</h3>
        <p className="timeline-item__place">
          {placeUrl ? (
            <a href={placeUrl} target="_blank" rel="noopener noreferrer">
              {place} <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span>{place}</span>
          )}
        </p>

        <p className="timeline-item__desc">{expanded && fullDesc ? fullDesc : desc}</p>

        <CardActions
          hasFull={Boolean(fullDesc)}
          expanded={expanded}
          onToggle={toggleExpanded}
          hasMore={Boolean(moreDesc)}
          onMore={openModal}
        />
      </article>

      {modalOpen && <InfoModal title={title} message={moreDesc} onConfirm={closeModal} />}
    </li>
  );
};

export default TimelineItem;
