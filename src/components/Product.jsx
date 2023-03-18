import { useContext, useEffect, useState } from "react";
import { FilterProductsContext } from "../context/FilterProductsContext";
import "../styles/Product.css";
import ButtonSize from "./ButtonSize";

function Product({ product, allPizzaSizes }) {
  return (
    <>
      <div style={{ width: "280px", marginRight: "35px" }}>
        <img className="imgProduct" src={product.imageUrl} />
        <h3 className="titleProduct">{product.title}</h3>
        <div className="containerSizes">
          <div style={{ padding: "5.73px" }}>
            {allPizzaSizes.map((pizzaSize, id) => (
              <ButtonSize
                key={id}
                productSizes={product.sizes}
                pizzaSize={pizzaSize}
              />
            ))}
          </div>
        </div>
        <div>
          <div>{product.price}</div>
          <button>Добавить </button>
        </div>
      </div>
    </>
  );
}
export default Product;
