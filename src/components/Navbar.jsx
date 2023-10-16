import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    // const [click, setClick] = useState(false);
    
    // const handleClick = () => setClick(!click);
    // const closeMenu = () => setClick(false);

    //onClick={closeMenu}

    return (
        <Router>
        <nav className='navbar'>
            {/* <div className='hamburger' onClick={handleClick}>
                {
                    click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                    : (<FaBars size={30} style={{ color: '#ffffff' }} />)
                }
            </div> */}

            <ul className="nav-menu">
                <li className='nav-item'>
                    <HashLink 
                        to="/#main-info"
                        smooth={true}
                        duration={800} > 
                            Main Info 
                    </HashLink>
                </li>
                <li className='nav-item'>
                    <HashLink 
                        to="/#about"
                        smooth={true} 
                        duration={800} >
                            About
                    </HashLink>
                </li>
                {/* <li className='nav-item'>
                    <HashLink 
                        to="/#skills"
                        smooth={true}
                        duration={800} > 
                            Skills 
                    </HashLink>
                </li> */}
                <li className='nav-item'>
                    <HashLink 
                        to="/#experience"
                        smooth={true}
                        duration={800} > 
                        Experience 
                    </HashLink>
                </li>
                <li className='nav-item'>
                    <HashLink 
                        to="/#portfolio"
                        smooth={true}
                        duration={800} > 
                        Portfolio
                    </HashLink>
                </li>
                
                <li className='nav-item'>
                    <HashLink 
                        to="/#blog"
                        smooth={true} 
                        duration={800} > 
                            Blog
                    </HashLink>
                </li>
                
                <li className='nav-item'>
                    <HashLink 
                        to="/#contact"
                        smooth={true}
                        duration={800} > 
                            Contact
                    </HashLink>
                </li>
            </ul>
        </nav>
        </Router>
    )
}
export default Navbar;