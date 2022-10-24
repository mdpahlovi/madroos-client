import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInByGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const signInByFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    };
    const signInByGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    const signout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (correntUser) => {
            console.log("Corrent User : ", correntUser);
            setUser(correntUser);
        });
        return () => unSubscribe();
    }, []);

    const authInfo = { user, createUser, signIn, signInByGoogle, signInByFacebook, signInByGithub, signout };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
