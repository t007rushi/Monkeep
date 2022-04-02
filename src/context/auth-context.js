import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInHandlerService, signUpHandlerService } from "../services";

const authContext = createContext();
const token = localStorage.getItem("Auth_token");
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isUserLoggedIn: token ? true : false,
    tokenVal: token,
  });

  const navigator = useNavigate();

  const logInHandler = async ({ email, password }) => {
    const { data, status } = await logInHandlerService(email, password);
    if (status === 200) {
      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      setUser({
        tokenVal: JSON.stringify(data.encodedToken),
        isUserLoggedIn: true,
      });
      navigator("/notes");
    }
  };

  const signUpHandler = async ({ first, last, email, password }) => {
    const data = await signUpHandlerService(first, last, email, password);
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", data.encodedToken);
    navigator("/notes");
  };

  return (
    <authContext.Provider
      value={{ user, setUser, logInHandler, signUpHandler }}
    >
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
