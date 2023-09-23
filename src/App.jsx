import { BrowserRouter, Routes, Route } from "react-router-dom";
import AmouraShopping from "./pages/AmouraShopping";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<p>Home</p>}></Route>
          <Route path="shop" element={<AmouraShopping />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
