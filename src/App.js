import React from 'react';
import Header from './components/Header.jsx';

import MainInfo from './components/MainInfo.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Reviews from './components/Reviews.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className='page'>
      <Header />
      <main>
        <MainInfo />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Reviews />
        <Blog />
        <Contact />
      </main>
      <Footer id="footer" />
    </div>
  )
}

export default App;