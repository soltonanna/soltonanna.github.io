import React from 'react';
import Header from './components/Header.jsx';

import MainInfo from './components/MainInfo.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';

import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main id="main">
        <MainInfo />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer id="footer" />
    </>
    
  )
}

export default App;