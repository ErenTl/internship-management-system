import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import Login from "./components/loginpage/login"
import Home from "./components/home";

import Navbar from "./components/navbar";
import Navbart from "./components/navbart";
import Navbarc from "./components/navbarc";

import Imebasvuru from "./components/pages/imebasvuru";
import Imedefteri from "./components/pages/imedefteri";
import Imedegerlendirme from "./components/pages/imedegerlendirme";
import Imetakip from "./components/pages/imetakip";
import Stajbasvuru from "./components/pages/stajbasvuru";
import Stajdefteri from "./components/pages/stajdefteri";
import Stajdegerlendirme from "./components/pages/stajdegerlendirme";
import Stajtakip from "./components/pages/stajtakip";
import Belgeler from "./components/pages/belgeler";

import Ogrstajtakip from "./components/pages/ogrstajtakip";
import Ogrstajdegerlendirme from "./components/pages/ogrstajdegerlendirme";
import Ogrimetakip from "./components/pages/ogrimetakip";
import Ogrimedegerlendirme from "./components/pages/ogrimedegerlendirme";

import Komstajtakip from "./components/pages/komstajtakip";
import Komstajsinav from "./components/pages/komstajsinav";
import Komstajkabul from "./components/pages/komstajkabul";
import Komstajdegerlendirme from "./components/pages/komstajdegerlendirme";
import Komimetakip from "./components/pages/komimetakip";
import Komimesinav from "./components/pages/komimesinav";
import Komimekabul from "./components/pages/komimekabul";
import Komimedegerlendirme from "./components/pages/komimedegerlendirme";
 
import { useUserContext } from "./components/hooks/useUserContext";


const Routess = () => {

    const {user} = useUserContext()
    var userInfo = JSON.stringify(localStorage.getItem('user'));
    var {role} = JSON.parse(localStorage.getItem('user'));

    console.log(role); 
    return (
        <Routes>
            
            {/* role="student" */}
            <Route exact path= "/home" element={userInfo!=null ? <Navbar><Home/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imebasvuru" element={role="student" ? <Navbar><Imebasvuru/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imedefteri" element={role="student" ? <Navbar><Imedefteri/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imedegerlendirme" element={role="student" ? <Navbar><Imedegerlendirme/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/imetakip" element={role="student" ? <Navbar><Imetakip/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajbasvuru" element={role="student" ? <Navbar><Stajbasvuru/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajdefteri" element={role="student" ? <Navbar><Stajdefteri/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajdegerlendirme" element={role="student" ? <Navbar><Stajdegerlendirme/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/stajtakip" element={role="student" ? <Navbar><Stajtakip/></Navbar> : <Navigate to="/login"/>}/>
            <Route exact path= "/belgeler" element={role="student" ? <Navbar><Belgeler/></Navbar> : <Navigate to="/login"/>}/>

            {/* role="teacher"  */}
            <Route exact path= "/ogrstajtakip" element={userInfo!=null ? <Navbart><Ogrstajtakip/></Navbart> : <Navigate to="/login"/>}/>
            <Route exact path= "/ogrstajdegerlendirme" element={userInfo!=null ? <Navbart><Ogrstajdegerlendirme/></Navbart> : <Navigate to="/login"/>}/>
            <Route exact path= "/ogrimetakip" element={userInfo!=null ? <Navbart><Ogrimetakip/></Navbart> : <Navigate to="/login"/>}/>
            <Route exact path= "/ogrimedegerlendirme" element={userInfo!=null ? <Navbart><Ogrimedegerlendirme/></Navbart> : <Navigate to="/login"/>}/>
            
            {/* role="commision" */}
            <Route exact path= "/komstajtakip" element={userInfo!=null ? <Navbarc><Komstajtakip/></Navbarc> : <Navigate to="/login"/>}/>
            <Route exact path= "/komstajsinav" element={userInfo!=null ? <Navbarc><Komstajsinav/></Navbarc> : <Navigate to="/login"/>}/>
            <Route exact path= "/komstajkabul" element={userInfo!=null ? <Navbarc><Komstajkabul/></Navbarc> : <Navigate to="/login"/>}/>
            <Route exact path= "/komstajdegerlendirme" element={userInfo!=null ? <Navbarc><Komstajdegerlendirme/></Navbarc> : <Navigate to="/login"/>}/>
            <Route exact path= "/komimetakip" element={userInfo!=null ? <Navbarc><Komimetakip/></Navbarc> : <Navigate to="/login"/>}/>
            <Route exact path= "/komimesinav" element={userInfo!=null ? <Navbarc><Komimesinav/></Navbarc> : <Navigate to="/login"/>}/>
            <Route exact path= "/komimekabul" element={userInfo!=null ? <Navbarc><Komimekabul/></Navbarc> : <Navigate to="/login"/>}/>
            <Route exact path= "/komimedegerlendirme" element={userInfo!=null ? <Navbarc><Komimedegerlendirme/></Navbarc> : <Navigate to="/login"/>}/>


            {/* login page */}
            <Route exact path= "/login" element={!user ? <Login/> : <Navigate to="/home"/>}/>
        </Routes>

    );

};

export default Routess;