import React from 'react';

import Container from '../modules/Container';
import Title_Desc from '../modules/Title_Desc';
import Carousel from '../modules/Carousel';
import Reveal from '../modules/Reveal';

import { reviewItems } from '../utils/review-items';
import { sectionIndex } from '../utils/nav-items.js';
import { useT } from '../i18n/LanguageContext.jsx';

const Reviews = () => {
  const t = useT();
  const tx = t.reviews;
  return (
  <section id="reviews" className="section section--reviews">
    <Container className="reviews">
      <Title_Desc
        index={sectionIndex('reviews')}
        eyebrow={tx.eyebrow}
        title={tx.title}
        desc={tx.desc}
      />
      <Reveal>
        <Carousel label={tx.carouselLabel} className="carousel--masonry-lg">
          {reviewItems.map((singleReview) => {
            const text = tx.items[singleReview.id] || singleReview;
            return (
            <figure className="review" key={singleReview.id}>
              <span className="review__mark" aria-hidden="true">“</span>
              <blockquote className="review__quote">{text.review}</blockquote>
              <figcaption className="review__author">
                <img src={singleReview.imgUrl} alt={singleReview.name} loading="lazy" />
                <span>
                  <strong>{singleReview.name}</strong>
                  <span>{text.position}</span>
                </span>
              </figcaption>
            </figure>
            );
          })}
        </Carousel>
      </Reveal>
    </Container>
  </section>
  );
};

export default Reviews;
