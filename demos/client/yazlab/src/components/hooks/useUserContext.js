import { UserContext } from "../contexts/userContext";
import { useContext } from "react";

export const useUserContext = () => {
    const context = useContext(UserContext)

    if(!context) {
        throw Error("useusercontext must be used inside an usercontextprovider")
    }
    
    return context;
}