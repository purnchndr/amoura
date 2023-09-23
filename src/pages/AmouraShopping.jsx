import { Outlet } from "react-router-dom";
import FooterNavigation from "../components/footer/FooterNavigation";
import Header from "../components/header/Header";
import Products from "../components/main/Products";

function AmouraShopping() {
  return (
    <>
      <Header />
      <Outlet />
      <Products />
      <FooterNavigation />
    </>
  );
}

export default AmouraShopping;
