import React, { createContext, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import auth from "../firebase/firebase.confic"

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "king" }) 

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const createUsercreateUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider)
  }

  const userInfo = {user, createUser, createUsercreateUser, createUser, loginWithGoogle, loginWithGithub}
   return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
   )
};

export default AuthProvider;
