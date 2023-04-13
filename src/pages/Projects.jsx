import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

import img1 from "../images/a.jpg";
import img2 from "../images/b.jpg";
import img3 from "../images/c.jpg";
import img4 from "../images/d.jpg";
import img5 from "../images/e.jpg";
import img6 from "../images/f.jpg";

function Projects(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_4ohkhod", "template_jexcibq", form.current, "X_mcRGbHLIkIuzWaj")
        .then((result) => {
            console.log(result.text);
            console.log("Send Successfully");
        }, (error) => {
            console.log(error.text);
            console.log("Try again");
        });
    };

    return <div className="projectContainer" id="projectsStart">
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
            <div id="gInTouch">
                <form ref={form} onSubmit={sendEmail} action="">
                    <div className="gitHeading">
                        <h1>get in touch</h1>
                    </div>
                    <div className="topLine">
                        <div className="name">
                            <input type="text" placeholder="name" name="name" required/>
                        </div>
                        <div className="email">
                            <input type="email" placeholder="email" name="email" required/>
                        </div>
                    </div>
                    <div className="serviceLine">
                        <div className="serviceHeading">
                            <label className="label labelFont --futura">service</label>
                        </div>
                        <div className="budgetButtons">
                            <label className="marginRight marginBottom">
                                <input type="radio" id="photography" value="photography" name="radio" />
                                <span className="--avenir">photography</span>
                            </label>
                            <label className="marginRight marginBottom">
                                <input type="radio" id="videography" value="videography" name="radio" />
                                <span className="--avenir">videography</span>
                            </label>
                            <label className="marginRight">
                                <input type="radio" id="other" value="other" name="radio" />
                                <span className="--avenir">other</span>
                            </label>
                        </div>
                    </div>
                    <div className="descriptionLine">
                        <input type="text" placeholder="description" name="description" required/>
                    </div>
                    <div className="budgetLine">
                        <div className="budgetHeading">
                            <label className="label labelFont --futura">budget</label>
                        </div>
                        <div className="budgetButtons">
                            <label className="marginRight marginBottom">
                                <input type="radio" id="photography"   value="$1,000" name="radios" />
                                <span className="--avenir">up to $1,000</span>
                            </label>
                            <label className="marginRight marginBottom">
                                <input type="radio" id="videography"  value="$1,000 - $3,000" name="radios" />
                                <span className="--avenir">$1,000 - $3,000</span>
                            </label>
                            <label className="marginRight">
                                <input type="radio" id="other" value="$3,000" name="radios" />
                                <span className="--avenir">+ $3,000</span>
                            </label>
                        </div>
                    </div>
                    <div className="currency">
                        <small className="--avenir">$ = US Dollar</small>
                    </div>
                    <button type="submit" value="Send" className="sendbtn --futura">Send</button>
                </form>
            </div>
        </div>
    </div>
}

export default Projects;