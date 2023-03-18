import imagePizza from "../icons/imagePizza.png";
import "../styles/styleHeader.css";

function Header() {
  return (
    <div className="containerHeader">
      <div style={{ display: "flex" }}>
        <div>
          <img className="titleImg" src={imagePizza} alt="" />
        </div>
        <div style={{ marginLeft: "17px" }}>
          <h2 className="titleHeader">REACT PIZZA</h2>
          <h5 className="description">самая вкусная пицца во вселенной</h5>
        </div>
      </div>

      <div className="buttonHeaderBasket">
        <button className="buttonReset">520</button>
        <div className="dividingLine"></div>
        <button className="buttonReset">s</button>
      </div>
    </div>
  );
}

export default Header;
