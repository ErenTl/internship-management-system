import { useState } from "react"
import { useStajContext } from "../hooks/useStajContext"
import { useUserContext } from '../hooks/useUserContext'
import { React } from "react"



  
export function postInternshipAcceptanceForm(workDay)  {
  var json = JSON.stringify({workDay: workDay});
  console.log(json);
}