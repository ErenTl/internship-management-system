import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import Navbar from "./components/navbar";
import Login from "./components/loginpage/login"
import Home from "./components/home";

import Imebasvuru from "./components/pages/imebasvuru";
import Imedefteri from "./components/pages/imedefteri";
import Imedegerlendirme from "./components/pages/imedegerlendirme";
import Imetakip from "./components/pages/imetakip";
import Stajbasvuru from "./components/pages/stajbasvuru";
import Stajdefteri from "./components/pages/stajdefteri";
import Stajdegerlendirme from "./components/pages/stajdegerlendirme";
import Stajtakip from "./components/pages/stajtakip";

import { useUserContext } from "./components/hooks/useUserContext";


const Routess = () => {

    const {user} = useUserContext()

    return (
        <Routes>
            
            
            <Route exact path= "/home" element={user ? <Navbar><Home/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imebasvuru" element={<Navbar><Imebasvuru/></Navbar>}/>
            <Route exact path= "/imedefteri" element={user ? <Navbar><Imedefteri/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imedegerlendirme" element={user ? <Navbar><Imedegerlendirme/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imetakip" element={user ? <Navbar><Imetakip/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajbasvuru" element={user ? <Navbar><Stajbasvuru/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajdefteri" element={user ? <Navbar><Stajdefteri/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajdegerlendirme" element={user ? <Navbar><Stajdegerlendirme/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajtakip" element={user ? <Navbar><Stajtakip/></Navbar> : <Navigate to="/login"/>}/>


            
            <Route exact path= "/login" element={!user ? <Login/> : <Navigate to="/home"/>}/>
        </Routes>

    );

};

export default Routess;