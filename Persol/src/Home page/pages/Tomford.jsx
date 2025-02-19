import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/tomford.css";
import products from "../data/glasses.json";
import Logor from "../components/Logoray";
import Navbarr from '../components/Navbarr';


const imageUrl = "/img/bgimg.jpg";
const itemsPerPage = 9; // Số sản phẩm trên mỗi trang

const Tomford = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <Logor />
      <p></p>
      <Navbarr />
      <p></p>
      <div>
        {/* <img src={imageUrl} align="center" height="800" width="2700" alt="Background" /> */}
        <img src={imageUrl} className="background-image" alt="Background" />

      </div>
      <div className="row">
        <h1> SUNGLASSES </h1>
        {currentProducts.map((product) => (
          <div className="col col-4" key={product.id}>
            <div className="center">
              <Link to={`/sunglassestomford/${product.id}`}>
                <div className="hover-img">
                  {product.image ? (
                    <img
                      src={product.image || "/images/default-image.jpg"}
                      className="product-image"
                      alt={product.name}
                      onError={(e) => (e.target.src = "/images/default-image.jpg")}
                    />
                  ) : (
                    <p>Image not available</p>
                  )}
                  <h1 className="non-link">{product.name}</h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Phân trang */}
      <div className="pagination" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          style={{ padding: "12px 20px", fontSize: "18px", margin: "5px", borderRadius: "5px", cursor: "pointer", transition: "0.3s", backgroundColor: "#fff", color: "#000", border: "none" }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#fff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
        >
          &laquo; Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            // className={currentPage === index + 1 ? "active-page" : ""}
            className={`pagination-btn ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
      
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          style={{ padding: "12px 20px", fontSize: "18px", margin: "5px", borderRadius: "5px", cursor: "pointer", transition: "0.3s", backgroundColor: "#fff", color: "#000", border: "none" }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#fff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
        >
          Next &raquo;
        </button>
      </div>

    </>
  );
};

export default Tomford;