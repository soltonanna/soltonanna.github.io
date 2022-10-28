import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <nav className='navbar'>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                    : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to="/" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
                </li>
                <li className='nav-item'>
                    <Link to="what-i-do" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>What I do</Link>
                </li>
                <li className='nav-item'>
                    <Link to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Skills</Link>
                </li>
                <li className='nav-item'>
                    <Link to="experience" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Experience</Link>
                </li>
                <li className='nav-item'>
                    <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Portfolio</Link>
                </li>
                <li className='nav-item'>
                    <Link to="reviews" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Reviews</Link>
                </li>
                <li className='nav-item'>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar