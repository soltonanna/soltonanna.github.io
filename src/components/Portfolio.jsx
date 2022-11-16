import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import PortfolioItem from '../modules/PortfolioItem.jsx';
import { GuessNumberGame, PigGame, MinesGame } from '../utils/media-files.js';


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
              imgUrl={PigGame}
              title='Pig Game'
              desc={
                <>
                  <p> The 2 players must roll dice! The first player who rich the 50 point in game will Win</p>
                  <p> See <a href='https://github.com/soltonanna/pig_game' target='_blank'>CODE</a></p>
                  <p> See <a href='https://soltonanna.github.io/pig_game/' target='_blank'>DEMO</a></p>
                </>
              }
            />
            <PortfolioItem 
              imgUrl={MinesGame}
              title=' Mines'
              desc={
                <>
                  <p> The aim of Mines is to clear the minefield without detonating any of the mines.</p>
                  <p> See <a href='https://github.com/soltonanna/mines_game' target='_blank'>CODE</a></p>
                  <p> See <a href='https://soltonanna.github.io/mines_game/' target='_blank'>DEMO</a></p>
                </>
              }
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
              <PortfolioItem 
                imgUrl={PigGame}
                title='Pig Game'
                desc={
                  <>
                    <p> The 2 players must roll dice! The first player who rich the 50 point in game will Win</p>
                    <p> See <a href='https://github.com/soltonanna/pig_game' target='_blank'>CODE</a></p>
                    <p> See <a href='https://soltonanna.github.io/pig_game/' target='_blank'>DEMO</a></p>
                  </>
                }
              />
              <PortfolioItem 
                imgUrl={MinesGame}
                title=' Mines'
                desc={
                  <>
                    <p> The aim of Mines is to clear the minefield without detonating any of the mines.</p>
                    <p> See <a href='https://github.com/soltonanna/mines_game' target='_blank'>CODE</a></p>
                    <p> See <a href='https://soltonanna.github.io/mines_game/' target='_blank'>DEMO</a></p>
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