import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "../styles/Orther/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">

        <li><Link to="/RaybanNewProduct">NEW PRODUCT</Link></li>
        <li><Link to="/RaybanSunglasses">SUNGLASSES</Link></li>
        <li><Link to="/RaybanEyeGlasses">EYEGLASSES</Link></li>
        <li><Link to="/RaybanSaleProduct">SALE</Link></li>
      </ul>
      <div className="navbar-icons">

        ' <Link to="/Searchr">   <FaSearch className="icon" /></Link>
        <Link to="/login"> <FaUser className="icon" /></Link>
        <FaShoppingCart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
