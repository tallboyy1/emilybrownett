import React from "react";
import img1 from "../images/a.jpg";
import { Link } from "react-router-dom";

// import firstSet from "../firstSet";

// function set(firstSet){
//     return <img 
//     id={firstSet.id}
//     src={firstSet.image}
//     />
// }

function AlbumOne(){
    return <div className="projectContainer">
            <div class="container">
            {/* {firstSet.map(set)} */}
                <div to="" class="firstImage item">
                    <img src={img1} alt="" />
                </div>
                <div to="" class="firstImage item">
                    <img src={img1} alt="" />
                </div>
                <div to="" class="firstImage item">
                    <img src={img1} alt="" />
                </div>
                <div to="" class="firstImage item">
                    <img src={img1} alt="" />
                </div>
                <div to="" class="firstImage item">
                    <img src={img1} alt="" />
                </div>
                <div to="" class="firstImage item">
                    <img src={img1} alt="" />
                </div>
                <section id="album">
                    <div className="albumDetails">
                        <div className="albumRight">
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                                <p>Emily Brownett is a Lorem Ipsum comes to save the day because i have no content</p>
                        </div>
                        <div className="albumLeft">
                            <Link to="/albumtwo" style={{color:"black"}}>next album</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
}

export default AlbumOne;