import React, { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import auth from "../firebase/firebase.confic"

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "king" }) 

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
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

  console.log(user);

  useEffect(() => {
    const disconnent = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () =>{
      disconnent()
    }
  })

  const userInfo = {user, createUser, loginUser, createUser, loginWithGoogle, loginWithGithub}
   return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
   )
};

export default AuthProvider;
