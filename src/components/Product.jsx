import { ConstructionOutlined } from "@mui/icons-material";
import { compose } from "@mui/system";
import { useContext, useMemo } from "react";
import { FilterProductsContext } from "../context/FilterProductsContext";
import "../styles/Product.css";
import ButtonSize from "./ButtonSize";

function Product({ product, allPizzaSizes }) {
  const { addProductToBasket, basket } = useContext(FilterProductsContext);

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
          <button
            onClick={() => addProductToBasket(product.id)}
            className="productBtnAddCard"
          >
            <div className="containerBtnAddCard">
              <span style={{ fontSize: "25px", fontWeight: 700 }}>+</span>
              <span style={{ margin: "0 5px" }}>Добавить</span>
              {product?.count ? (
                <span className="containerProductCount">{product?.count}</span>
              ) : (
                ""
              )}

              {/* <span className="productCount"></span> */}
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
export default Product;
