import { NavLink } from "react-router-dom";

import cart from "../../assets/img/icons/bag.png";
import profile from "../../assets/img/icons/profile.png";

import "./Header.css";

// function Header() {
//   return (
//     <header className="header">
//       <div className="nav-links">
//         <NavLink className="nav-link logo" to="/">
//           <img id="nav-img" src={logo} />{" "}
//           <span className="logo-text">AMOURA</span>
//         </NavLink>

//         <NavLink className="nav-link" to="/he">
//           <img src={boy} />
//           <span className="nav-text">He</span>
//         </NavLink>
//         <NavLink className="nav-link" to="/she">
//           <img src={girl} />
//           <span className="nav-text">She</span>
//         </NavLink>
//         <NavLink className="nav-link" to="/they">
//           <img src={gay} />
//           <span className="nav-text">They</span>
//         </NavLink>

//         <NavLink className="nav-link" to="/profile">
//           <img src={user} />
//           <span className="nav-text">Profile</span>
//         </NavLink>
//         <NavLink className="nav-link" to="/they">
//           <img src={cart} />
//           <span className="nav-text">Cart</span>
//         </NavLink>
//       </div>
//     </header>
//   );
// }

function Header() {
  return (
    <header className="header">
      <div className="nav-links">
        <div className="logo-cntnr">
          <NavLink className="nav-link logo" to="/shop">
            <span className="logo-text">AMOURA</span>
          </NavLink>
        </div>

        <div className="links-cntnr nav-section">
          <NavLink className="nav-link" to="/shop/he">
            <span className="nav-text">For Him</span>
          </NavLink>
          <NavLink className="nav-link" to="/shop/she">
            <span className="nav-text">For Her</span>
          </NavLink>
          <NavLink className="nav-link" to="/shop/they">
            <span className="nav-text">For Them</span>
          </NavLink>
        </div>

        <div className="icon-cntnr nav-section">
          <NavLink className="nav-link" to="/shop/cart">
            <img src={cart} className="icon" alt="shopping cart" />
          </NavLink>
          <NavLink className="nav-link" to="/shop/profile">
            <img src={profile} className="icon" alt="user profile" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
