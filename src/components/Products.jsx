import React, { useContext, useState } from "react";
import { FilterProductsContext } from "../context/FilterProductsContext";
import "../styles/styleProducts.css";
import Header from "./Header";
import Product from "./Product";

function Products() {
  const { products, allPizzaSizes } = useContext(FilterProductsContext);
  const [addCard, setAddCard] = useState(false);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="containerProducts  ">
        <div>
          <h3 className="titleProducts">Все пиццы</h3>
        </div>

        <div className="containerProduct">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              allPizzaSizes={allPizzaSizes}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
