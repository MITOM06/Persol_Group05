import React, { useRef, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EyeglassesData from "../../data/Persol/Eyeglasses.json";
import "../../styles/Persol/EyeglassesDetail.css";
import Logop from "../../components/Logop";
import Navbarp from "../../components/Navbarp";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Hằng chứa ảnh chính (sử dụng image2 để hiển thị trang detail)
const eyeglassesImages = {
  "0PO0091V__24__P21__shad__qt.avif": require("../../imgs/imgegld/0PO0091V__24__P21__shad__qt.avif"),
  "0PO0054V__95__P21__shad__qt.avif": require("../../imgs/imgegld/0PO0054V__95__P21__shad__qt.avif"),
  "0PO3318V__1142__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3318V__1142__P21__shad__qt.avif"),
  "0PO0204V__95__P21__shad__qt.avif": require("../../imgs/imgegld/0PO0204V__95__P21__shad__qt.avif"),

  "0PO3160V__1197__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3160V__1197__P21__shad__qt.avif"),
  "0PO3362V__95__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3362V__95__P21__shad__qt.avif"),
  "0PO3007VM__1196__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3007VM__1196__P21__shad__qt.avif"),
  "0PO3355V__24__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3355V__24__P21__shad__qt.avif"),

  "0PO0086V__95__P21__shad__qt.avif": require("../../imgs/imgegld/0PO0086V__95__P21__shad__qt.avif"),
  "0PO3331V__24__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3331V__24__P21__shad__qt.avif"),
  "0PO3339V__1197__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3339V__1197__P21__shad__qt.avif"),
  "0PO3340V__95__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3340V__95__P21__shad__qt.avif"),

  "0PO5007VT__8012__P21__shad__qt.avif": require("../../imgs/imgegld/0PO5007VT__8012__P21__shad__qt.avif"),
  "0PO5011VT__8016__P21__shad__qt.avif": require("../../imgs/imgegld/0PO5011VT__8016__P21__shad__qt.avif"),
  "0PO3281V__95__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3281V__95__P21__shad__qt.avif"),
  "0PO3337V__1196__P21__shad__qt.avif": require("../../imgs/imgegld/0PO3337V__1196__P21__shad__qt.avif"),
};

// Hằng chứa ảnh biến thể
const variantImages = {
  "variant2.avif": require("../../imgs/imgegld/0PO0091V__1071__P21__shad__qt.avif"),
  "variant3.avif": require("../../imgs/imgegld/0PO0091V__95__P21__shad__qt.avif"),
  "variant4.avif": require("../../imgs/imgegld/0PO0091V__960__P21__shad__qt.avif"),

  "variant5.avif": require("../../imgs/imgegld/0PO0054V__108__P21__shad__qt.avif"),
  "variant6.avif": require("../../imgs/imgegld/0PO0054V__24__P21__shad__qt.avif"),
  "variant7.avif": require("../../imgs/imgegld/0PO0054V__960__P21__shad__qt.avif"),

  "variant8.avif": require("../../imgs/imgegld/0PO3318V__1202__P21__shad__qt.avif"),
  "variant9.avif": require("../../imgs/imgegld/0PO3318V__204__P21__shad__qt.avif"),
  "variant10.avif": require("../../imgs/imgegld/0PO3318V__24__P21__shad__qt.avif"),

  "variant11.avif": require("../../imgs/imgegld/0PO0204V__24__P21__shad__qt.avif"),
  "variant12.avif": require("../../imgs/imgegld/0PO0204V__960__P21__shad__qt.avif"),


  "variant14.avif": require("../../imgs/imgegld/0PO3160V__1201__P21__shad__qt.avif"),
  "variant15.avif": require("../../imgs/imgegld/0PO3160V__1169__P21__shad__qt.avif"),
  "variant16.avif": require("../../imgs/imgegld/0PO3160V__0108_030A.avif"),

  "variant17.avif": require("../../imgs/imgegld/0PO3362V__96__P21__shad__qt.avif"),
  "variant18.avif": require("../../imgs/imgegld/0PO3362V__24__P21__shad__qt.avif"),
  "variant19.avif": require("../../imgs/imgegld/0PO3362V__1103__P21__shad__qt.avif"),

  "variant20.avif": require("../../imgs/imgegld/0PO3007VM__24__P21__shad__qt.avif"),
  "variant21.avif": require("../../imgs/imgegld/0PO3007VM__95__P21__shad__qt.avif"),
  "variant22.avif": require("../../imgs/imgegld/0PO3007VM__1197__P21__shad__qt.avif"),

  "variant23.avif": require("../../imgs/imgegld/0PO3355V__95__P21__shad__qt.avif"),
  "variant24.avif": require("../../imgs/imgegld/0PO3355V__1216__P21__shad__qt.avif"),
  "variant25.avif": require("../../imgs/imgegld/0PO3355V__204__P21__shad__qt.avif"),

  "variant26.avif": require("../../imgs/imgegld/0PO0086V__24__P21__shad__qt.avif"),

  "variant29.avif": require("../../imgs/imgegld/0PO3331V__309__P21__shad__qt.avif"),
  "variant30.avif": require("../../imgs/imgegld/0PO3331V__95__P21__shad__qt.avif"),
  "variant31.avif": require("../../imgs/imgegld/0PO3331V__960__P21__shad__qt.avif"),
  
  "variant32.avif": require("../../imgs/imgegld/0PO3339V__1196__P21__shad__qt.avif"),
  "variant33.avif": require("../../imgs/imgegld/0PO3339V__1198__P21__shad__qt.avif"),
  "variant34.avif": require("../../imgs/imgegld/0PO3339V__95__P21__shad__qt.avif"),

  "variant35.avif": require("../../imgs/imgegld/0PO5011VT__8015__P21__shad__qt.avif"),
  "variant36.avif": require("../../imgs/imgegld/0PO5011VT__8014__P21__shad__qt.avif"),
  "variant37.avif": require("../../imgs/imgegld/0PO5011VT__8013__P21__shad__qt.avif"),

  "variant38.avif": require("../../imgs/imgegld/0PO5007VT__8007__P21__shad__qt.avif"),
  "variant39.avif": require("../../imgs/imgegld/0PO5007VT__8010__P21__shad__qt.avif"),
  "variant40.avif": require("../../imgs/imgegld/0PO5007VT__8011__P21__shad__qt.avif"),

  "variant47.avif": require("../../imgs/imgegld/0PO3337V__1197__P21__shad__qt.avif"),
  "variant48.avif": require("../../imgs/imgegld/0PO3337V__1213__P21__shad__qt.avif"),
  "variant49.avif": require("../../imgs/imgegld/0PO3337V__95__P21__shad__qt.avif"),
};

const EyeglassesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  // Khi id thay đổi thì cuộn trang về đầu
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Tìm sản phẩm theo id
  const product = EyeglassesData.find(
    (item) => item.id.toString() === id && item.owner === "persol"
  );
  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Tạo mảng chứa ảnh biến thể (nếu trường variantImage2..4 tồn tại)
  const productVariantImages = [];
  if (product.variantImage2) productVariantImages.push(product.variantImage2);
  if (product.variantImage3) productVariantImages.push(product.variantImage3);
  if (product.variantImage4) productVariantImages.push(product.variantImage4);

  // Hàm cuộn slider sang phải (circular slider)
  const scrollRight = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1200;
      }
    }
  };

  // Hàm cuộn slider sang trái
  const scrollLeft = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth - container.clientWidth;
      } else {
        container.scrollLeft -= 1200;
      }
    }
  };

  // Xử lý ADD TO CART: lưu sản phẩm vào localStorage với thuộc tính ảnh là image1
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      cart[index].quantity += 1;
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image1, // Sử dụng property "image" để thống nhất cho giỏ hàng
        quantity: 1,
      };
      cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product has been added to cart!");
  };

  return (
    <>
      <Logop />
      <p></p>
      <Navbarp />
      <p></p>
      <div className="product-detail-page">
        <div className="product-main">
          <div className="product-image-container">
            <img
              src={eyeglassesImages[product.image2]}
              alt={product.name}
              className="product-main-image"
            />
          </div>

          <div className="product-info-container">
            <h2>{product.name}</h2>
            <p className="price">{product.price}</p>
            <p className="start">Rating: {product.start} / 5</p>
            <p className="sold">Sold: {product.sold}</p>

            <div className="product-detailsp">
              <div className="detail-row">
                <span className="detail-label">Model code</span>
                <span className="detail-value">{product["Model code"]}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Front color</span>
                <span className="detail-value">{product["Front color"]}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Lens color</span>
                <span className="detail-value">{product["Lens color"]}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">LENS MATERIAL</span>
                <span className="detail-value">{product["LENS MATERIAL"]}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Frame Material</span>
                <span className="detail-value">{product["Frame Material"]}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Measurements</span>
                <span className="detail-value">{product["Measurements"]}</span>
              </div>
              <div className="detail-row detail-row-fit">
                <span className="detail-label">Fit</span>
                <span className="detail-value">{product["Fit"]}</span>
              </div>
              <div className="detail-row detail-row-bridge">
                <span className="detail-label">Bridge choice & nosepad</span>
                <span className="detail-value">{product["Bridge choice & nosepad"]}</span>
              </div>
            </div>

            <button className="buy-button" onClick={handleAddToCart}>
              ADD TO CART
            </button>

            <Link to="/compare"><FaExchangeAlt className="iconc" /></Link>
          </div>
        </div>

        {/* Hiển thị các ảnh biến thể */}
        <div className="product-variants">
          <h3>Other Color Variants</h3>
          <div className="slider-container-variants">
            <button className="slider-arrow left" onClick={scrollLeft}>
              ◀
            </button>
            <div className="variants-slider" ref={sliderRef}>
              {productVariantImages.length > 0 ? (
                productVariantImages.map((imgKey, index) => (
                  <img
                    key={index}
                    src={variantImages[imgKey]}
                    alt={`Variant ${index + 1}`}
                    className="variant-image"
                  />
                ))
              ) : (
                <p>No variant images available</p>
              )}
            </div>
            <button className="slider-arrow right" onClick={scrollRight}>
              ▶
            </button>
          </div>
        </div>

        {/* Hiển thị các sản phẩm kính khác */}
        <div className="other-products">
          <h3>Other Eyeglasses You May Like</h3>
          <div className="other-products-list">
            {EyeglassesData.filter((item) => item.id.toString() !== id)
              .slice(0, 10)
              .map((otherProduct) => (
                <div
                  key={otherProduct.id}
                  className="other-product-item"
                  onClick={() => navigate(`/eyeglasses/${otherProduct.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={eyeglassesImages[otherProduct.image2]}
                    alt={otherProduct.name}
                    className="other-product-image"
                  />
                  <p className="other-product-name">{otherProduct.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EyeglassesDetail;
