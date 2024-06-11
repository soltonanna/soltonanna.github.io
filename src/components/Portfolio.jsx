import React, { useState, useEffect, useMemo } from 'react';
import 'react-tabs/style/react-tabs.css';

import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import PortfolioItem from '../modules/PortfolioItem.jsx';
import Button from '../modules/Button.jsx';

import { portfolioItems } from '../utils/portfolio-items.js';

const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [loadMore, setLoadMore] = useState(false);
  
  useEffect(() => {
    setPortfolioList(portfolioItems);
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const loadMoreHandler = (event) => {
    event.preventDefault();
    setLoadMore(!loadMore);
  }

  function getFilteredList() {
    if (!selectedCategory || selectedCategory === 'all') {
      return portfolioList;
    }
    setLoadMore(false);
    return portfolioList.filter((item) => item.category === selectedCategory);
    
  }
  let filteredList = useMemo(getFilteredList, [selectedCategory, portfolioList]);

  return (
    <section id='portfolio'>
      <Container className="portfolio">
        <Title_Desc 
          title="Portfolio"
          desc="Let me present a selection of my projects. You'll find a variety of examples including template designs, projects crafted with React or Vanilla JS, reusable modules, interactive animations, small-scale games, and websites developed using WordPress. Feel free to explore the demo versions and access the corresponding source codes available on my GitHub repositories."
        />
        <div className='for-mobile-view'>
          <div className='filter-block' >
            <Button onClick={handleCategoryChange} value='all' className='btn-1'>
              All Categories
            </Button>
            <Button onClick={handleCategoryChange} value='apps' className='btn-1'>
              React Apps
            </Button>
            <Button onClick={handleCategoryChange} value='wps' className='btn-1'>
              WordPress
            </Button>
            <Button onClick={handleCategoryChange} value='temp' className='btn-1'>
              Templates
            </Button>
            <Button onClick={handleCategoryChange} value='games' className='btn-1'>
              Games
            </Button>
            <Button onClick={handleCategoryChange} value='anime' className='btn-1'>
              Animation
            </Button>
            
          </div>
          
          <div className={`items-block ${loadMore ? 'active' : ''}`}>
            {
              filteredList.length ? filteredList.map(item => {
                return (
                <PortfolioItem 
                  key={item.id}
                  imgUrl={item.imgUrl}
                  title={item.name}
                  demoUrl={item.demoUrl}
                  codeUrl={item.codeUrl}
                />);
              }) : <p>No items yet...</p>
            }
          </div>
        </div>
        {
          filteredList.length > 6 && (
            <Button className="load-more" onClick={loadMoreHandler}>
             {!loadMore ? "Load More" : "Close" }
            </Button>
          )
        }
        
      </Container>
    </section>
  )
}

export default Portfolio;