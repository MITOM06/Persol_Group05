import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Persol/Searchp.css";
import Logop from "../../components/Logop";
import Navbarp from "../../components/Navbarp";

// Import JSON dữ liệu cho 4 loại kính
import EyeglassesData from "../../data/Persol/Eyeglasses.json";
import SunglassesData from "../../data/Persol/Sunglasses.json";
import saleData from "../../data/Persol/sale.json";
import homeData from "../../data/Persol/home.json";

// Định nghĩa ánh xạ hình ảnh cho các loại sản phẩm
const sunglassesImages = {
    "0PO0202S__24_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0202S__24_31__P21__shad__fr.avif"),
    "0PO3272S__95_48__STD__shad__fr.avif": require("../../imgs/imgsgl/0PO3272S__95_48__STD__shad__fr.avif"),
    "0PO3286S__24_57__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3286S__24_57__P21__shad__fr.avif"),
    "0PO0649__24_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0649__24_31__P21__shad__fr.avif"),
    "0PO3310S__B95_B1__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3310S__B95_B1__P21__shad__fr.avif"),
    "0PO3357S__95_58__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3357S__95_58__P21__shad__fr.avif"),
    "0PO3328S__1213S3__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3328S__1213S3__P21__shad__fr.avif"),
    "0PO9649S__24_58__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO9649S__24_58__P21__shad__fr.avif"),
    "0PO1018S__513_33__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO1018S__513_33__P21__shad__fr.avif"),
    "0PO1020S__515_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO1020S__515_31__P21__shad__fr.avif"),
    "0PO0052S__95_32__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0052S__95_32__P21__shad__fr.avif"),
    "0PO0203S__95_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0203S__95_31__P21__shad__fr.avif"),
    "0PO1019S__515_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO1019S__515_31__P21__shad__fr.avif"),
    "0PO3366S__96_GJ__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3366S__96_GJ__P21__shad__fr.avif"),
    "0PO3336S__1213S3__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3336S__1213S3__P21__shad__fr.avif"),
    "0PO3327S__96_S3__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3327S__96_S3__P21__shad__fr.avif"),
};

const homeImages = {
    "0PO0202S__24_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0202S__24_31__P21__shad__fr.avif"),
    "0PO3327S__96_S3__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3327S__96_S3__P21__shad__fr.avif"),
    "0PO1019S__515_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO1019S__515_31__P21__shad__fr.avif"),
    "0PO3310S__B95_B1__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3310S__B95_B1__P21__shad__fr.avif"),
    "0PO0204V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0204V__95__P21__shad__fr.avif"),
    "0PO5011VT__8016__P21__shad__fr.avif": require("../../imgs/imgegl/0PO5011VT__8016__P21__shad__fr.avif"),
    "0PO5007VT__8012__P21__shad__fr.avif": require("../../imgs/imgegl/0PO5007VT__8012__P21__shad__fr.avif"),
    "0PO0054V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0054V__95__P21__shad__fr.avif"),
    "0PO0009__95_53__P21__shad__fr.avif": require("../../imgs/imgh/0PO0009__95_53__P21__shad__fr.avif"),
    "0PO0005__24_4E__P21__shad__fr.avif": require("../../imgs/imgh/0PO0005__24_4E__P21__shad__fr.avif"),
    "0PO3363S__105648__P21__shad__fr.avif": require("../../imgs/imgh/0PO3363S__105648__P21__shad__fr.avif"),
    "0PO0064S__95_31__P21__shad__fr.avif": require("../../imgs/imgh/0PO0064S__95_31__P21__shad__fr.avif"),
    "0PO1021V__1131__P21__shad__fr.avif": require("../../imgs/imgh/0PO1021V__1131__P21__shad__fr.avif"),
    "0PO3344V__1205__P21__shad__fr.avif": require("../../imgs/imgh/0PO3344V__1205__P21__shad__fr.avif"),
    "0PO3354V__95__P21__shad__fr.avif": require("../../imgs/imgh/0PO3354V__95__P21__shad__fr.avif"),
    "0PO3353V__95__P21__shad__fr.avif": require("../../imgs/imgh/0PO3353V__95__P21__shad__fr.avif"),
};

const saleImages = {
    "0PO3305S__1052S3__P21__shad__fr.avif": require("../../imgs/imgsale/0PO3305S__1052S3__P21__shad__fr.avif"),
    "0PO3314S__24_58__P21__shad__fr.avif": require("../../imgs/imgsale/0PO3314S__24_58__P21__shad__fr.avif"),
    "0PO3308S__95_31__P21__shad__fr.avif": require("../../imgs/imgsale/0PO3308S__95_31__P21__shad__fr.avif"),
    "0PO2496SZ__1139P1__P21__shad__fr.avif": require("../../imgs/imgsale/0PO2496SZ__1139P1__P21__shad__fr.avif"),
    "0PO2482V__1081__TOP__shad__fr.avif": require("../../imgs/imgsale/0PO2482V__1081__TOP__shad__fr.avif"),
    "0PO2488V__1114__P21__shad__fr.avif": require("../../imgs/imgsale/0PO2488V__1114__P21__shad__fr.avif"),
    "0PO2495V__1078__P21__shad__fr.avif": require("../../imgs/imgsale/0PO2495V__1078__P21__shad__fr.avif"),
    "0PO3292V__985__P21__shad__fr.avif": require("../../imgs/imgsale/0PO3292V__985__P21__shad__fr.avif"),
};

const eyeglassesImages = {
    "0PO0091V__24__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0091V__24__P21__shad__fr.avif"),
    "0PO0054V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0054V__95__P21__shad__fr.avif"),
    "0PO3318V__1142__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3318V__1142__P21__shad__fr.avif"),
    "0PO0204V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0204V__95__P21__shad__fr.avif"),
    "0PO3160V__1197__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3160V__1197__P21__shad__fr.avif"),
    "0PO3362V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3362V__95__P21__shad__fr.avif"),
    "0PO3007VM__1196__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3007VM__1196__P21__shad__fr.avif"),
    "0PO3355V__24__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3355V__24__P21__shad__fr.avif"),
    "0PO0086V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0086V__95__P21__shad__fr.avif"),
    "0PO3331V__24__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3331V__24__P21__shad__fr.avif"),
    "0PO3339V__1197__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3339V__1197__P21__shad__fr.avif"),
    "0PO3340V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3340V__95__P21__shad__fr.avif"),
    "0PO5007VT__8012__P21__shad__fr.avif": require("../../imgs/imgegl/0PO5007VT__8012__P21__shad__fr.avif"),
    "0PO5011VT__8016__P21__shad__fr.avif": require("../../imgs/imgegl/0PO5011VT__8016__P21__shad__fr.avif"),
    "0PO3281V__95__P21__shad__fr.avi": require("../../imgs/imgegl/0PO3281V__95__P21__shad__fr.avif"),
    "0PO3337V__1196__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3337V__1196__P21__shad__fr.avif"),
};

// Hàm lấy đường dẫn hình ảnh dựa trên loại sản phẩm
const getProductImage = (product) => {
    let src;
    // Giả sử mỗi sản phẩm có thuộc tính "image1" chứa tên file hình ảnh
    if (product.type === "sunglasses") {
        src = sunglassesImages[product.image1];
    } else if (product.type === "eyeglasses") {
        src = eyeglassesImages[product.image1];
    } else if (product.type === "sale") {
        src = saleImages[product.image1];
    } else if (product.type === "HomeDetail") {
        src = homeImages[product.image1];
    }
    // Nếu require trả về một đối tượng với thuộc tính default thì lấy default
    return src?.default || src;
};

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Gộp tất cả dữ liệu và thêm trường "type" để phân biệt
    const allProducts = [
        ...EyeglassesData.map((product) => ({ ...product, type: "eyeglasses" })),
        ...SunglassesData.map((product) => ({ ...product, type: "sunglasses" })),
        ...saleData.map((product) => ({ ...product, type: "sale" })),
        ...homeData.map((product) => ({ ...product, type: "HomeDetail" })),
    ];

    // Lọc sản phẩm theo tên (không phân biệt chữ hoa thường)
    const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Logop />
            <p></p>
            <Navbarp />
            <p></p>
            <div className="search-page">
                <h1>What are you looking for?</h1>
                <input
                    type="text"
                    placeholder="Please enter the product name you desire..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <p></p>
                <div className="search-resultsp">
                    {filteredProducts.length === 0 ? (
                        <p className="no-results">Sorry, the product you are looking for is not available.</p>
                    ) : (
                        filteredProducts.map((product) => (
                            <div key={`${product.type}-${product.id}`} className="product-cardp">
                                <Link to={`/${product.type}/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
                                    <img
                                        src={getProductImage(product)}
                                        alt={product.name}
                                        className="product-imagep"
                                    />
                                    <h3>{product.name}</h3>
                                    <div className="price-info">
                                        {product.type === "sale" && product.newPrice ? (
                                            <>
                                                <span className="pricesale">{product.price}</span>
                                                <span className="new-price">{product.newPrice}</span>
                                            </>
                                        ) : (
                                            <span className="new-price">{product.price}</span>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchPage;
