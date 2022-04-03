import { createContext, useContext, useState } from "react";


const HeaderContext = createContext();
const HeaderProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(true);
    const toggle = () => setSidebar(!sidebar);

  return (
    <HeaderContext.Provider
      value={{ toggle ,sidebar}}
    >
      {children}
    </HeaderContext.Provider>
  );
};

const useHeader = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useContext must be used inside HeaderProvider");
  }
  return context;
};

export { HeaderProvider, useHeader };