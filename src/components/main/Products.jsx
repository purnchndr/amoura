import "react-slideshow-image/dist/styles.css";

import styles from "./Product.module.css";
import Slideshow from "../common/SlideShow";
import ProductsTray from "../common/ProductsTray";
import Categories from "../Catagories";

function Products() {
  return (
    <main className={styles.main}>
      <section>
        <Categories />
        <MainSlideShow />
        <ProductsTray
          heading="Special for You"
          text=" look smarter with these handpicked for you Tshirts........"
        />
        <ProductsTray
          heading="Special for You"
          text=" look smarter with these handpicked for you Shirts........"
        />
        <ProductsTray
          heading="Special for You"
          text=" look smarter with these handpicked for you shorts........"
        />
      </section>
    </main>
  );
}

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
