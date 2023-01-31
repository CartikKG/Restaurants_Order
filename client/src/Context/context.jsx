import React, { useEffect } from "react";
import { createContext } from "react";
// import { use } from "../../../Server/route/allRoutes";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = React.useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    }
  }, [localStorage.getItem("token")]);
  const [allOrder, setAllOrder] = React.useState({});

  return (
    <AuthContext.Provider value={{ isAuth, setAuth, allOrder, setAllOrder }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
