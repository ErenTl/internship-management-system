// import { useUserContext } from "./useUserContext";
import { useState } from "react";

export const useAddUser = () => {
    const [error, sestError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    // const {dispatch} = useUserContext()

    const adduser = async(email, password, username, userId, phone, tc, role) => {
        setIsLoading(true);
        sestError(null);

        const response = await fetch("api/User", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password, username, userId, phone, tc, role})
        });

        const json = await response.json();

        if(!response.ok) {
            setIsLoading(false);
            sestError(json.error);
        }
        if (response.ok) {
            // localStorage.setItem("user", JSON.stringify(json))

            // dispatch({type:"LOGIN" , payload: json})

            setIsLoading(false);
            // window.location.href = '/private'
        }

    }   

    return {adduser, isLoading, error}
}