import { createContext, useEffect, useState } from "react";
import { App } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(App);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () =>{
            unSubcribe()
        }
    }, [])
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut=()=>{
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        auth
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;