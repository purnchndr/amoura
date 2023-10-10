import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AmouraShopping from "./pages/AmouraShopping";
import ProductDetails from "./pages/ProductDetails";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="shop" element={<AmouraShopping />} />
          <Route
            path="shop/products/:productid"
            element={<ProductDetails />}
          ></Route>
        </Routes>
        {/* </BrowserRouter> */}
      </Router>
    </>
  );
}

export default App;
