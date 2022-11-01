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
                {
                    click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                    : (<FaBars size={30} style={{ color: '#ffffff' }} />)
                }
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to="main__main-info" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}> Home </Link>
                </li>
                <li className='nav-item'>
                    <Link to="main__about" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="main__skills" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}> Skills </Link>
                </li>
                <li className='nav-item'>
                    <Link to="main__experience" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}> Experience </Link>
                </li>
                <li className='nav-item'>
                    <Link to="main__portfolio" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}> Portfolio</Link>
                </li>
                <li className='nav-item'>
                    <Link to="main__reviews" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}> Reviews</Link>
                </li>
                <li className='nav-item'>
                    <Link to="main__contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}> Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar