import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import PortfolioItem from '../modules/PortfolioItem.jsx';
import { GuessNumberGame, PortfolioImg2 } from '../utils/media-files.js';


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
              imgUrl={GuessNumberGame}
              title='Guess number'
              desc={
                <>
                  <p> The player must guess the secret number between 1 and 20!</p>
                  <p> See <a href='https://github.com/soltonanna/guess-my-number' target='_blank'>CODE</a></p>
                  <p> See <a href='https://soltonanna.github.io/guess-my-number/' target='_blank'>DEMO</a></p>
                </>
              }
            />
            <PortfolioItem 
              imgUrl={PortfolioImg2}
              title='Port 2'
              desc='Aute sunt ex ea nisi consequat labore. Ea commodo voluptate do ex cillum cillum proident ullamco deserunt laboris et. Sunt elit qui nisi laborum dolore deserunt nostrud voluptate laboris do pariatur veniam. Adipisicing sint laborum laboris qui aliquip proident est nostrud. Ut cupidatat aute laborum occaecat ex sint ullamco laborum do laborum. Do minim eiusmod et consequat ad.'
            />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
              <PortfolioItem 
                imgUrl={GuessNumberGame}
                title='Guess number'
                desc={
                  <>
                    <p> The player must guess the secret number between 1 and 20!</p>
                    <p> See <a href='https://github.com/soltonanna/guess-my-number' target='_blank'>CODE</a></p>
                    <p> See <a href='https://soltonanna.github.io/guess-my-number/' target='_blank'>DEMO</a></p>
                  </>
                }
              />
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