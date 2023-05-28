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
    <section id='portfolio'>
      <Container className="portfolio">
        <Title_Desc 
          title="Portfolio"
          desc="Allow me to showcase some of my works. Here, you can explore a collection of template examples, simple projects built with React or Vanilla JS, reusable modules, interactive animations, and small games. You can view the demo versions and access the corresponding source codes on my GitHub repositories."
        />
        <div className='filter-block' >
          <Button onClick={handleCategoryChange} value='all' className='btn-1'>
            All Categories
          </Button>
          <Button onClick={handleCategoryChange} value='temp' className='btn-1'>
            Templates
          </Button>
          <Button onClick={handleCategoryChange} value='games' className='btn-1'>
            Games
          </Button>
          <Button onClick={handleCategoryChange} value='apps' className='btn-1'>
            Apps
          </Button>
          <Button onClick={handleCategoryChange} value='anime' className='btn-1'>
            Animation
          </Button>
          <Button onClick={handleCategoryChange} value='modules' className='btn-1'>
            Modules
          </Button>
          <Button onClick={handleCategoryChange} value='wps' className='btn-1'>
            WordPress
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
                    <p dangerouslySetInnerHTML={{__html: item.desc}} />
                    {item.codeUrl && <p> See <a href={item.codeUrl} target='_blank'>CODE</a></p>}
                    {item.demoUrl && <p> See <a href={item.demoUrl} target='_blank'>DEMO</a></p>}
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