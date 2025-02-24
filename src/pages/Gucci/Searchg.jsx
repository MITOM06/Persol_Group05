import React, { useState } from "react";
import { Link } from "react-router-dom"; // Sử dụng Link để điều hướng
import "../../styles/Gucci/Searchg.css";

// Import dữ liệu sản phẩm (giả lập)
import GucciEyeGlasses from "../../data/Gucci/Eyeglasses/glasses.json";
import GucciSunglasses from "../../data/Gucci/Sunglasses/glasses.json";
import GucciSaleProducts from "../../data/Gucci/Saleglasses/glasses.json";
import GucciNewProducts from "../../data/Gucci/Newproduct/glasses.json";

import Logog from "../../components/Logog";
import Navbarg from "../../components/Navbarg"

const SearchPage = () => {
  // Gộp tất cả sản phẩm vào một mảng chung
  const allProducts = [
    ...GucciEyeGlasses,
    ...GucciSunglasses,
    ...GucciSaleProducts,
    ...GucciNewProducts
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    let text = e.target.value.toLowerCase();
    setQuery(text);

    // Lọc theo thuộc tính name
    const result = allProducts.filter((product) =>
      product.name.toLowerCase().includes(text)
    );
    setFilteredProducts(result);
  };

  return (
    <>
       <Logog />
      <p></p>
      <Navbarg />
      <p></p>
    <div className="search-page">
      <h2>What are you looking for?</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Please enter the product name you desire..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      <div className="search-results">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Link
              key={index}
              to={`/productG/${product.id}`}
              className="product-link"
            >
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}$</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-results">
             Sorry, the product you are looking for is not available.
             </p>
        )}
      </div>
    </div>
  </>
  );
};

export default SearchPage;
