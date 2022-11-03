// import { useLogout } from "../hooks/useLogout";
// import { useUserContext } from "../hooks/useUserContext";
// import Footer from "./navbarcomps/footer"

const Home = () => {
    // const {user} = useUserContext()

    // const {logout} = useLogout();

    // const handleClick = () => {
    //     logout()
    // }

    return(
    <div className="home-screen">
        {/* <h2>{user.user.firstName +" "+ user.user.lastName}</h2> */}
        {/* <h2>{user.role}</h2> */}
        <h3>Home</h3>
        
        {/* <button onClick={handleClick} >Çıkış</button> */}
    </div>
    );
    };    

    export default Home;