import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from 'react-icons/fa';
import logo3 from './BPDC Logo png.png';
import logo from './logo2-removebg.png';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <nav className='navbar-container'>
                <Link to="home" smooth={true} className='navbar-logo'>
                    <img src={logo} alt='logo' width="40" height="40" className="d-inline-block align-top"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-links'>
                        <Link to="home" smooth={true} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to="reg-form" smooth={true} onClick={closeMenu}>Register</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to="about-us" smooth={true} onClick={closeMenu}>About Us</Link>
                    </li>
                </ul>
                <Link to="home" smooth={true} className='end-logo'>
                    <img src={logo3} alt='logo' width="40" height="40" className="d-inline-block align-top"/>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;