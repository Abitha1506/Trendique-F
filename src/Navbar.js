import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="name">
          <h1>Trendique</h1>
        </div>

        <div className="search">
          <input type="text" placeholder="Search your fav brands, products..." />
        </div>

        <div className="list">
          <Link to="/"><FaHome /> <span>Home</span></Link>
          <Link to="/shop"><FaStore /> <span>Shop</span></Link>
          <Link to="/cart"><FaShoppingCart /> <span>Cart</span></Link>
          <Link to="/login"><FaSignInAlt /> <span>Login</span></Link>
        </div>
      </nav>

      <hr />
    </div>
  );
}

export default Navbar;
