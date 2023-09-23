import { NavLink } from "react-router-dom";

import style from "./FooterNavigation.module.css";

function FooterNavigation() {
  return (
    <>
      <div className={style.footerMobile}>
        <div className={style.navLinks}>
          <NavLink className="nav-link-footer" to="/">
            <span className="nav-text">Your Profile</span>
          </NavLink>
          <NavLink className=" nav-link-footer" to="/shop">
            <span className="nav-text">Amoura LifeStyle</span>
          </NavLink>
        </div>
      </div>
      <footer className={style.footer}>
        <p>Amoura all &copy; reserved. || Under Development </p>
      </footer>
    </>
  );
}

export default FooterNavigation;
