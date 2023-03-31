import React from "react";
import { useState, useMemo, useEffect, useCallback } from "react";
import { GOODS } from "../pizza.json/pizza";

export const FilterProductsContext = React.createContext();

function FilterProductsProvider({ children }) {
  const [products, setProducts] = useState(GOODS);
  const [allPizzaSizes, setAllPizzaSizes] = useState([26, 30, 40]);

  const [basket, setBasket] = useState([]);
  const [totalBasketSum, setTotalBasketSum] = useState(0);

  useEffect(() => {
    setTotalBasketSum(
      basket.reduce(
        (acc, basketProduct) => acc + basketProduct.price * basketProduct.count,
        0
      )
    );
  }, [basket]);

  const addProductToBasket = (productId) => {
    if (basket.find((el) => el.id === productId)) {
      setBasket(
        ...basket.map((el) => {
          if (el.id !== productId) return el;
          return { ...el, count: el.count + 1 };
        })
      );
    } else {
      const product = products.find((el) => el.id === productId);
      product.count = 1;
      basket.push(product);

      setBasket([...basket]);
    }
  };

  const removeProductFromBasket = (basketId) => {
    basket.splice(basketId, 1);

    setBasket([...basket]);
  };

  const basketOperation = (basketId, isIncreace) => {
    basket[basketId].count = isIncreace
      ? basket[basketId].count + 1
      : basket[basketId].count - 1;

    if (basket[basketId].count <= 0) {
      removeProductFromBasket(basketId);
      return;
    }

    setBasket([...basket]);
  };

  return (
    <FilterProductsContext.Provider
      value={{
        products,
        allPizzaSizes,
        totalBasketSum,
        basket,
        //basket methods
        addProductToBasket,
        removeProductFromBasket,
        basketOperation,
      }}
    >
      {children}
    </FilterProductsContext.Provider>
  );
}

export default FilterProductsProvider;
