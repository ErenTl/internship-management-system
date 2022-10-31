import { useUserContext } from "./useUserContext";
import { useState } from "react";


export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useUserContext()

    const login = async(user_name, psw) => {
        console.log("loginStarted");
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://localhost:7148/api/Users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({userName:user_name,
                                 password:psw})
        });

        const json = await response.json();
        console.log(json);

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            localStorage.clear()
            localStorage.setItem("user", JSON.stringify(json))

            dispatch({type:"LOGIN" , payload: json})

            setIsLoading(false);
  
        }

    }   

    return {login, isLoading, error}
}
