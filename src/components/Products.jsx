import React, { useContext } from "react";
import { FilterProductsContext } from "../context/FilterProductsContext";
import "../styles/styleProducts.css";
import Product from "./Product";

function Products() {
  const { products, allPizzaSizes } = useContext(FilterProductsContext);

  return (
    <div className="containerProducts">
      <div>
        <h3 className="titleProducts">Все пиццы</h3>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            allPizzaSizes={allPizzaSizes}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
