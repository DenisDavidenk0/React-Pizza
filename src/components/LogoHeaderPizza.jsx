import imagePizza from "../icons/imagePizza.png";
import "../styles/BasketStyle.css";
import basketIcon from "../icons/basketIcon.png";
import DeletedItemIcon from "../icons/DeletedItemIcon.png";

function LogoHeaderPizza() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <img className="titleImg" src={imagePizza} alt="" />
        </div>

        <div style={{ marginLeft: "17px" }}>
          <h2 className="titleHeader">REACT PIZZA</h2>

          <h5 className="description">самая вкусная пицца во вселенной</h5>
        </div>
      </div>
    </div>
  );
}

export default LogoHeaderPizza;
