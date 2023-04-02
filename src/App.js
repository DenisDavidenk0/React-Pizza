import "../src/styles/mainContainer.css";

import Products from "./components/Products";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Basket from "./components/static/Basket";
import { useContext } from "react";

import { FilterProductsContext } from "./context/FilterProductsContext";
import EmptyCart from "./components/static/EmptyCart";

function App() {
  const { basket } = useContext(FilterProductsContext);

  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />

          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
