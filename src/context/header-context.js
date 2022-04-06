import { createContext, useContext, useState } from "react";


const HeaderContext = createContext();
const HeaderProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(true);
    const toggle = () => setSidebar(!sidebar);
    const [showFilter, setShowFilter] = useState(false);
    const ShowFilters = () =>{setShowFilter(prev => !prev)}

  return (
    <HeaderContext.Provider
      value={{ toggle ,sidebar,showFilter, ShowFilters }}
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