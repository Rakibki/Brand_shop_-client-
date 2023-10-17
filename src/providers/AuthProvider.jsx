import React, { createContext, useState } from "react";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "king" }) 


  const userInfo = {user}
   return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
   )
};

export default AuthProvider;
