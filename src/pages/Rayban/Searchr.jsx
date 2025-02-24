import React, { useState } from "react";
import { Link } from "react-router-dom"; // Sử dụng Link để điều hướng
import "../../styles/Rayban/searchr.css";

// Import dữ liệu sản phẩm (giả lập)
import RaybanEyeGlasses from "../../data/Rayban/Eyeglasses/eyeglasses.json";
import RaybanSunglasses from "../../data/Rayban/Sunglasses/glasses.json";
import RaybanSaleProducts from "../../data/Rayban/Sale/sale.json";
import RaybanNewProducts from "../../data/Rayban/Newproduct/newproduct.json";

import Navbarr from "../../components/Navbarr";
import Logor from "../../components/Logoray";

const SearchPage = () => {
    // Gộp tất cả sản phẩm vào một mảng chung
    const allProducts = [
        ...RaybanEyeGlasses,
        ...RaybanSunglasses,
        ...RaybanSaleProducts,
        ...RaybanNewProducts
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
            <Logor />
            <p></p>
            <Navbarr />
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
                                to={`/Allray/${product.id}`}
                                className="product-link"
                            >
                                <div className="product-card">
                                    <img src={product.image1} alt={product.name} />
                                    <h3 >{product.name}</h3>
                                    <p>{product.price}</p>
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
