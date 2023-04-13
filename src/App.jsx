import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import AlbumOne from "./pages/AlbumOne";
import AlbumTwo from "./pages/AlbumTwo";
import AlbumThree from "./pages/AlbumThree";
import AlbumFour from "./pages/AlbumFour";
import AlbumFive from "./pages/AlbumFive";
import AlbumSix from "./pages/AlbumSix";
import PageNotFound from "./pages/PageNotFound";

// import Projects from "./pages/Projects";



function App(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<SharedLayout /> }>
                <Route index element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/albumone" element={<AlbumOne/>}/>
                <Route path="/albumtwo" element={<AlbumTwo/>}/>
                <Route path="/albumthree" element={<AlbumThree/>}/>
                <Route path="/albumfour" element={<AlbumFour/>}/>
                <Route path="/albumfive" element={<AlbumFive/>}/>
                <Route path="/albumsix" element={<AlbumSix/>}/>
            </Route>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
}

export default App;