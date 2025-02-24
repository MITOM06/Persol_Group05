import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "../styles/Orther/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">

      <li><Link to="/">NEW PRODUCT</Link></li>
        <li><Link to="/sunglasses">SUNGLASSES</Link></li>
        <li><Link to="/eyeglasses">EYEGLASSES</Link></li>
        <li><Link to="/sale">SALE</Link></li>
      </ul>
      <div className="navbar-icons">
       
        <Link to="/Searchp">  <FaSearch className="icon" /></Link>
        <Link to="/login"> <FaUser className="icon" /></Link>
        
        <Link to="/Cart"><FaShoppingCart className="icon" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
