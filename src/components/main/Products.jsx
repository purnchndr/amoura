import { Link } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";
import image from "../../assets/img/poster.webp";

import styles from "./Product.module.css";
import Slideshow from "../common/SlideShow";
import ProductCard from "../common/ProductCard";
import ProductsTray from "../common/ProductsTray";

function Products() {
  const img =
    "https://hebeboutique.com/cdn/shop/files/IMG_4872_1800x1800.webp.jpg?v=1695000973";
  return (
    <main className={styles.main}>
      <section>
        <Categories />
        <MainSlideShow />
        <ProductsTray
          heading="Special for You"
          text="Just som random text ........"
        />
      </section>
      <img src={image} width="100%" />
    </main>
  );
}

const Categories = () => {
  return (
    <section>
      <div className={styles.categoriesSection}>
        <div className={styles.categoriesCntnr}>
          <Link to="identity">Amoura Identity</Link>
        </div>
        <div className={styles.categoriesCntnr}>
          <Link to="luxe">Amoura Luxe</Link>
        </div>
        <div className={styles.categoriesCntnr}>
          <Link to="anime">Amoura Anime</Link>
        </div>
        <div className={styles.categoriesCntnr}>
          <Link to="comic">Amoura Comic</Link>
        </div>
        <div className={styles.categoriesCntnr}>
          <Link to="clothing">Amoura clothing</Link>
        </div>
        <div className={styles.categoriesCntnr}>
          <Link to="acessories">Amoura Acessories</Link>
        </div>
      </div>
    </section>
  );
};

const MainSlideShow = () => {
  const slideItems = [
    {
      image:
        "https://www.butlerluxury.com/cdn/shop/articles/image-1_1600x.jpg?v=1679513079",
      link: "#",
    },
    {
      image:
        "https://marketplace.canva.com/EAE942zKuBI/1/0/800w/canva-brown-minimalist-casual-fashion-collection-presentation-iFVH9GGOt14.jpg",
      link: "#",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxk5M0wIRo3EmAOqfssJ7tLH1j6fh10PA0YutEuBzM_u09P8mtkQwvn2Kg4zP9ZjcJfI&usqp=CAU",
      link: "#",
    },
  ];
  return <Slideshow items={slideItems} />;
};

export default Products;
