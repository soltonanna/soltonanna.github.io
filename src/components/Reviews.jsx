import React from 'react';

import Container from '../modules/Container';
import Title_Desc from '../modules/Title_Desc';
import Carousel from '../modules/Carousel';
import Reveal from '../modules/Reveal';

import { reviewItems } from '../utils/review-items';
import { sectionIndex } from '../utils/nav-items.js';

const Reviews = () => (
  <section id="reviews" className="section section--reviews">
    <Container className="reviews">
      <Title_Desc
        index={sectionIndex('reviews')}
        eyebrow="Reviews"
        title="Reviews"
        desc="Explore the feedback from my satisfied clients, showcasing their experiences with my web development services."
      />
      <Reveal>
        <Carousel label="Client reviews" className="carousel--masonry-lg">
          {reviewItems.map((singleReview) => (
            <figure className="review" key={singleReview.id}>
              <span className="review__mark" aria-hidden="true">“</span>
              <blockquote className="review__quote">{singleReview.review}</blockquote>
              <figcaption className="review__author">
                <img src={singleReview.imgUrl} alt={singleReview.name} loading="lazy" />
                <span>
                  <strong>{singleReview.name}</strong>
                  <span>{singleReview.position}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </Reveal>
    </Container>
  </section>
);

export default Reviews;
