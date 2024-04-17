import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Technofest from './Pages/Technofest';
import Enginuity from './Pages/Enginuity';
import AboutUs from './Pages/AboutUs';
import logo from './logo2-removebg.png';
import logo3 from './logo3-removebg-preview.png';



function Navbar() {
    const [click, setClick] = useState(false);    
    const [button,setButton]=useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
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
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <div className=''>
               <Link to="/" className="navbar-logo">
                 
                  <img src={logo} alt='BTF logo' width="40" height="40" className="d-inline-block align-top"/> 
                 
               </Link>
              </div>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                 </Link>
                </li>
                <li className='nav-item'>
                 <CustomLink to='/technofest' className='nav-links' onClick={handleClick}>
                  Technofest for Schools
                 </CustomLink>
                </li>
                <li className='nav-item'>
                 <CustomLink to='/enginuity' className='nav-links' onClick={handleClick}>
                  Enginuity (for Universities)
                 </CustomLink>
                </li>
                 <li className='nav-item'>
                  <Link to='/about-us' className='nav-links' onClick={handleClick}>
                   About Us
                  </Link>
                </li>
             </ul>
            </div>
            <div className='BITS-logo'>
               <Link to="/" className="end-logo">
                 
                  <img src={logo3} alt='BTF logo' width="40" height="40" className="d-inline-block align-top"/> 
                 
               </Link>
              </div>
          </nav>
        </>
    )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}



export default Navbar