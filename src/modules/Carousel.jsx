import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useT } from '../i18n/LanguageContext.jsx';

/** Lightweight scroll-snap carousel with arrows and dots (no dependencies). */
const Carousel = ({ children, label, className = '' }) => {
  const t = useT();
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  const slideWidth = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild;
    if (!first) return 1;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.getBoundingClientRect().width + gap;
  };

  const goTo = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(count - 1, index));
    track.scrollTo({ left: clamped * slideWidth(), behavior: 'smooth' });
  }, [count]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let frame;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActive(Math.round(track.scrollLeft / slideWidth())));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(active + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(active - 1); }
  };

  return (
    <div className={`carousel ${className}`.trim()} role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="carousel__track" ref={trackRef} tabIndex={0} onKeyDown={onKeyDown}>
        {Children.map(children, (child, i) => (
          <div
            className="carousel__slide"
            role="group"
            aria-roledescription="slide"
            aria-label={t.common.slideOf(i + 1, count)}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="carousel__controls">
        <div className="carousel__dots">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel__dot ${i === active ? 'is-active' : ''}`}
              aria-label={t.common.goToSlide(i + 1)}
              aria-current={i === active}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className="carousel__count" aria-hidden="true">
          {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
        <div className="carousel__arrows">
          <button type="button" className="icon-button icon-button--outline" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label={t.common.previous}>
            <FiArrowLeft />
          </button>
          <button type="button" className="icon-button icon-button--outline" onClick={() => goTo(active + 1)} disabled={active >= count - 1} aria-label={t.common.next}>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
