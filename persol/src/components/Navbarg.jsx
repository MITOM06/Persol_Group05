import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart,} from "react-icons/fa";
import "../styles/Orther/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">

        <li><Link to="/GucciNewProduct">NEW PRODUCT</Link></li>
        <li><Link to="/GucciSunglasses">SUNGLASSES</Link></li>
        <li><Link to="/GucciEyeGlasses">EYEGLASSES</Link></li>
        <li><Link to="/GucciSaleProducts">SALE</Link></li>
      </ul>
      <div className="navbar-icons">
      <Link to="/Searchg"> 
      <FaSearch className="icon" /></Link>    
        <Link to="/login"> 
        <FaUser className="icon"/></Link>
        <FaShoppingCart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;