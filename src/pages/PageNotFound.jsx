import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(){
    return <>
        <div className="">
            Page Not Found
            Reuturn to <Link to="/">Projects</Link>
        </div>
    </>
}

export default PageNotFound;