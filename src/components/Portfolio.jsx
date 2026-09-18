import React, { useMemo, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import PortfolioItem from '../modules/PortfolioItem.jsx';
import Button from '../modules/Button.jsx';
import Reveal from '../modules/Reveal.jsx';

import { portfolioItems } from '../utils/portfolio-items.js';
import { portfolioCategories } from '../utils/portfolio-categories.js';
import { sectionIndex } from '../utils/nav-items.js';
import { useT } from '../i18n/LanguageContext.jsx';

const VISIBLE_ITEMS = 6;

const Portfolio = () => {
  const t = useT();
  const tx = t.portfolio;
  const categoryLabel = (value) => tx.categories[value] ?? '';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loadMore, setLoadMore] = useState(false);

  const counts = useMemo(() => {
    const result = { all: portfolioItems.length };
    portfolioItems.forEach((item) => {
      result[item.category] = (result[item.category] || 0) + 1;
    });
    return result;
  }, []);

  const filteredList = useMemo(
    () =>
      selectedCategory === 'all'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setLoadMore(false);
  };

  const hasMore = filteredList.length > VISIBLE_ITEMS;

  return (
    <section id='portfolio' className='section section--portfolio'>
      <Container className="portfolio">
        <div className='portfolio__head'>
          <Title_Desc
            index={sectionIndex('portfolio')}
            eyebrow={tx.eyebrow}
            title={tx.title}
            desc={tx.desc}
          />
        </div>

        <div className='filter-bar' role='toolbar' aria-label={tx.filterLabel}>
          {portfolioCategories.map(({ value }) => (
            <button
              key={value}
              type='button'
              className={`filter-chip ${selectedCategory === value ? 'is-active' : ''}`}
              aria-pressed={selectedCategory === value}
              onClick={() => handleCategoryChange(value)}
            >
              {categoryLabel(value)}
              <span className='filter-chip__count'>{counts[value] || 0}</span>
            </button>
          ))}
        </div>

        <Reveal key={selectedCategory} className={`project-grid ${hasMore && !loadMore ? 'is-limited' : ''}`}>
          {filteredList.length ? (
            filteredList.map((item) => (
              <PortfolioItem
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.name}
                demoUrl={item.demoUrl}
                codeUrl={item.codeUrl}
                category={categoryLabel(item.category)}
              />
            ))
          ) : (
            <p className='empty-state'>{tx.empty}</p>
          )}
        </Reveal>

        {hasMore && (
          <div className='portfolio__more'>
            <Button
              variant='secondary'
              onClick={() => setLoadMore((v) => !v)}
              aria-expanded={loadMore}
              icon={<FiChevronDown aria-hidden="true" style={{ transform: loadMore ? 'rotate(180deg)' : 'none' }} />}
            >
              {!loadMore ? tx.showAll : tx.showLess}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Portfolio;
