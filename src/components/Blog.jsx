import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import CardViewImg from '../modules/CardViewImg.jsx';
import { blogItems } from '../utils/blog-items.js';

const Blog = () => {
  return (
    <section id="blog" >
      <Container className="blog">
        <Title_Desc 
            title='Blog'
            desc="Interesting articles, screenshots and links from innovate and popular topics."
        />
        {<div className='blog-items'>
          {
            blogItems.map(item => {
              return (
              <CardViewImg 
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.name}
                date={item.date}
                desc={item.desc}
                moreDesc={
                  <p dangerouslySetInnerHTML={{__html: item.moreDesc}} />
                }
              />);
            })
          }
        </div>}
      </Container>
    </section>    
  )
}

export default Blog;