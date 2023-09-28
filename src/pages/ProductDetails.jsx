import { useParams } from "react-router-dom";
import style from "./ProductDetails.module.css";
import Header from "../components/header/Header";
import Categories from "../components/Catagories";
import FooterNavigation from "../components/footer/FooterNavigation";
import ProductsTray from "../components/common/ProductsTray";

function ProductDetails() {
  const { productid: id } = useParams();
  const product = {
    img1: "https://hebeboutique.com/cdn/shop/files/IMG_4872_1800x1800.webp.jpg?v=1695000973",
    img2: "https://hebeboutique.com/cdn/shop/files/oversizedvnecktop_white_0109_1800x1800.jpg?v=1694045184",
    img3: "https://hebeboutique.com/cdn/shop/files/IMG_4735_1800x1800.webp.jpg?v=1694138851",
    name: "Odile Crossbody // Geranium",
    color: ["red", "yellow", "green"],
    description: "Very good fdfljaflkjflsd",
    comments: [
      { user: "random", comment: "fndfndjfnsdk" },
      { user: "random", comment: "fndfndjfnsdk" },
      { user: "random", comment: "fndfndjfnsdk" },
    ],
    stock: 20,
    price: 999,
    id,
  };

  return (
    <>
      <Header />
      <Categories />
      <Details product={product} />
      <ProductsTray heading="You may also like these.." />
      <FooterNavigation />
    </>
  );
}

const Details = ({ product }) => {
  return (
    <div className={style.productPage}>
      <div className={style.imgCntnr}>
        <div className={style.navImgCntnr}>
          <img className={style.navImg} src={product.img1} alt="product img" />
          <img className={style.navImg} src={product.img2} alt="product img" />
          <img className={style.navImg} src={product.img3} alt="product img" />
        </div>
        <div className={style.mainImgCntnr}>
          <img className={style.mainImg} src={product.img1} alt="product img" />
        </div>
      </div>
      <div className={style.productInfo}>
        <div>
          <h1>{product.name}</h1>
        </div>
        <div>
          <p>{product.price}</p>
          <p>
            {product.stock > 9
              ? "In Stock"
              : `Hurry! Only ${product.stock} left in stock`}
          </p>
          <div className={style.colorCntnr}>
            {product.color.map((curr, i) => (
              <div
                key={i}
                className={style.color}
                style={{ backgroundColor: `${curr}` }}
              ></div>
            ))}
          </div>
          <p>Deviver to your pincode in 5 days.</p>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
        <div>
          {product.comments.map((curr, i) => {
            return (
              <div key={i}>
                <p>{curr.user}</p>
                <p>{curr.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
