import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import style from "./ProductsTray.module.css";

const data = [
  {
    img: "https://hebeboutique.com/cdn/shop/files/IMG_4872_1800x1800.webp.jpg?v=1695000973",
    name: "Odile Crossbody // Geranium",
    color: ["red", "yellow", "green"],
    stock: 20,
    price: 999,
    id: "T120",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    img: "https://hebeboutique.com/cdn/shop/files/oversizedvnecktop_white_0109_1800x1800.jpg?v=1694045184",
    name: "Odile Crossbody // Geranium",
    color: ["red", "black", "green"],
    stock: 5,
    price: 1499,
    id: "SRT121",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    img: "https://hebeboutique.com/cdn/shop/files/IMG_4735_1800x1800.webp.jpg?v=1694138851",
    name: "Odile Crossbody // Geranium",
    color: ["red", "yellow", "green"],
    stock: 20,
    price: 999,
    id: "T122",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    img: "https://hebeboutique.com/cdn/shop/files/IMG_4872_1800x1800.webp.jpg?v=1695000973",
    name: "T-Shirt",
    color: ["red", "yellow", "green"],
    stock: 20,
    price: 999,
    id: "T123",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    img: "https://hebeboutique.com/cdn/shop/files/IMG_4872_1800x1800.webp.jpg?v=1695000973",
    name: "T-Shirt",
    color: ["red", "yellow", "green"],
    stock: 20,
    price: 999,
    id: "T124",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    img: "https://hebeboutique.com/cdn/shop/files/IMG_4872_1800x1800.webp.jpg?v=1695000973",
    name: "T-Shirt",
    color: ["red", "yellow", "green"],
    stock: 20,
    price: 999,
    id: "T125",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    img: "https://hebeboutique.com/cdn/shop/files/IMG_4872_1800x1800.webp.jpg?v=1695000973",
    name: "T-Shirt",
    color: ["red", "yellow", "green"],
    stock: 20,
    price: 999,
    id: "T126",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

function ProductsTray({ heading, text, category }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(data);
  }, [category]);

  return (
    <div className={style.mainCntnr}>
      <div className={style.information}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className={style.products}>
        {list.map((curr, i) => (
          <ProductCard
            key={i}
            img={curr.img}
            name={curr.name}
            color={curr.color}
            stock={curr.stock}
            price={curr.price}
            sizes={curr.sizes}
            id={curr.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsTray;
