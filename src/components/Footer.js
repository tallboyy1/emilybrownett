import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

function Footer(){
    return <> 
        <div className='footer'>
            <div className='footer-container'>
                <footer>
                <Link to="about#aboutSection" className="--decoration-none --margin-right-20 --font-1-2em --black" 
                >
                    about
                </Link>
                    <Link to="/" className="--decoration-none --margin-right-20 --font-1-2em --black" 
                >
                    projects
                </Link>
                    <Link to="projects#gInTouch" className="--decoration-none --font-1-2em --black" 
                >
                    contact
                </Link>
                </footer>
                <small className='navbar-right' style={{}}>
                    EB <span className="--futura">©</span> {new Date().getFullYear()}
                </small>
            </div>
        </div>
    </>
}

export default Footer;




// style={{fontSize: "1.2em", color: "black", marginRight: "20px", textDecoration: "none"}}

// style={{fontSize: "1.2em", color: "black", marginRight: "20px", textDecoration: "none"}}

// style={{fontSize: "1.2em", color: "black", textDecoration: "none"}}