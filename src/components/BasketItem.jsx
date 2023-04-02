import { useEffect, useContext } from "react";
import { useState } from "react";
import { FilterProductsContext } from "../context/FilterProductsContext";
import "../styles/BasketItem.css";

function BasketItem({ product, id }) {
  const { addProductToBasket, basketOperation, removeProductFromBasket } =
    useContext(FilterProductsContext);

  return (
    <>
      <div className="containerBasketItem">
        <div style={{ display: "flex", width: "300px" }}>
          <img
            style={{ height: "80px", width: "80px" }}
            src={product.imageUrl}
          />
          <div style={{ marginLeft: "15px" }}>
            <h2 className="BasketItemTitlePizza">{product.title}</h2>
            <h3 className="BasketItemSizePizza">30см</h3>
          </div>
        </div>

        <div className="containerSizeAdjustment">
          <button
            className="resizeButtonMinus"
            disabled={product.count === 1}
            onClick={() => basketOperation(id, false)}
          >
            <div className="BasketDividingLine" />
          </button>
          <span className="informationAboutTheNumberOfPizzas">
            {product.count}
          </span>
          <button
            onClick={() => basketOperation(id, true)}
            className="resizeButtonPlus"
          >
            +
          </button>
        </div>
        <h2 className="BasketItemPrice">{product.price * product.count}</h2>

        <button className="deleteItem">
          <span
            onClick={() => removeProductFromBasket(product)}
            style={{ color: "#D0D0D0", width: "10px" }}
          >
            ×
          </span>
        </button>
      </div>
      <div style={{ margin: "30px 0" }} className="verticalDividingLine" />
    </>
  );
}

export default BasketItem;
