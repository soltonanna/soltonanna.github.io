import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import CardViewImg from '../modules/CardViewImg.jsx';
import { GitIcon } from '../utils/media-files.js';

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
            title='Git'
            imageUrl={GitIcon}
            date='14.11.2022'
            desc="In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview."
            moreDesc={
              <>
                <h3>What Is Git and Why Is It Used?</h3>
                <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p> <p>In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.In this topic I've been collected some main information about Git. Why we used it ? And some more popular questions and answers on interview.</p>
              </>
            }
            
          />
        </div>
      </Container>
    </section>    
  )
}

export default Blog;