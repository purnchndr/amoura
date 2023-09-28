import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";

function ProductCard({ img, name, color, stock, price, id, sizes }) {
  console.log(id);
  return (
    <Link to={`products/${id}`} className={style.productCard}>
      <div>
        <img className={style.productImage} src={img} alt={name} />
      </div>
      <div className={style.productDetails}>
        <h2 className={style.name}>{name}</h2>
        <h4 className={style.price}>{`Rs. ${price}.00`}</h4>
        <h4 className={style.stock}>
          {stock <= 10 ? `Only ${stock} left` : "In Stock"}
        </h4>
        <div className={style.info}></div>
        <div className={style.colorCntnr}>
          {color.map((curr, i) => (
            <div
              key={i}
              className={style.color}
              style={{ backgroundColor: `${curr}` }}
            ></div>
          ))}
        </div>
        <div className={style.sizesCntnr}>
          {sizes.map((curr, i) => (
            <p key={i} className={style.size}>
              {curr}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
