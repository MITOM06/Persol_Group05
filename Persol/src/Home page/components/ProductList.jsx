import React from "react";
import matkinh from "../data/matkinh.json";
import "../styles/ProductList.css";

const ProductList = ({ category, searchQuery }) => {
  const filteredProducts = matkinh.filter(
    (product) =>
      (!category || product.category === category) &&
      (!searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} VND</p>
          </div>
        ))
      ) : (
        <p>Không tìm thấy sản phẩm</p>
      )}
    </div>
  );
};

export default ProductList;
