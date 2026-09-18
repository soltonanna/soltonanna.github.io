import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import CardViewImg from '../modules/CardViewImg.jsx';
import Reveal from '../modules/Reveal.jsx';
import { blogItems } from '../utils/blog-items.js';
import { sectionIndex } from '../utils/nav-items.js';

const Blog = () => (
  <section id="blog" className="section section--blog">
    <Container className="blog">
      <Title_Desc
        index={sectionIndex('blog')}
        eyebrow="Blog"
        title="Blog"
        desc="Interesting articles, screenshots and links from innovate and popular topics."
      />
      <Reveal className="blog__list">
        {blogItems.map((item) => (
          <CardViewImg
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.name}
            date={item.date}
            desc={item.desc}
            addClass={true}
            moreDesc={<div dangerouslySetInnerHTML={{ __html: item.moreDesc }} />}
          />
        ))}
      </Reveal>
    </Container>
  </section>
);

export default Blog;
