import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import WhatIDo from './components/WhatIDo.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <About />
        <WhatIDo />
        <Skills />
        <Experience />
        <Portfolio />
        <Reviews />
        <Contact />
      </main>
      <Footer id="footer"></Footer>
    </>
    
  )
}

export default App;