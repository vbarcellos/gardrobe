import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Gardrobe
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/category/shirts">Shirts</Link>
        </li>
        <li>
          <Link to="/category/pants">Pants</Link>
        </li>
        <li>
          <Link to="/category/dresses">Dresses</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon">
            🛒
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
