import { useContext } from "react";
import { FilterProductsContext } from "../context/FilterProductsContext";
import whiteBacketIcon from "../icons/whiteBacketIcon.png";
import "../styles/styleHeader.css";
import { Link } from "react-router-dom";
import LogoHeaderPizza from "./LogoHeaderPizza";

function Header() {
  const { total, basket } = useContext(FilterProductsContext);

  return (
    <div className="containerHeader">
      <LogoHeaderPizza />
      <Link to="/basket">
        <div className="buttonHeaderBasket">
          <button className="buttonReset">{total} ₴</button>
          <div className="dividingLine" />
          <button className="buttonReset">
            <img style={{ marginRight: "9px" }} src={whiteBacketIcon} />
            {basket?.length}
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Header;
