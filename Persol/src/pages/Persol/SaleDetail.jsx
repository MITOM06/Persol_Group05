import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import SaleData from "../../data/Persol/sale.json";
import "../../styles/Persol/SaleDetail.css";
import Logop from "../../components/Logop";
import Navbarp from "../../components/Navbarp";
// Hằng chứa ảnh chính (các ảnh "image2" chẳng hạn)
const saleImages = {
  "0PO3305S__1052S3__P21__shad__qt.avif": require("../../imgs/imgsale/0PO3305S__1052S3__P21__shad__qt.avif"),
  "0PO3314S__24_58__P21__shad__qt.avif": require("../../imgs/imgsale/0PO3314S__24_58__P21__shad__qt.avif"),
  "0PO3308S__95_31__P21__shad__qt.avif": require("../../imgs/imgsale/0PO3308S__95_31__P21__shad__qt.avif"),
  "0PO2496SZ__1139P1__P21__shad__qt.avif": require("../../imgs/imgsale/0PO2496SZ__1139P1__P21__shad__qt.avif"),

  "0PO2482V__1081__TOP__shad__qt.avif": require("../../imgs/imgsale/0PO2482V__1081__TOP__shad__qt.avif"),
  "0PO2488V__1114__P21__shad__qt.avif": require("../../imgs/imgsale/0PO2488V__1114__P21__shad__qt.avif"),
  "0PO2495V__1078__P21__shad__qt.avif": require("../../imgs/imgsale/0PO2495V__1078__P21__shad__qt.avif"),
  "0PO3292V__985__P21__shad__qt.avif": require("../../imgs/imgsale/0PO3292V__985__P21__shad__qt.avif"),


};

// Hằng chứa ảnh biến thể
const variantImages = {
  "variant2.avif": require("../../imgs/imgsale/0PO3305S__1103M2__P21__shad__qt.avif"),

  "variant5.avif": require("../../imgs/imgsale/0PO3314S__118753__P21__shad__qt.avif"),
  "variant6.avif": require("../../imgs/imgsale/0PO3314S__95_31__P21__shad__qt.avif"),
  "variant7.avif": require("../../imgs/imgsale/0PO3314S__96_S3__P21__shad__qt.avif"),

  "variant8.avif": require("../../imgs/imgsale/0PO3308S__117233__P21__shad__qt.avif"),
  "variant9.avif": require("../../imgs/imgsale/0PO3308S__24_31__P21__shad__qt.avif"),
  "variant10.avif": require("../../imgs/imgsale/0PO3308S__309_Q8__P21__shad__qt.avif"),

  "variant11.avif": require("../../imgs/imgsale/0PO2496SZ__114057__P21__shad__qt.avif"),
  "variant12.avif": require("../../imgs/imgsale/0PO2496SZ__115352__P21__shad__qt.avif"),
  "variant13.avif": require("../../imgs/imgsale/0PO2496SZ__115430__P21__shad__qt.avif"),

  "variant17.avif": require("../../imgs/imgsale/0PO2488V__1115__P21__shad__qt.avif"),

  "variant20.avif": require("../../imgs/imgsale/0PO2495V__1148__P21__shad__qt.avif"),

  "variant23.avif": require("../../imgs/imgsale/0PO3292V__96__P21__shad__qt.avif"),
  "variant24.avif": require("../../imgs/imgsale/0PO3292V__1188__P21__shad__qt.avif"),
  "variant25.avif": require("../../imgs/imgsale/0PO3292V__1186__P21__shad__qt.avif"),

};

const SaleDetail = () => {
  const { id } = useParams();
  const sliderRef = useRef(null);

  // Tìm sản phẩm theo id
  const product = SaleData.find(
    (item) => item.id.toString() === id && item.owner === 'persol'
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Tạo mảng chứa ảnh biến thể
  // Nếu trường variantImage1..4 tồn tại, ta push vào mảng
  const productVariantImages = [];
  if (product.variantImage1) productVariantImages.push(product.variantImage1);
  if (product.variantImage2) productVariantImages.push(product.variantImage2);


  if (product.variantImage5) productVariantImages.push(product.variantImage5);
  if (product.variantImage6) productVariantImages.push(product.variantImage6);
  if (product.variantImage7) productVariantImages.push(product.variantImage7);

  if (product.variantImage8) productVariantImages.push(product.variantImage8);
  if (product.variantImage9) productVariantImages.push(product.variantImage9);
  if (product.variantImage10) productVariantImages.push(product.variantImage10);

  if (product.variantImage11) productVariantImages.push(product.variantImage11);
  if (product.variantImage12) productVariantImages.push(product.variantImage12);
  if (product.variantImage13) productVariantImages.push(product.variantImage13);

  if (product.variantImage17) productVariantImages.push(product.variantImage17);


  if (product.variantImage20) productVariantImages.push(product.variantImage20);


  if (product.variantImage23) productVariantImages.push(product.variantImage23);
  if (product.variantImage24) productVariantImages.push(product.variantImage24);
  if (product.variantImage25) productVariantImages.push(product.variantImage25);

  // Hàm cuộn slider sang phải (circular slider)
  const scrollRight = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      // Nếu đã ở cuối (tức scrollLeft + clientWidth >= scrollWidth), quay lại đầu slider
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1200;
      }
    }
  };

  // (Tùy chọn) Hàm cuộn slider sang trái (nếu bạn muốn kiểu chuyển động vòng tròn ở cả hai bên)
  const scrollLeft = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      // Nếu đã ở đầu, chuyển về cuối slider
      if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth - container.clientWidth;
      } else {
        container.scrollLeft -= 1200;
      }
    }
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
            {/* Ảnh chính hiển thị (lấy từ trường image2 trong JSON) */}
            <img
              src={saleImages[product.image2]}
              alt={product.name}
              className="product-main-image"
            />
          </div>

          <div className="product-info-container">
            <h2>{product.name}</h2>
            <p className="pricesale">{product.price}</p>
            <p className="newPrice">{product.newPrice}</p>
            <p className="start">Rating: {product.start} / 5</p>
            <p className="sold">Sold: {product.sold}</p>

            <div className="product-details">
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

              {/* 2 dòng cuối: label ở trên, value ở dưới */}
              <div className="detail-row detail-row-fit">
                <span className="detail-label">Fit</span>
                <span className="detail-value">{product["Fit"]}</span>
              </div>
              <div className="detail-row detail-row-bridge">
                <span className="detail-label">Bridge choice & nosepad</span>
                <span className="detail-value">
                  {product["Bridge choice & nosepad"]}
                </span>
              </div>
            </div>

            <button className="buy-button">ADD TO CART</button>
          </div>
        </div>

        {/* Phần hiển thị các ảnh biến thể */}
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
      </div>
    </>
  );
};

export default SaleDetail;

