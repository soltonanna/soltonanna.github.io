import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import CardViewImg from '../modules/CardViewImg.jsx';

const Blog = () => {
  return (
    <section id="main__blog" >
      <Container className="blog">
        <Title_Desc 
            title='Blog'
            desc="Coming soon... Interesting articles and links from innovate and popular topics"
        />
        <div className='blog_items'>
          <CardViewImg 
            title='Blog Item 1'
            desc="Lorem mollit sunt reprehenderit laborum nulla id. Nostrud sit consequat non deserunt id amet laboris irure commodo sit aute id adipisicing irure. "
            moreDesc="Id cupidatat id est consectetur deserunt laborum eiusmod enim ut esse. Non est nisi deserunt consectetur laborum sunt. Eu et consequat dolore sunt cillum velit ea consequat proident qui excepteur eu. Cillum proident qui cillum et exercitation incididunt ea proident."
            
          />
        </div>
      </Container>
    </section>    
  )
}

export default Blog;