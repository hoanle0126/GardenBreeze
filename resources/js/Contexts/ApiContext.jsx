/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  selectedProducts: [],
  setSelectedProducts: () => {},
});

export const ApiContext = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <StateContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
