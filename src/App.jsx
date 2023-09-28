import { BrowserRouter, Routes, Route } from "react-router-dom";
import AmouraShopping from "./pages/AmouraShopping";
import ProductDetails from "./pages/ProductDetails";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="shop" element={<AmouraShopping />} />
          <Route
            path="shop/products/:productid"
            element={<ProductDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
