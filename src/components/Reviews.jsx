import React from 'react';
/** Sliders */
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

/** Modules */
import Container from '../modules/Container';
import Title_Desc from '../modules/Title_Desc';

/** Data */
import { reviewItems } from '../utils/review-items';

const Reviews = () => {
  return (
    <section id="reviews">
        <Container className="reviews">
            <Title_Desc 
            title="Reviews"
            desc="Explore the feedback from my satisfied clients, showcasing their experiences with my web development services."
            />
            <Splide aria-label="My Favorite Images">
              {
                reviewItems.map((singleReview) => (
                  <SplideSlide key={singleReview.name}>
                    <img src={singleReview.imgUrl} alt={singleReview.name} />
                 
                    <div className='review-text'>
                      <div>{singleReview.review}</div>
                      <h5>-{singleReview.name}-</h5>
                      <p>{singleReview.position}</p>
                    </div>
                  </SplideSlide>
                ))
              }
            </Splide>
        </Container>
    </section>
  )
}

export default Reviews