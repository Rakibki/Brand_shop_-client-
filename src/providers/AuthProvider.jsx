import React, { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import auth from "../firebase/firebase.confic"

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null) 
  const [loadding, setLoadding] = useState(true)

  const createUser = (email, password) => {
    setLoadding(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    setLoadding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoadding(true)
    return signInWithPopup(auth, googleProvider)
  }

  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = () => {
    setLoadding(true)
    return signInWithPopup(auth, githubProvider)
  }

  console.log(user);

  useEffect(() => {
    const disconnent = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoadding(false)
    })
    return () =>{
      disconnent()
    }
  })

  const userInfo = {user, loadding, createUser, loginUser, createUser, loginWithGoogle, loginWithGithub}
   return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
   )
};

export default AuthProvider;
