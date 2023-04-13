import React from "react";
import img6 from "../images/f.jpg";
import { Link } from "react-router-dom";

function AlbumSix(){
    return <div className="projectContainer">
            <div class="container">
                <div class="sixthImage item">
                    <img src={img6} alt="" />
                </div>
                <div class="sixthImage item">
                    <img src={img6} alt="" />
                </div>
                <div class="sixthImage item">
                    <img src={img6} alt="" />
                </div>
                <div class="sixthImage item">
                    <img src={img6} alt="" />
                </div>
                <div class="sixthImage item">
                    <img src={img6} alt="" />
                </div>
                <div class="sixthImage item">
                    <img src={img6} alt="" />
                </div>
                <section id="album" className="item">
                    <div className="albumDetails">
                        <div className="albumRight">
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                        </div>
                        <div className="albumLeft" style={{flex: "0 0 35%"}}>
                            <Link to="/" style={{color:"black"}}>back to projects</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
}

export default AlbumSix;