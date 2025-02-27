import React, { useState } from "react";
import { Link } from "react-router-dom";
import newproducts from "../../data/Tomford/newproducts.json";
import saleproduct from "../../data/Tomford/saleproduct.json";
import glasses from "../../data/Tomford/glasses.json";
import eyewearProducts from "../../data/Tomford/glasses_eyewear.json";
import "../../styles/Tomford/Searcht.css";

import Logot from "../../components/Logot";
import Navbart from "../../components/Navbart";

const SearchPage = () => {
  // Gộp tất cả sản phẩm từ 4 file JSON
  const allProducts = [
    ...newproducts,
    ...saleproduct,
    ...glasses,
    ...eyewearProducts,
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Lọc sản phẩm chỉ dựa trên tên
  const filteredProducts = allProducts.filter(
    (product) =>
      searchTerm &&
      product.name &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Logot />
      <p></p>
      <Navbart />
      <p></p>
      <div className="search-container">
        <h2>What are you looking for?</h2>
        <input
          type="text"
          placeholder="Please enter the product name you desire..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Nếu có từ khóa nhưng không có sản phẩm nào khớp */}
        {searchTerm && filteredProducts.length === 0 && (
          <p className="no-results">
            Sorry, the product you are looking for is not available.
          </p>
        )}

        {/* Chỉ hiển thị danh sách sản phẩm nếu có kết quả */}
        {filteredProducts.length > 0 && (
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                {product.image ? (
                  <img
                    src={process.env.PUBLIC_URL + product.image}
                    alt={product.name}
                    className="product-image"
                    onError={(e) =>
                      (e.target.src = "/images/default-image.jpg")
                    }
                  />
                ) : (
                  <div className="no-image">Image not available</div>
                )}
                <h3>{product.name}</h3>
                {product.price && (
                  <p className="product-price">{product.price}</p>
                )}
                <Link className="more" to={`/Alltom/${product.id}`}>
                  learn more
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
