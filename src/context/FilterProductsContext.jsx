import React from "react";
import { useState } from "react";
import { GOODS } from "../pizza.json/pizza";

export const FilterProductsContext = React.createContext();

function FilterProductsProvider({ children }) {
  const [products, setProducts] = useState(GOODS);
  const [allPizzaSizes, setAllPizzaSizes] = useState([26, 30, 40]);

  return (
    <FilterProductsContext.Provider value={{ products, allPizzaSizes }}>
      {children}
    </FilterProductsContext.Provider>
  );
}

export default FilterProductsProvider;
