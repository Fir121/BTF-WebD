import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './logo2-removebg.png'
import logo3 from './BPDC Logo png.png'
import './Navbar.css'
 

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [,setButton]=useState(true);
    const [navbar, setNavbar]=useState(false);

    const closeMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth<=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);
    
    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        if(window.scrollY >= 200) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
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
                </ul>
                <a href='/' className='end-logo'>
                    <img src={logo3} alt='logo' width="40" height="40" className="d-inline-block align-top"/>
                </a>
                   
            </nav>
        </div>
    )
}




export default Navbar