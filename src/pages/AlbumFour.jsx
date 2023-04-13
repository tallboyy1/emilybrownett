import React from "react";
import img4 from "../images/d.jpg";
import { Link } from "react-router-dom";

function AlbumFour(){
    return <div className="projectContainer">
            <div class="container">
                <div class="fourthImage item">
                    <img src={img4} alt="" />
                </div>
                <div class="fourthImage item">
                    <img src={img4} alt="" />
                </div>
                <div class="fourthImage item">
                    <img src={img4} alt="" />
                </div>
                <div class="fourthImage item">
                    <img src={img4} alt="" />
                </div>
                <div class="fourthImage item">
                    <img src={img4} alt="" />
                </div>
                <div class="fourthImage item">
                    <img src={img4} alt="" />
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
                            <Link to="/albumfive" style={{color:"black"}}>next album</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
}

export default AlbumFour;