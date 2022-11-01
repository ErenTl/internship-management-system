// import { useState } from "react"
// import { useStajContext } from "../hooks/useStajContext"
// import { useUserContext } from '../hooks/useUserContext'

//     const { dispatch } = useStajContext()
//     const { user } = useUserContext()
  
//     const [text, setText] = useState('')
//     const [error, setError] = useState(null)
//     const [emptyFields, setEmptyFields] = useState([])
  
//     const handleSubmit = async (e) => {
//       e.preventDefault()
  
//       if (!user) {
//         setError('You must be logged in')
//         return
//       }
  
//       const internship = {text}
  
//       const response = await fetch('/api/Internship', {
//         method: 'POST',
//         body: JSON.stringify({
//             id:id,
//             addressId:addressId,
//             startingDate:startingDate,
//             endingDate:endingDate,
//             workDay:workDay,
//             internshipType:internshipType,
//             sgk:sgk,
//             _25age:_25age,
//             gss:gss,
//             stateContribution:stateContribution,
//             autumnPeriod,
//             manager:manager,
//             address:address
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${user.token}`
//         }
//       })
//       const json = await response.json()
  
//       if (!response.ok) {
//         setError(json.error)
//         setEmptyFields(json.emptyFields)
//       }
//       if (response.ok) {
//         setText('')
  
//         setError(null)
//         setEmptyFields([])
//         dispatch({type: 'CREATE_STAJ', payload: json})
//       }
//     }