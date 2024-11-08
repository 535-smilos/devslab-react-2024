import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const authContext = createContext({});

const {Provider} = authContext;

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user, localStorage.getItem("token"));
    
    const handleLogin = ({email, token} ) => {
        console.log(token);
        localStorage.setItem("token", token);
        setUser({email});
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        window.location.href = "/login";
    }

    return <Provider value={{user, handleLogin, handleLogout}}>{children}</Provider>

}

export const useAuthContext = () => useContext(authContext);
