import {createContext, useReducer, useEffect } from "react";

export const UserContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user:action.payload}
        case "LOGOUT":
            return { user:null}
        case "UPDATE_PASS":
            return { ...state,
            password: action.payload.newValue}    
        default:
            return state        
    }
}

export const UserContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer, {
        user:null
    })

    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem('user'))
    
        if (user) {
          dispatch({ type: 'LOGIN', payload: user }) 
        }
      }, [])

    console.log("UserContext state:", state)

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}