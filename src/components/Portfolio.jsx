import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import PortfolioItem from '../modules/PortfolioItem.jsx';
import PortImg1 from '../media/Homepage_back_3.jpg';
import PortImg2 from '../media/Homepage_back_2.jpg';

const Portfolio = () => {
  return (
    <section id='main__portfolio'>
      <Container className="portfolio">
        <Title_Desc 
          title="Portfolio"
          desc="Let me present you some of my works, included Single page Applications (SPA), some simple projects, modules and games. You can see Demo versions and code on github repositories."
        />
        <Tabs>
          <TabList>
            <Tab>All Categories</Tab>
            <Tab>Single Page Application (SPA)</Tab>
            <Tab>Games</Tab>
            <Tab>Simple Apps</Tab>
            <Tab>Modules</Tab>
          </TabList>

          <TabPanel>
            <PortfolioItem 
              imgUrl={PortImg1}
              title='Port 1'
              desc={
                <>
                  <p>Non exercitation enim ex officia nostrud qui nulla veniam dolor. Voluptate cillum elit consequat sit consequat voluptate voluptate culpa excepteur. Labore laboris labore laborum laborum incididunt elit duis amet.</p>
                  <p> See code in <a href='https://github.com/soltonanna/ant-design' target='_blank'>GITHUB</a></p>
                </>
              }
            />
            <PortfolioItem 
              imgUrl={PortImg2}
              title='Port 2'
              desc='Aute sunt ex ea nisi consequat labore. Ea commodo voluptate do ex cillum cillum proident ullamco deserunt laboris et. Sunt elit qui nisi laborum dolore deserunt nostrud voluptate laboris do pariatur veniam. Adipisicing sint laborum laboris qui aliquip proident est nostrud. Ut cupidatat aute laborum occaecat ex sint ullamco laborum do laborum. Do minim eiusmod et consequat ad.'
            />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
          </TabPanel>
        </Tabs>
      </Container>
    </section>
  )
}

export default Portfolio;