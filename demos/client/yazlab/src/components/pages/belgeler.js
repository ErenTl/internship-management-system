import { useState } from "react";
import { useCreateStaj } from "../hooks/useCreateStaj";
import {variables} from '../../Variables.js';
import { useEffect } from 'react';
import {postInternshipAcceptanceForm} from '../hooks/useCreateStaj.js';
import { json } from "react-router-dom";

function Belgeler() {

    const {user, role, id, accessToken, previousLogin} = JSON.parse(localStorage.getItem('user'));
    const [internship, setInternship] = useState([]);
    
    useEffect(
        // Effect from first render
        () => {
            fetch(variables.API_URL + "StudentInternships/getbyuserid/"+user.id, {
             headers: {
                 'Accept': 'application/json'
                 }
             })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setInternship(data);
            });

        },
        [] // Never re-runs
    );

    
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
            <image className="card-img-top"  alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Staj 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">İndir</a>
            </div>
        </div>      
         </>
    )
}

export default Belgeler;