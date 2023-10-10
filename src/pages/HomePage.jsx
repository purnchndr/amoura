import { Link } from "react-router-dom";
import Categories from "../components/Catagories";
import FooterNavigation from "../components/footer/FooterNavigation";
import Header from "../components/header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <Categories />
      <h1>This site is under development</h1>
      <p>Please Visit our shop section to purchage products</p>

      <Link to="/shop">Click here to visit Shopping page</Link>

      <FooterNavigation />
    </>
  );
}

export default HomePage;
