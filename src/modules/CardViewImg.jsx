import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { InfoModal } from './InfoModal.jsx';
import useDetails from '../hooks/useDetails';
import { useT } from '../i18n/LanguageContext.jsx';

/** Blog post card: whole card opens the post dialog. */
const CardViewImg = ({ title, imgUrl, date, desc, moreDesc, addClass }) => {
  const t = useT();
  const { modalOpen, openModal, closeModal } = useDetails();

  return (
    <article className="post-card">
      <div className="post-card__media">
        <img src={imgUrl} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="post-card__body">
        <p className="post-card__meta">
          <time>{date}</time> <span aria-hidden="true">·</span> {t.blog.by}
        </p>
        <h3 className="post-card__title">
          {moreDesc ? (
            <button type="button" className="post-card__link" onClick={openModal}>
              {title}
            </button>
          ) : (
            title
          )}
        </h3>
        <p className="post-card__desc">{desc}</p>
        {moreDesc && (
          <span className="post-card__more" aria-hidden="true">
            {t.common.readMore} <FiArrowUpRight />
          </span>
        )}
      </div>
      {modalOpen && (
        <InfoModal title={title} message={moreDesc} addClass={addClass} onConfirm={closeModal} />
      )}
    </article>
  );
};

export default CardViewImg;
