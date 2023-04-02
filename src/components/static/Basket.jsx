import { useContext, useEffect, useMemo, useState } from "react";
import { FilterProductsContext } from "../../context/FilterProductsContext";

import "../../styles/mainContainer.css";
import LogoHeaderPizza from "../LogoHeaderPizza";
import basketIcon from "../../icons/basketIcon.png";
import DeletedItemIcon from "../../icons/DeletedItemIcon.png";
import TriangleToTheLeft from "../../icons/TriangleToTheLeft.png";
import "../../styles/BasketStyle.css";
import BasketItem from "../BasketItem";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

function Basket() {
  const { basket, totalBasketSum, EmptyTrash } = useContext(
    FilterProductsContext
  );

  return (
    <>
      <div className="containerHeaderBasket">
        <div style={{ padding: "49px 54px" }}>
          <LogoHeaderPizza />
        </div>

        <div className="verticalDividingLine"></div>
        {basket.length > 0 ? (
          <div className="mainContainerBasket">
            <div className="mainHeaderContainerBasket">
              <div style={{ display: "flex" }}>
                <img
                  style={{ height: "30px", alignItems: "center" }}
                  src={basketIcon}
                />
                <h2 className="basketTextSteel ">Корзина</h2>
              </div>
              <div className="containerButtonDeletedItem">
                <img src={DeletedItemIcon} />
                <button
                  onClick={() => EmptyTrash()}
                  className="buttonDeletedItem"
                >
                  Очистить корзину
                </button>
              </div>
            </div>
            <div
              style={{ margin: "30px 0" }}
              className="verticalDividingLine"
            />
            <div>
              {basket?.map((product, id) => (
                <BasketItem
                  key={"basketItem:" + id}
                  product={product}
                  id={id}
                />
              ))}
            </div>

            <div className="BasketInfoPanel">
              <h3>Всего пицц:{basket?.length} </h3>
              <h3>Сумма заказа: {totalBasketSum} ₴</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "Anonymous Pro",
              }}
            >
              <button className="containerButtonGoingBack">
                <Link to={"/"}>
                  <div>
                    <img
                      style={{ margin: "2px 5px 0 -3px" }}
                      src={TriangleToTheLeft}
                    />
                    <span className="textButtonGoingBack">Вернуться назад</span>
                  </div>
                </Link>
              </button>
              <button className="containerButtonOrderPayment ">
                <span className="textButtonOrderPayment">Оплатить сейчас</span>
              </button>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
}

export default Basket;
