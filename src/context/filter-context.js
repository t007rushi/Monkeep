import { createContext, useContext, useReducer } from "react";
import { filterInitialState, filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    
  const [filterState, filterDispatcher] = useReducer(
    filterReducer,
    filterInitialState
  );

  return (
    <FilterContext.Provider value={{ filterState, filterDispatcher }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useContext must be used inside FilterProvider");
  }
  return context;
};

export { FilterProvider, useFilter };
