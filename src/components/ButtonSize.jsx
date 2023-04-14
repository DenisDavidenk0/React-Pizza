import { useContext } from "react";
import "../styles/Product.css";
import FilterProductsProvider, {
  FilterProductsContext,
} from "../context/FilterProductsContext";

function ButtonSize({ pizzaSize, productSizes, onClick }) {
  return (
    <button
      disabled={!productSizes.includes(pizzaSize)}
      onClick={onClick}
      className={
        !productSizes.includes(pizzaSize)
          ? "disableDproductButtonSize"
          : "productButtonSize"
      }
    >
      {pizzaSize} см.
    </button>
  );
}
export default ButtonSize;
