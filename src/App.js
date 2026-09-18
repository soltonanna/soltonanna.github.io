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
import LanguageSwitcher from './modules/LanguageSwitcher.jsx';

import useScrollSpy from './hooks/useScrollSpy';
import useStoredState from './hooks/useStoredState';
import { navItems } from './utils/nav-items.js';
import { useT } from './i18n/LanguageContext.jsx';

const sectionIds = navItems.map((item) => item.id);

const App = () => {
  const t = useT();
  const [isSidebarOpen, setSidebarOpen] = useStoredState('sidebar-open', true);
  const activeId = useScrollSpy(sectionIds);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className={`page ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <a className="skip-link" href="#about">{t.header.skipToContent}</a>
      <Header activeId={activeId} isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <LanguageSwitcher variant="floating" />
      <div className="page__content">
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
        <Footer />
      </div>
    </div>
  );
};

export default App;
