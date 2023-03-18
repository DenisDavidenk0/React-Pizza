import "../src/styles/mainContainer.css";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Products />
    </div>
  );
}

export default App;

// <div className="styleReset">
// <div className="mainContainer">
//   <Header />
// </div>
// </div>
