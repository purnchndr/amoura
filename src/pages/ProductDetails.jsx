import { useParams } from "react-router-dom";
import style from "./ProductDetails.module.css";
import Header from "../components/header/Header";
import Categories from "../components/Catagories";
import FooterNavigation from "../components/footer/FooterNavigation";
import ProductsTray from "../components/common/ProductsTray";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Button from "../components/common/Button";

function ProductDetails() {
  const { productid: id } = useParams();
  const product = {
    img1: "https://hebeboutique.com/cdn/shop/files/IMG_4872_1800x1800.webp.jpg?v=1695000973",
    img2: "https://hebeboutique.com/cdn/shop/files/oversizedvnecktop_white_0109_1800x1800.jpg?v=1694045184",
    img3: "https://hebeboutique.com/cdn/shop/files/IMG_4735_1800x1800.webp.jpg?v=1694138851",
    name: "Odile Crossbody // Geranium",
    color: ["red", "yellow", "green"],
    description:
      "Very good fdfljaflkjflsd It uses the full URL instead of the hash urls (#this/stuff) common in web apps before history.pushState was standardized. Full URLs are better for SEO, better for server rendering, and are just more compatible with the rest of the web platform.",
    size: ["S", "M", "L", "XL", "XXL"],
    comments: [
      { user: "Div", comment: "Great Product", rating: 5 },
      { user: "Pratap", comment: "Very good service", rating: 4 },
      { user: "User", comment: "Love this product", rating: 3 },

      { user: "Div", comment: "Great Product", rating: 5 },
      { user: "Pratap", comment: "Very good service", rating: 4 },
      { user: "User", comment: "Love this product", rating: 3 },

      { user: "Div", comment: "Great Product", rating: 5 },
      { user: "Pratap", comment: "Very good service", rating: 4 },
      { user: "User", comment: "Love this product", rating: 3 },

      { user: "Div", comment: "Great Product", rating: 5 },
      { user: "Pratap", comment: "Very good service", rating: 4 },
      { user: "User", comment: "Love this product", rating: 3 },

      { user: "Div", comment: "Great Product", rating: 5 },
      { user: "Pratap", comment: "Very good service", rating: 4 },
      { user: "User", comment: "Love this product", rating: 3 },
    ],
    rating: 4.5,
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
  const [mainImg, setMainImg] = useState(product.img1);
  const [color, setColor] = useState(product.color[0]);
  const [size, setSize] = useState(product.size[0]);

  function handelSetMainImg(index) {
    setMainImg(product[`img${index + 1}`]);
  }

  function handelColorChange(color) {
    setColor(color);
  }
  function handelSizeChange(size) {
    setSize(size);
  }

  return (
    <div className={style.productPage}>
      <div className={style.imgCntnr}>
        <div className={style.navImgCntnr}>
          <img
            className={style.navImg}
            onMouseEnter={() => handelSetMainImg(0)}
            src={product.img1}
            alt="product img"
          />
          <img
            className={style.navImg}
            onMouseEnter={() => handelSetMainImg(1)}
            src={product.img2}
            alt="product img"
          />
          <img
            className={style.navImg}
            onMouseEnter={() => handelSetMainImg(2)}
            src={product.img3}
            alt="product img"
          />
        </div>
        <div className={style.mainImgCntnr}>
          <img className={style.mainImg} src={mainImg} alt="product img" />
        </div>
      </div>
      <div className={style.productInfo}>
        <div className={style.productName}>
          <h1>{product.name}</h1>
        </div>
        <div>
          <p>
            <span className={style.productPriceFull}>
              &#x20B9;{product.price + 200}
            </span>
            <span> &#x20B9;{product.price} Only </span>
            <span className={style.priceDiscount}> 20% OFF</span>
          </p>
          <p>
            {product.stock > 9
              ? "In Stock"
              : `Hurry! Only ${product.stock} left in stock`}
          </p>
          <div className={style.colorCntnr}>
            <span>{color} Color Selected</span>
            {product.color.map((curr, i) => (
              <div
                key={i}
                className={style.color}
                onClick={() => handelColorChange(curr)}
                style={{ backgroundColor: `${curr}` }}
              ></div>
            ))}
          </div>
          <div className={style.sizeCntnr}>
            <span>{size} Size Selected</span>
            {product.size.map((curr, i) => (
              <span
                key={i}
                className={style.size}
                onClick={() => handelSizeChange(curr)}
              >
                {curr}
              </span>
            ))}
          </div>
          <p>Deliver to your pincode in 7 days.</p>
        </div>
        <div className={style.actionButtons}>
          <Button text="Add To Cart" type="primary" />
          <Button text="Buy Now" type="secondary" />
        </div>
        <div className={style.productDescription}>
          <h3>Product Description</h3>
          <p>{product.description}</p>
        </div>
        <div className={style.reviewsCntnr}>
          <h3>Ratings and Reviews</h3> <span> Overall {product.rating}</span>
          <ReactStars
            value={product.rating}
            size={24}
            activeColor="#6bff6b"
            edit={false}
          />
          <div className={style.ratings}>
            {product.comments.map((curr, i) => {
              return (
                <div key={i} className={style.reviews}>
                  <span className={style.reviewProfile}>👤 {curr.user}</span>
                  <ReactStars
                    value={curr.rating}
                    size={18}
                    activeColor="#6bff6b"
                    edit={false}
                  />
                  <span>{curr.comment}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
