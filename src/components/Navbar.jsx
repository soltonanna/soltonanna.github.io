import React, { useState, useEffect } from 'react';
import { Link, scrollSpy } from 'react-scroll';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('main-info');

  useEffect(() => {
    // Initialize scrollSpy when the component mounts
    scrollSpy.update();

    // Add a scroll event listener to handle scroll-based activation
    const handleScroll = () => {
      const scrollOffset = 200; // You can adjust this value as needed
      const scrollY = window.scrollY;

      // Calculate which section is currently in view
      const sections = ['main-info', 'about', 'experience', 'portfolio', 'reviews', 'blog', 'contact'];
      let newActiveItem = activeItem;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop - scrollOffset;
          const sectionBottom = sectionTop + element.clientHeight;

          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            newActiveItem = section;
          }
        }
      });

      // Update the active item
      setActiveItem(newActiveItem);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeItem]);

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className={activeItem === 'main-info' ? 'nav-item active' : 'nav-item'}>
          <Link to="main-info" spy={true} smooth={true} duration={800}>
            Home
          </Link>
        </li>
        <li className={activeItem === 'about' ? 'nav-item active' : 'nav-item'}>
          <Link to="about" spy={true} smooth={true} duration={800}>
            About Me
          </Link>
        </li>
        <li className={activeItem === 'experience' ? 'nav-item active' : 'nav-item'}>
          <Link to="experience" spy={true} smooth={true} duration={800}>
            Resume
          </Link>
        </li>
        <li className={activeItem === 'portfolio' ? 'nav-item active' : 'nav-item'}>
          <Link to="portfolio" spy={true} smooth={true} duration={800}>
            Portfolio
          </Link>
        </li>
        <li className={activeItem === 'reviews' ? 'nav-item active' : 'nav-item'}>
          <Link to="reviews" spy={true} smooth={true} duration={800}>
            Reviews
          </Link>
        </li>
        <li className={activeItem === 'blog' ? 'nav-item active' : 'nav-item'}>
          <Link to="blog" spy={true} smooth={true} duration={800}>
            Blog
          </Link>
        </li>
        <li className={activeItem === 'contact' ? 'nav-item active' : 'nav-item'}>
          <Link to="contact" spy={true} smooth={true} duration={800}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
