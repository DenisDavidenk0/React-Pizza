import "../styles/Product.css";

function ButtonSize({ pizzaSize, productSizes }) {
  return (
    <button
      disabled={!productSizes.includes(pizzaSize)}
      className="productButtonSize"
    >
      {pizzaSize} см.
    </button>
  );
}
export default ButtonSize;
