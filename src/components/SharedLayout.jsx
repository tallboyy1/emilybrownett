import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

function SharedLayout(){
    return <div className="fullContainer">
        <Navbar />
            <Outlet />
        <Footer />
    </div>
}

export default SharedLayout;