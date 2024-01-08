import {MdMenuBook} from "react-icons/md";
import {useAuth0} from "@auth0/auth0-react";
import "./Appname.css";

const Appname = () => {
    const {loginWithRedirect , isAuthenticated , logout} = useAuth0();
    return (
        <div className="header">
            <h1><MdMenuBook/></h1>
            <p className="heading">My Notepad</p>
            {isAuthenticated ? (
            <button onClick={() => logout({logoutParams: { returnTo: window.location.origin }})}>Log Out</button>
            ) 
             : 
            (
            <button onClick={() => loginWithRedirect()}>Log In</button>
            )
            }
       </div>

    );
};

export default Appname;