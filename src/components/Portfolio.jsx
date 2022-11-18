import React, { useState, useEffect, useMemo } from 'react';
import 'react-tabs/style/react-tabs.css';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import PortfolioItem from '../modules/PortfolioItem.jsx';
import Button from '../modules/Button.jsx';
import { portfolioItems } from '../utils/portfolio-items.js';

const Portfolio = () => {
  const [portfolioList, sePortfolioList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  
  useEffect(() => {
    sePortfolioList(portfolioItems);
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory || selectedCategory === 'all') {
      return portfolioList;
    }
    
    return portfolioList.filter((item) => item.category === selectedCategory);
  }
  var filteredList = useMemo(getFilteredList, [selectedCategory, portfolioList]);

  return (
    <section id='main__portfolio'>
      <Container className="portfolio">
        <Title_Desc 
          title="Portfolio"
          desc="Let me present you some of my works, included Single page Applications (SPA), some simple projects, modules and games. You can see Demo versions and code on github repositories."
        />
        <div className='filter-block' >
          <Button onClick={handleCategoryChange} value='all' className='btn-1'>
              All Categories
          </Button>
          <Button onClick={handleCategoryChange} value='spa' className='btn-1'>
            Single Page App
          </Button>
          <Button onClick={handleCategoryChange} value='games' className='btn-1'>
            Games
          </Button>
          <Button onClick={handleCategoryChange} value='apps' className='btn-1'>
            Apps
          </Button>
          <Button onClick={handleCategoryChange} value='modules' className='btn-1'>
            Modules
          </Button>
        </div>
        
        <div className='items-block'>
          {
            filteredList.length ? filteredList.map(item => {
              return (
              <PortfolioItem 
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.name}
                desc={
                  <>
                    <p> {item.desc}</p>
                    <p> See <a href={item.codeUrl} target='_blank'>CODE</a></p>
                    <p> See <a href={item.demoUrl} target='_blank'>DEMO</a></p>
                  </>
                }
              />);
            }) : <p>No items yet...</p>
          }
        </div>
      </Container>
    </section>
  )
}

export default Portfolio;