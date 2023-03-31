import { useContext, useMemo } from "react";
import { FilterProductsContext } from "../context/FilterProductsContext";
import "../styles/Product.css";
import ButtonSize from "./ButtonSize";

function Product({ product, allPizzaSizes }) {
  const { addProductToBasket } = useContext(FilterProductsContext);

  return (
    <>
      <div className="lowerСontainerProduct" style={{}}>
        <div className="containerImg">
          <img className="imgProduct" src={product.imageUrl} />
        </div>

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
        <div className="containerPrice">
          <div className="productPrice"> от: {product.price} ₴</div>
          <button className="productBtnAddCard">
            <div className="containerBtnAddCard">
              <h1 style={{ fontSize: "25px", fontWeight: 700 }}>+</h1>
              <span onClick={() => addProductToBasket(product.id)}>
                Добавить
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
export default Product;
