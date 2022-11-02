import { UserContext } from "../contexts/userContext";
import { useContext } from "react";

export const useUserContext = () => {
    const context = useContext(UserContext)
    // const context = JSON.stringify(localStorage.getItem('user'));
    if(!context) {
        throw Error("useusercontext must be used inside an usercontextprovider")
    }
    
    return context;
}