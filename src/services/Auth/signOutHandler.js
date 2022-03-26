
export const signOutHandler = (setUser) => {
    localStorage.removeItem("token");
    setUser({ isUserLoggedIn: false });
  };