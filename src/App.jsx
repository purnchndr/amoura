import { BrowserRouter, Routes, Route } from "react-router-dom";
import AmouraShopping from "./pages/AmouraShopping";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hi I am Home route</h1>}></Route>
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
