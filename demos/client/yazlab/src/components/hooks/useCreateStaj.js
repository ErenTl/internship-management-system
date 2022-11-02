import { useState } from "react"
import { useStajContext } from "../hooks/useStajContext"
import { useUserContext } from '../hooks/useUserContext'
import { React } from "react"
import {variables} from '../../Variables.js';




  
export function postInternshipAcceptanceForm(internContent)  {
  var x;
  fetch(variables.API_URL+'internships/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
    },
    body: internContent
    
  }).then(res => res.json())
  .then(response => {return (response.id);}, error => console.error('Error:', error));
  console.log("intern Id: " + x);
  return x;
}