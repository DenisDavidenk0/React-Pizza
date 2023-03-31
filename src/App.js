import "../src/styles/mainContainer.css";

import Products from "./components/Products";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Basket from "./components/static/Basket";

function App() {
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
