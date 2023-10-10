import { BrowserRouter, Route, Router } from "react-router-dom";
import AmouraShopping from "./pages/AmouraShopping";
import ProductDetails from "./pages/ProductDetails";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="shop" element={<AmouraShopping />} />
          <Route
            path="shop/products/:productid"
            element={<ProductDetails />}
          ></Route>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
