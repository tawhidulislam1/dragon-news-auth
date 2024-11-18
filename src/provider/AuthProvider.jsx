import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext =createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user ,setUser] = useState({
        name:'tawhidul',
        age:28,
    })
    const authInfo = {
        user ,
        setUser,
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;