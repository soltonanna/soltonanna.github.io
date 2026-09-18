import React from 'react';
import { InfoModal } from './InfoModal.jsx';
import CardActions from './CardActions.jsx';
import useDetails from '../hooks/useDetails';

/** Service offer card. Same props as the former CardView (`place` = price). */
const ServiceCard = ({ title, place, desc, fullDesc, moreDesc }) => {
  const { expanded, toggleExpanded, modalOpen, openModal, closeModal } = useDetails();

  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="service-card__index" aria-hidden="true" />
        {place && <span className="price-pill">{place}</span>}
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{expanded && fullDesc ? fullDesc : desc}</p>
      <CardActions
        hasFull={Boolean(fullDesc)}
        expanded={expanded}
        onToggle={toggleExpanded}
        hasMore={Boolean(moreDesc)}
        onMore={openModal}
      />
      {modalOpen && <InfoModal title={title} message={moreDesc} onConfirm={closeModal} />}
    </article>
  );
};

export default ServiceCard;
