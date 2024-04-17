import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './logo2-removebg.png'
import logo3 from './logo3.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='navbar'>
            <nav className='navbar-container'>
                <a href='/' className='navbar-logo'>
                    <img src={logo} alt='logo' width="40" height="40" className="d-inline-block align-top"/>
                </a>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-links'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-links'>
                        <a href='#reg-form' onClick={closeMenu}>Register</a>
                    </li>
                    <li className='nav-links'>
                        <a href='#about-us' onClick={closeMenu}>About Us</a>
                    </li>
                    <li className='nav-links'>
                        <a href='#events' onClick={closeMenu}>Events</a>
                    </li>
                </ul>
                <a href='/' className='end-logo'>
                    <img src={logo3} alt='logo' width="40" height="40" className="d-inline-block align-top"/>
                </a>
            </nav>
        </div>
    )
}

export default Navbar