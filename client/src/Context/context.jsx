import React from "react";
import { createContext } from "react";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth,setAuth] =React.useState(false)

  return <AuthContext.Provider value={{isAuth,setAuth}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
