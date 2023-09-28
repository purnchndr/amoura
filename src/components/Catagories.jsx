import { Link } from "react-router-dom";
import styles from "./Catagories.module.css";

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

export default Categories;
