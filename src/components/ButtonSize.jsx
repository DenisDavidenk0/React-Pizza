import "../styles/Product.css";

function ButtonSize({ pizzaSize, productSizes }) {
  return (
    <button
      disabled={!productSizes.includes(pizzaSize)}
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
