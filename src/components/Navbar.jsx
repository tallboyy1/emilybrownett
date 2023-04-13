import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
import logo from "../images/logo.svg";
import pLogo from "../images/phoneLogo.svg";

import { HashLink as Link } from 'react-router-hash-link';

// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const navRef = useRef();

    const hideNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const pageRedirect = (link) => {
        hideNavBar()
        navigate(link)
        // window.location.assign(link)
    }

  return (
    <div className='navbar'>
        <img src={logo} alt="Emily Brownett logo" className='navbar-logo' />
        <div className='navbar-container'>
            <nav ref={navRef}>
                <Link onClick={ ()=> pageRedirect("/about#aboutSection")} to="about#aboutSection" style={{fontSize: "1.2em", color: "black", textDecoration: "none",  backgroundColor: "transparent", outline: "none", border: "none"}}>about</Link>
                <button to="/projects" onClick={()=> pageRedirect("/projects")}  style={{fontSize: "1.2em", color: "black", textDecoration: "none",  backgroundColor: "transparent", outline: "none", border: "none"}}>projects</button>
                <Link onClick={ ()=> pageRedirect("/projects#gInTouch")} to="projects#gInTouch" style={{fontSize: "1.2em", color: "black", textDecoration: "none",  backgroundColor: "transparent", outline: "none", border: "none"}}>contact</Link>
                {/* <button to="/projects#gInTouch" onClick={hideNavBar} style={{fontSize: "1.2em", color: "black", textDecoration: "none"}}>contact</button> */}
                    <button className='nav-btn nav-close-btn' onClick={hideNavBar}>
                        <img src={pLogo} alt="Emily Brownett logo" className='mobile-logo' />
                        {/* Close  */}
                    </button>
            </nav>
            <button className='nav-btn' onClick={hideNavBar}>
                <img src={pLogo} alt="Emily Brownett logo" className='mobile-logo' />
                {/* <img src={logo} alt='' className='mobile-logo'/> */}
            </button>
        </div>
    </div>
  )
}

export default Navbar