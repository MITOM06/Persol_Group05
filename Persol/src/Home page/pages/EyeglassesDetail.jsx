import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import EyeglassesData from "../data/Eyeglasses.json";
import "../styles/EyeglassesDetail.css";
import Logop from "../components/Logop";
import Navbarp from "../components/Navbarp";
// Hằng chứa ảnh chính (các ảnh "image2" chẳng hạn)
const eyeglassesImages = {
  "0PO0091V__24__P21__shad__qt.avif": require("../imgs/imgegld/0PO0091V__24__P21__shad__qt.avif"),
  "0PO0054V__95__P21__shad__qt.avif": require("../imgs/imgegld/0PO0054V__95__P21__shad__qt.avif"),
"0PO3318V__1142__P21__shad__qt.avif": require("../imgs/imgegld/0PO3318V__1142__P21__shad__qt.avif"),
  "0PO0204V__95__P21__shad__qt.avif": require("../imgs/imgegld/0PO0204V__95__P21__shad__qt.avif"),

  "0PO3160V__1197__P21__shad__qt.avif": require("../imgs/imgegld/0PO3160V__1197__P21__shad__qt.avif"),
  "0PO3362V__95__P21__shad__qt.avif": require("../imgs/imgegld/0PO3362V__95__P21__shad__qt.avif"),
  "0PO3007VM__1196__P21__shad__qt.avif": require("../imgs/imgegld/0PO3007VM__1196__P21__shad__qt.avif"),
  "0PO3355V__24__P21__shad__qt.avif": require("../imgs/imgegld/0PO3355V__24__P21__shad__qt.avif"),


  "0PO0086V__95__P21__shad__qt.avif": require("../imgs/imgegld/0PO0086V__95__P21__shad__qt.avif"),
  "0PO3331V__24__P21__shad__qt.avif": require("../imgs/imgegld/0PO3331V__24__P21__shad__qt.avif"),
  "0PO3339V__1197__P21__shad__qt.avif": require("../imgs/imgegld/0PO3339V__1197__P21__shad__qt.avif"),
  "0PO3340V__95__P21__shad__qt.avif": require("../imgs/imgegld/0PO3340V__95__P21__shad__qt.avif"),

  "0PO5007VT__8012__P21__shad__qt.avif": require("../imgs/imgegld/0PO5007VT__8012__P21__shad__qt.avif"),
  "0PO5011VT__8016__P21__shad__qt.avif": require("../imgs/imgegld/0PO5011VT__8016__P21__shad__qt.avif"),
  "0PO3281V__95__P21__shad__qt.avi": require("../imgs/imgegld/0PO3281V__95__P21__shad__qt.avif"),
  "0PO3337V__1196__P21__shad__qt.avif": require("../imgs/imgegld/0PO3337V__1196__P21__shad__qt.avif"),
};

// Hằng chứa ảnh biến thể
const variantImages = {
  "variant2.avif": require("../imgs/imgegld/0PO0091V__1071__P21__shad__qt.avif"),
  "variant3.avif": require("../imgs/imgegld/0PO0091V__95__P21__shad__qt.avif"),
  "variant4.avif": require("../imgs/imgegld/0PO0091V__960__P21__shad__qt.avif"),

  "variant5.avif": require("../imgs/imgegld/0PO0054V__108__P21__shad__qt.avif"),
  "variant6.avif": require("../imgs/imgegld/0PO0054V__24__P21__shad__qt.avif"),
  "variant7.avif": require("../imgs/imgegld/0PO0054V__960__P21__shad__qt.avif"),

  "variant8.avif": require("../imgs/imgegld/0PO3318V__1202__P21__shad__qt.avif"),
  "variant9.avif": require("../imgs/imgegld/0PO3318V__204__P21__shad__qt.avif"),
  "variant10.avif": require("../imgs/imgegld/0PO3318V__24__P21__shad__qt.avif"),

  "variant11.avif": require("../imgs/imgegld/0PO0204V__24__P21__shad__qt.avif"),
  "variant12.avif": require("../imgs/imgegld/0PO0204V__960__P21__shad__qt.avif"),

  "variant14.avif": require("../imgs/imgegld/0PO3160V__0108_030A.avif"),
  "variant15.avif": require("../imgs/imgegld/0PO3160V__1201__P21__shad__qt.avif"),
  "variant16.avif": require("../imgs/imgegld/0PO3160V__1169__P21__shad__qt.avif"),

  "variant17.avif": require("../imgs/imgegld/0PO3362V__1103__P21__shad__qt.avif"),
  "variant18.avif": require("../imgs/imgegld/0PO3362V__96__P21__shad__qt.avif"),
  "variant19.avif": require("../imgs/imgegld/0PO3362V__24__P21__shad__qt.avif"),

  "variant20.avif": require("../imgs/imgegld/0PO3007VM__1197__P21__shad__qt.avif"),
  "variant21.avif": require("../imgs/imgegld/0PO3007VM__24__P21__shad__qt.avif"),
  "variant22.avif": require("../imgs/imgegld/0PO3007VM__95__P21__shad__qt.avif"),

  "variant23.avif": require("../imgs/imgegld/0PO3355V__204__P21__shad__qt.avif"),
  "variant24.avif": require("../imgs/imgegld/0PO3355V__95__P21__shad__qt.avif"),
  "variant25.avif": require("../imgs/imgegld/0PO3355V__1216__P21__shad__qt.avif"),

  "variant26.avif": require("../imgs/imgegld/0PO0086V__24__P21__shad__qt.avif"),

  "variant29.avif": require("../imgs/imgegld/0PO3331V__309__P21__shad__qt.avif"),
  "variant30.avif": require("../imgs/imgegld/0PO3331V__95__P21__shad__qt.avif"),
  "variant31.avif": require("../imgs/imgegld/0PO3331V__960__P21__shad__qt.avif"),

  "variant32.avif": require("../imgs/imgegld/0PO3339V__1196__P21__shad__qt.avif"),
  "variant33.avif": require("../imgs/imgegld/0PO3339V__1198__P21__shad__qt.avif"),
  "variant34.avif": require("../imgs/imgegld/0PO3339V__95__P21__shad__qt.avif"),

  "variant35.avif": require("../imgs/imgegld/0PO3340V__1071__P21__shad__qt.avif"),
  "variant36.avif": require("../imgs/imgegld/0PO3340V__96__P21__shad__qt.avif"),
  "variant37.avif": require("../imgs/imgegld/0PO3340V__24__P21__shad__qt.avif"),

  "variant38.avif": require("../imgs/imgegld/0PO5007VT__8007__P21__shad__qt.avif"),
  "variant39.avif": require("../imgs/imgegld/0PO5007VT__8010__P21__shad__qt.avif"),
  "variant40.avif": require("../imgs/imgegld/0PO5007VT__8011__P21__shad__qt.avif"),

  "variant41.avif": require("../imgs/imgegld/0PO5011VT__8013__P21__shad__qt.avif"),
  "variant42.avif": require("../imgs/imgegld/0PO5011VT__8014__P21__shad__qt.avif"),
  "variant43.avif": require("../imgs/imgegld/0PO5011VT__8015__P21__shad__qt.avif"),

  "variant47.avif": require("../imgs/imgegld/0PO3337V__1197__P21__shad__qt.avif"),
  "variant48.avif": require("../imgs/imgegld/0PO3337V__1213__P21__shad__qt.avif"),
  "variant49.avif": require("../imgs/imgegld/0PO3337V__95__P21__shad__qt.avif"),
};

const EyeglassesDetail = () => {
  const { id } = useParams();
  const sliderRef = useRef(null);

  // Tìm sản phẩm theo id
  const product = EyeglassesData.find(
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
  if (product.variantImage3) productVariantImages.push(product.variantImage3);
  if (product.variantImage4) productVariantImages.push(product.variantImage4);


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
  if (product.variantImage18) productVariantImages.push(product.variantImage18);
  if (product.variantImage19) productVariantImages.push(product.variantImage19);

  if (product.variantImage20) productVariantImages.push(product.variantImage20);
  if (product.variantImage21) productVariantImages.push(product.variantImage21);
  if (product.variantImage22) productVariantImages.push(product.variantImage22);

  if (product.variantImage23) productVariantImages.push(product.variantImage23);
  if (product.variantImage24) productVariantImages.push(product.variantImage24);
  if (product.variantImage25) productVariantImages.push(product.variantImage25);

  if (product.variantImage26) productVariantImages.push(product.variantImage26);
  if (product.variantImage27) productVariantImages.push(product.variantImage27);
  if (product.variantImage28) productVariantImages.push(product.variantImage28);

  if (product.variantImage29) productVariantImages.push(product.variantImage29);
  if (product.variantImage30) productVariantImages.push(product.variantImage30);
  if (product.variantImage31) productVariantImages.push(product.variantImage31);

  if (product.variantImage32) productVariantImages.push(product.variantImage32);
  if (product.variantImage33) productVariantImages.push(product.variantImage33);
  if (product.variantImage34) productVariantImages.push(product.variantImage34);

  if (product.variantImage35) productVariantImages.push(product.variantImage35);
  if (product.variantImage36) productVariantImages.push(product.variantImage36);
  if (product.variantImage37) productVariantImages.push(product.variantImage37);

  if (product.variantImage38) productVariantImages.push(product.variantImage38);
  if (product.variantImage39) productVariantImages.push(product.variantImage39);
  if (product.variantImage40) productVariantImages.push(product.variantImage40);

  if (product.variantImage41) productVariantImages.push(product.variantImage41);
  if (product.variantImage42) productVariantImages.push(product.variantImage42);
  if (product.variantImage43) productVariantImages.push(product.variantImage43);

  if (product.variantImage44) productVariantImages.push(product.variantImage44);
  if (product.variantImage45) productVariantImages.push(product.variantImage45);
  if (product.variantImage46) productVariantImages.push(product.variantImage46);

  if (product.variantImage47) productVariantImages.push(product.variantImage47);
  if (product.variantImage48) productVariantImages.push(product.variantImage48);
  if (product.variantImage49) productVariantImages.push(product.variantImage49);

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

export default EyeglassesDetail;

