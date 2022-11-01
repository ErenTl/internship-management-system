// import { useState } from "react"
import { useStajContext } from "../hooks/useStajContext"
import { useUserContext } from '../hooks/useUserContext'

  
    // const [text, setText] = useState('')
    // const [error, setError] = useState(null)
    // const [emptyFields, setEmptyFields] = useState([])
  
export const useCreateStaj = async (e) => {
    
    const { dispatch } = useStajContext()
    const { user } = useUserContext()
      e.preventDefault()
  
      if (!user) {
        setError('You must be logged in')
        return
      }
  
      const intern = async(endingDate, startingDate, workDay,
        internshipType, sgk, _25age, gss, stateContribution,
        autumnPeriod, manager, districtId, addressInfo, formalName
        , telephone, fax, email, fieldId, studentId) =>{
  
      const response = await fetch('/api/Internship', {
        method: 'POST',
        body: JSON.stringify({
            startingDate:startingDate,
            endingDate:endingDate,
            workDay:workDay,
            internshipType:internshipType, //1-staj1 / 2-staj2 / 3-ime
            sgk:sgk,
            _25age:_25age,
            gss:gss,
            stateContribution:stateContribution,
            autumnPeriod:autumnPeriod,
            manager:manager, //1-engineer / 2-teacher / 3-doctor
            address:{
                    districtId: districtId,
                    addressInfo: addressInfo,
                    companies: [
                      {
                        formalName: formalName,
                        telephone: telephone,
                        fax: fax,
                        email: email,
                        companyFields: [
                          {
                            fieldId: fieldId
                          }
                        ]
                      }
                    ]
                  },
                  studentInternships: [
                      {
                        studentId: studentId
                      }
                  ]
            }
        ),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.accessToken}`
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
      }
      if (response.ok) {
        setText('')
  
        setError(null)
        setEmptyFields([])
        dispatch({type: 'CREATE_STAJ', payload: json})
      }}

      return {intern}
    }