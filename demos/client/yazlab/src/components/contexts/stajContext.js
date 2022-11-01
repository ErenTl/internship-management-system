import { createContext, useReducer } from 'react'

export const StajContext = createContext()

export const stajReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STAJ': 
      return {
        internship: action.payload
      }
    case 'CREATE_STAJ':
      return {
        internship: [action.payload, ...state.staj]
      }
    case 'DELETE_STAJ':
      return {
        internship: state.internship.filter((s) => s.id !== action.payload.id)
      } 
   }
   
}

export const StajContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stajReducer, {
    internship: null
  })

  return (
    <StajContext.Provider value={{...state, dispatch}}>
      { children }
    </StajContext.Provider>
  )
}