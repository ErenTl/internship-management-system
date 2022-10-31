import React from "react";
import {Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar";
// import Login from "./components/loginpage/login"

import Home from "./components/home";
import Imebasvuru from "./components/pages/imebasvuru";
import Imedefteri from "./components/pages/imedefteri";
import Imedegerlendirme from "./components/pages/imedegerlendirme";
import Imetakip from "./components/pages/imetakip";
import Stajbasvuru from "./components/pages/stajbasvuru";
import Stajdefteri from "./components/pages/stajdefteri";
import Stajdegerlendirme from "./components/pages/stajdegerlendirme";
import Stajtakip from "./components/pages/stajtakip";


const Routess = () => {
    return (
        <Routes>
            {/* <Route exact path= "/login" element={<Login/>}/> */}
            <Route exact path= "/home" element={<Navbar><Home/></Navbar>}/>
            
            <Route exact path= "/imebasvuru" element={<Navbar><Imebasvuru/></Navbar>}/>
            <Route exact path= "/imedefteri" element={<Navbar><Imedefteri/></Navbar>}/>
            <Route exact path= "/imedegerlendirme" element={<Navbar><Imedegerlendirme/></Navbar>}/>
            <Route exact path= "/imetakip" element={<Navbar><Imetakip/></Navbar>}/>
            <Route exact path= "/stajbasvuru" element={<Navbar><Stajbasvuru/></Navbar>}/>
            <Route exact path= "/stajdefteri" element={<Navbar><Stajdefteri/></Navbar>}/>
            <Route exact path= "/stajdegerlendirme" element={<Navbar><Stajdegerlendirme/></Navbar>}/>
            <Route exact path= "/stajtakip" element={<Navbar><Stajtakip/></Navbar>}/>
        </Routes>

    );

};

export default Routess;