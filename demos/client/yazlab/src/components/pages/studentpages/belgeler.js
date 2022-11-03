import { useState } from "react";
// import { useCreateStaj } from "../hooks/useCreateStaj";
import {variables} from '../../../Variables.js';
import { useEffect } from 'react';
// import {postInternshipAcceptanceForm} from '../hooks/useCreateStaj.js';
// import { json, useResolvedPath } from "react-router-dom";

function Belgeler() {

    const {user, role, id, accessToken, previousLogin} = JSON.parse(localStorage.getItem('user'));
    const [internship, setInternship] = useState([]);
    const [internshipInfo, setInternshipInfo] = useState([]);
    //const [count, setCount] = useState(0);
    var count = 0;
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

    useEffect(() => {
        for(var i=0;i<internship.length;i++) {
            fetch(variables.API_URL+"internships/" + internship[i].id, {
                headers: {
                    'Accept': 'application/json'
                    }
            })
            .then(response => response.json())
            .then (data => {

                    console.log(internship.length);
                    setInternshipInfo(internshipInfo => [...internshipInfo, data])
                
            });

        }
    },[internship]);

        function zattirizortzort() {
            console.log(internship[0].internId);
        }

    
    
    return (
        <>
        {internshipInfo.map(intern => 
            
            ++count%2==0?
            <div className="card" style={{width: "18rem"}}>
            <image className="card-img-top"  alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{intern.internshipType==1?"Staj 1":"Staj 2"}</h5>
                <p className="card-text">{intern.company.formalName}</p>
                <a href="#" className="btn btn-primary" onClick={() => zattirizortzort()}>İndir</a>
            </div>
            {console.log("c: "+count)}
        </div>
        
        : null
            )}
            
         </>
    )
}

export default Belgeler;