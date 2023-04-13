import React from "react";
import img1 from "../images/b.jpg";
import { Link } from "react-router-dom";

function AlbumTwo(){
    return <div className="projectContainer">
            <div class="container">
                <div class="secondImage item">
                    <img src={img1} alt="" />
                </div>
                <div class="secondImage item">
                    <img src={img1} alt="" />
                </div>
                <div class="secondImage item">
                    <img src={img1} alt="" />
                </div>
                <div class="secondImage item">
                    <img src={img1} alt="" />
                </div>
                <div class="secondImage item">
                    <img src={img1} alt="" />
                </div>
                <div class="secondImage item">
                    <img src={img1} alt="" />
                </div>
                <section id="album" className="item">
                    <div className="albumDetails">
                        <div className="albumRight">
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                        </div>
                        <div className="albumLeft">
                            <Link to="/albumthree" style={{color:"black"}}>next album</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
}

export default AlbumTwo;