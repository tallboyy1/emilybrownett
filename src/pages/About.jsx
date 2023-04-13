import React from "react";
import { Link } from "react-router-dom";

import img1 from "../images/a.jpg";
import img2 from "../images/b.jpg";
import img3 from "../images/c.jpg";
import img4 from "../images/d.jpg";
import img5 from "../images/e.jpg";
import img6 from "../images/f.jpg";

function About(){
    return <div className="aboutContainer">
    {/* <h1>Projects page</h1> */}
    <div class="container">
            <Link to="/albumone" class="firstImage item">
                <img src={img1} alt="" />
            </Link>
            <Link to="/albumtwo" class="secondImage item">
                <img src={img2} alt="" />
            </Link>
            <Link to="/albumthree" class="thirdImage item">
                <img src={img3} alt="" />
            </Link>
            <Link to="/albumfour" class="fourthImage item">
                <img src={img4} alt="" />
            </Link>
            <Link to="/albumfive" class="fifthImage item">
                <img src={img5} alt="" />
            </Link>
            <Link to="/albumsix" class="sixthImage item">
                <img src={img6} alt="" />
            </Link>
        <section id="aboutSection">
            <div className="aboutHeading">
                <h1>about</h1>
            </div>
            <div className="aboutDetails">
                <div className="aboutLeft">
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bbns.big">instagram</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bbns.big">vsco</a></li>
                    </ul>
                </div>
                <div className="aboutRight">
                        <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                        <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                        <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                        <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                </div>
            </div>
        </section>
    </div>
</div>
}

export default About;