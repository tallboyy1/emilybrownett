import React from "react";
import img3 from "../images/c.jpg";
import { Link } from "react-router-dom";

function AlbumThree(){
    return <div className="projectContainer">
            <div class="container">
                <div class="thirdImage item">
                    <img src={img3} alt="" />
                </div>
                <div class="thirdImage item">
                    <img src={img3} alt="" />
                </div>
                <div class="thirdImage item">
                    <img src={img3} alt="" />
                </div>
                <div class="thirdImage item">
                    <img src={img3} alt="" />
                </div>
                <div class="thirdImage item">
                    <img src={img3} alt="" />
                </div>
                <div class="thirdImage item">
                    <img src={img3} alt="" />
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
                            <Link to="/albumfour" style={{color:"black"}}>next album</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
}

export default AlbumThree;