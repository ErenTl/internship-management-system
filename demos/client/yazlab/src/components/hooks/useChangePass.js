import { useUserContext } from "./useUserContext";
import { useState } from "react";


export const Changepass = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useUserContext();


    const change = async( userId, oldPassword, newPassword)  => {
        console.log("changing pass started");
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://localhost:7148/api/Users/changepassword", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ userId: userId, oldPassword: oldPassword, newPassword: newPassword})
        });

        const json = await response.json();
        console.log(json);

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            //localStorage.clear()
            //localStorage.setItem("user", JSON.stringify(json))

            dispatch({type:"UPDATE_PASS" , payload: json})

            setIsLoading(false);
  
        }

    }   

    return {change, isLoading, error}
}