import LogoHeaderPizza from "../LogoHeaderPizza";
import "../../styles/BasketStyle.css";
import imageBasketNull from "../../icons/imageBasketNull.png";

function EmptyCart() {
  return (
    <>
      <div className="containerHeaderBasket">
        <div
          style={{
            margin: "204px auto",
          }}
        >
          <div>
            <img src={imageBasketNull} />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
