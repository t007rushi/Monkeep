import { createContext, useContext, useState } from "react";

const authContext = createContext();
const istoken = localStorage.getItem("token") ? true : false;
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isUserLoggedIn: istoken,tokenVal:localStorage.getItem("token") });

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useContext must be used inside AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
