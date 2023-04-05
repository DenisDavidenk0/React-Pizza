import LogoHeaderPizza from "../LogoHeaderPizza";
import "../../styles/BasketStyle.css";
import imageBasketNull from "../../icons/imageBasketNull.png";
import BasketNull from "../../styles/BasketNull.css";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <>
      <div className="containerHeaderBasket">
        <div className="containerBasketNull">
          <div className="containerInfoBasketNull">
            <h2 className="titleBasketNull">Корзина пустая</h2>
            <span className="descriptionBasketNull">
              Вероятнее всего, вы не заказывали еще пиццу. <br />
              Для того что-бы сказать пиццу перейдите на главную страницу
            </span>
          </div>
          <div className="containerImgBasketNull">
            <img style={{ heaght: 300, width: 255 }} src={imageBasketNull} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/">
              <button className="buttonBasketNull">Вернуться назад </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
