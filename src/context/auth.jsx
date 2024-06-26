import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        userPhoto: null,
        token: "",
    });

    //default axios
    axios.defaults.headers.common["Authorization"] = auth?.token

    useEffect(()=>{
        const data = localStorage.getItem("auth");
        if(data){
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                userPhoto: parseData.userPhoto,
                token: parseData.token
            })
        }
        // eslint-disable-next-line
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook
const useAuth = ()=> useContext(AuthContext);

export {useAuth, AuthProvider};