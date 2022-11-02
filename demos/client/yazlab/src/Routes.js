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
    var userInfo = JSON.stringify(localStorage.getItem('user'));
    return (
        <Routes>
            
            
            <Route exact path= "/home" element={userInfo!=null ? <Navbar><Home/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imebasvuru" element={userInfo!=null ? <Navbar><Imebasvuru/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imedefteri" element={userInfo!=null ? <Navbar><Imedefteri/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imedegerlendirme" element={userInfo!=null ? <Navbar><Imedegerlendirme/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imetakip" element={userInfo!=null ? <Navbar><Imetakip/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajbasvuru" element={userInfo!=null ? <Navbar><Stajbasvuru/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajdefteri" element={userInfo!=null ? <Navbar><Stajdefteri/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajdegerlendirme" element={userInfo!=null ? <Navbar><Stajdegerlendirme/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajtakip" element={userInfo!=null ? <Navbar><Stajtakip/></Navbar> : <Navigate to="/login"/>}/>


            
            <Route exact path= "/login" element={!user ? <Login/> : <Navigate to="/home"/>}/>
        </Routes>

    );

};

export default Routess;