import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        console.log('sign in with google');
        signInWithPopup(auth, provider)
        .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            setUser(null);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    // observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('user state change', user);
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    },[])
    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      signInWithGoogle,
      handleSignOut,
      signInWithGithub,
      resetPassword,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;