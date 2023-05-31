import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const Context = ({ children }) => {
    const [user, setUser] = useState()
    // googleSignin
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    //createUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // updateName
    const updateInfo = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    //Signin
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signout
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        googleSignIn, createUser, signIn, user, logOut, updateInfo
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            currentUser => {
                setUser(currentUser)
            })
        return unsubscribe
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;