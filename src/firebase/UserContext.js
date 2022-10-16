import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from './firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const googelProvider = new GoogleAuthProvider()

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{   
        return signOut(auth)
    }

    const signInGoogle = () =>{
        return signInWithPopup(auth, googelProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();

    },[])

    const authInfo = {user, loading, createUser, signIn, logOut, signInGoogle}

    return (
        <AuthContext.Provider value = {authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default UserContext;