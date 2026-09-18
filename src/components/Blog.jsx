import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import CardViewImg from '../modules/CardViewImg.jsx';
import Reveal from '../modules/Reveal.jsx';
import { blogItems, BLOG_RESOURCE } from '../utils/blog-items.js';
import { sectionIndex } from '../utils/nav-items.js';
import { useT } from '../i18n/LanguageContext.jsx';

const Blog = () => {
  const t = useT();
  const tx = t.blog;

  return (
    <section id="blog" className="section section--blog">
      <Container className="blog">
        <Title_Desc
          index={sectionIndex('blog')}
          eyebrow={tx.eyebrow}
          title={tx.title}
          desc={tx.desc}
        />
        <Reveal className="blog__list">
          {blogItems.map((item) => {
            const text = tx.posts[item.id] || {};
            const html = `${text.intro || ''}${item.moreDesc}<hr /><p>${tx.resources} <a href="${BLOG_RESOURCE.url}" target="_blank" rel="noopener noreferrer">${BLOG_RESOURCE.title}</a></p>`;
            return (
              <CardViewImg
                key={item.id}
                imgUrl={item.imgUrl}
                title={text.name || item.name}
                date={item.date}
                desc={text.desc || item.desc}
                addClass={true}
                moreDesc={<div dangerouslySetInnerHTML={{ __html: html }} />}
              />
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
};

export default Blog;
