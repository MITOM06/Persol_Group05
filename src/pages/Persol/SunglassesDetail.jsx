import React, { useRef, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SunglassesData from "../../data/Persol/Sunglasses.json";
import "../../styles/Persol/SunglassesDetail.css";
import Logop from "../../components/Logop";
import Navbarp from "../../components/Navbarp";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import các module cần thiết cho chức năng download DOCX
import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";
import { saveAs } from "file-saver";

// Hằng chứa ảnh chính (sử dụng image2 để hiển thị trang detail)
const sunglassesImages = {
  "0PO0202S__24_31__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO0202S__24_31__P21__shad__qt.avif"),
  "0PO3272S__95_48__STD__shad__qt.avif": require("../../imgs/imgsgld/0PO3272S__95_48__STD__shad__qt.avif"),
  "0PO3286S__24_57__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO3286S__24_57__P21__shad__qt.avif"),
  "0PO0649__24_31__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO0649__24_31__P21__shad__qt.avif"),

  "0PO3310S__B95_B1__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO3310S__B95_B1__P21__shad__qt.avif"),
  "0PO3357S__95_58__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO3357S__95_58__P21__shad__qt.avif"),
  "0PO3328S__1213S3__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO3328S__1213S3__P21__shad__qt.avif"),
  "0PO9649S__24_58__P21__shad__qt.webp": require("../../imgs/imgsgld/0PO9649S__24_58__P21__shad__qt.webp"),

  "0PO1018S__513_33__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO1018S__513_33__P21__shad__qt.avif"),
  "0PO1020S__515_31__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO1020S__515_31__P21__shad__qt.avif"),
  "0PO0052S__95_32__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO0052S__95_32__P21__shad__qt.avif"),
  "0PO0203S__95_31__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO0203S__95_31__P21__shad__qt.avif"),

  "0PO1019S__515_31__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO1019S__515_31__P21__shad__qt.avif"),
  "0PO3366S__96_GJ__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO3366S__96_GJ__P21__shad__qt.avif"),
  "0PO3336S__1213S3__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO3336S__1213S3__P21__shad__qt.avif"),
  "0PO3327S__96_S3__P21__shad__qt.avif": require("../../imgs/imgsgld/0PO3327S__96_S3__P21__shad__qt.avif"),
};

// Hằng chứa ảnh biến thể (không thay đổi)
const variantImages = {
  "variant2.avif": require("../../imgs/imgsgld/0PO0202S__24_48__P21__shad__qt.avif"),
  "variant3.avif": require("../../imgs/imgsgld/0PO0202S__95_3R__P21__shad__qt.avif"),
  "variant4.avif": require("../../imgs/imgsgld/0PO0202S__960_R5__P21__shad__qt.avif"),

  "variant5.avif": require("../../imgs/imgsgld/0PO3272S__204_4E__P21__shad__qt.avif"),
  "variant6.avif": require("../../imgs/imgsgld/0PO3272S__24_48__P21__shad__qt.avif"),
  "variant7.avif": require("../../imgs/imgsgld/0PO3272S__309_4E__P21__shad__qt.avif"),

  "variant8.avif": require("../../imgs/imgsgld/0PO3286S__11564E__P21__shad__qt.avif"),
  "variant9.avif": require("../../imgs/imgsgld/0PO3286S__116931__P21__shad__qt.avif"),
  "variant10.avif": require("../../imgs/imgsgld/0PO3286S__95_31__P21__shad__qt.avif"),

  "variant11.avif": require("../../imgs/imgsgld/0PO0649__24_57__P21__shad__qt.avif"),
  "variant12.avif": require("../../imgs/imgsgld/0PO0649__95_31__P21__shad__qt.avif"),
  "variant13.avif": require("../../imgs/imgsgld/0PO0649__95_S3__P21__shad__qt.avif"),

  "variant17.avif": require("../../imgs/imgsgld/0PO3357S__204_R5__P21__shad__qt.avif"),
  "variant18.avif": require("../../imgs/imgsgld/0PO3357S__24_31__P21__shad__qt.avif"),
  "variant19.avif": require("../../imgs/imgsgld/0PO3357S__24_GG__P21__shad__qt.avif"),

  "variant20.avif": require("../../imgs/imgsgld/0PO3328S__204_4E__P21__shad__qt.avif"),
  "variant21.avif": require("../../imgs/imgsgld/0PO3328S__24_31__P21__shad__qt.avif"),
  "variant22.avif": require("../../imgs/imgsgld/0PO3328S__95_S3__P21__shad__qt.avif"),

  "variant23.avif": require("../../imgs/imgsgld/0PO9649S__110348__P21__shad__qt.avif"),
  "variant24.avif": require("../../imgs/imgsgld/0PO9649S__121833__P21__shad__qt.avif"),
  "variant25.avif": require("../../imgs/imgsgld/0PO9649S__95_Q8__P21__shad__qt.avif"),

  "variant26.avif": require("../../imgs/imgsgld/0PO1018S__107831__P21__shad__qt.avif"),
  "variant27.avif": require("../../imgs/imgsgld/0PO1018S__515_58__P21__shad__qt.avif"),
  "variant28.avif": require("../../imgs/imgsgld/0PO1018S__518_B1__P21__shad__qt.avif"),

  "variant29.avif": require("../../imgs/imgsgld/0PO1020S__112953__P21__shad__qt.avif"),
  "variant30.avif": require("../../imgs/imgsgld/0PO1020S__113256__P21__shad__qt.avif"),
  "variant31.avif": require("../../imgs/imgsgld/0PO1020S__518_4E__P21__shad__qt.avif"),

  "variant32.avif": require("../../imgs/imgsgld/0PO0052S__107157__P21__shad__qt.avif"),
  "variant33.avif": require("../../imgs/imgsgld/0PO0052S__24_51__P21__shad__qt.avif"),
  "variant34.avif": require("../../imgs/imgsgld/0PO0052S__960_3A__P21__shad__qt.avif"),

  "variant35.avif": require("../../imgs/imgsgld/0PO0203S__24_31__P21__shad__qt.avif"),
  "variant36.avif": require("../../imgs/imgsgld/0PO0203S__24_48__P21__shad__qt.avif"),
  "variant37.avif": require("../../imgs/imgsgld/0PO0203S__960_R5__P21__shad__qt.avif"),

  "variant38.avif": require("../../imgs/imgsgld/0PO1019S__112953__P21__shad__qt.avif"),
  "variant39.avif": require("../../imgs/imgsgld/0PO1019S__113256__P21__shad__qt.avif"),
  "variant40.avif": require("../../imgs/imgsgld/0PO1019S__518_4E__P21__shad__qt.avif"),

  "variant41.avif": require("../../imgs/imgsgld/0PO3366S__105648__P21__shad__qt.avif"),
  "variant42.avif": require("../../imgs/imgsgld/0PO3366S__204_S3__P21__shad__qt.avif"),
  "variant43.avif": require("../../imgs/imgsgld/0PO3366S__95_31__P21__shad__qt.avif"),

  "variant44.avif": require("../../imgs/imgsgld/0PO3336S__110348__P21__shad__qt.avif"),
  "variant45.avif": require("../../imgs/imgsgld/0PO3336S__204_4E__P21__shad__qt.avif"),
  "variant46.avif": require("../../imgs/imgsgld/0PO3336S__95_S3__P21__shad__qt.avif"),

  "variant47.avif": require("../../imgs/imgsgld/0PO3327S__107148__P21__shad__qt.avif"),
  "variant48.avif": require("../../imgs/imgsgld/0PO3327S__24_51__P21__shad__qt.avif"),
  "variant49.avif": require("../../imgs/imgsgld/0PO3327S__95_31__P21__shad__qt.avif"),
  // ... các variant khác nếu có
};

// Helper function để lấy URL ảnh thực sự (trường hợp require trả về đối tượng có thuộc tính default)
const getImageUrl = (img) => {
  if (typeof img === "string") return img;
  if (img && img.default) return img.default;
  return img;
};

const SunglassesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const product = SunglassesData.find(
    (item) => item.id.toString() === id && item.owner === "persol"
  );
  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Mảng chứa ảnh biến thể (giữ nguyên)
  const productVariantImages = [];
  if (product.variantImage2) productVariantImages.push(product.variantImage2);
  if (product.variantImage3) productVariantImages.push(product.variantImage3);
  if (product.variantImage4) productVariantImages.push(product.variantImage4);

  // Hàm cuộn slider cho ảnh biến thể
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
        image1: product.image1,
        quantity: 1,
      };
      cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product has been added to cart!");
  };

  // Hàm download file DOCX chứa thông tin sản phẩm
  const downloadProductDoc = async () => {
    try {
      // Lấy URL của ảnh image2 bằng helper getImageUrl
      const imageUrl = getImageUrl(sunglassesImages[product.image2]);
      console.log("Image URL:", imageUrl);

      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`Không thể tải ảnh từ URL: ${imageUrl}`);
      }
      const blob = await response.blob();
      const buffer = await blob.arrayBuffer();

      // Tạo ImageRun với ảnh đã chuyển buffer
      const imageRun = new ImageRun({
        data: buffer,
        transformation: { width: 200, height: 200 },
      });

      // Tạo tài liệu DOCX với thông tin sản phẩm và ảnh
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Product Information",
                    bold: true,
                    size: 28,
                  }),
                ],
              }),
              new Paragraph({ children: [imageRun] }),
              new Paragraph(`Name: ${product.name || "N/A"}`),
              new Paragraph(`Price: ${product.price || "N/A"}`),
              new Paragraph(`Rating: ${product.start || "N/A"} / 5`),
              new Paragraph(`Sold: ${product.sold || "N/A"}`),
              new Paragraph(`Model code: ${product["Model code"] || "N/A"}`),
              new Paragraph(`Front color: ${product["Front color"] || "N/A"}`),
              new Paragraph(`Lens color: ${product["Lens color"] || "N/A"}`),
              new Paragraph(`LENS MATERIAL: ${product["LENS MATERIAL"] || "N/A"}`),
              new Paragraph(`Frame Material: ${product["Frame Material"] || "N/A"}`),
              new Paragraph(`Measurements: ${product["Measurements"] || "N/A"}`),
              new Paragraph(`Fit: ${product["Fit"] || "N/A"}`),
              new Paragraph(`Bridge choice & nosepad: ${product["Bridge choice & nosepad"] || "N/A"}`),
            ],
          },
        ],
      });

      // Chuyển tài liệu thành Blob và lưu file DOCX
      const docBlob = await Packer.toBlob(doc);
      saveAs(docBlob, "product-info.docx");
      alert("File downloaded successfully!");
    } catch (error) {
      console.error("Error generating document:", error);
      alert("Error downloading file");
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
            <img
              src={sunglassesImages[product.image2]}
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
            <p></p>
            <button
              className="download-doc-button"
              onClick={downloadProductDoc}
              style={{ marginTop: "10px", padding: "20px 20px", cursor: "pointer" }}
            >
              DOWNLOAD
            </button>
            <Link to="/compare">
              <FaExchangeAlt className="iconc" />
            </Link>
          </div>
        </div>
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
        <div className="other-products">
          <h3>Other Sunglasses You May Like</h3>
          <div className="other-products-list">
            {SunglassesData.filter((item) => item.id.toString() !== id)
              .slice(0, 10)
              .map((otherProduct) => (
                <div
                  key={otherProduct.id}
                  className="other-product-item"
                  onClick={() => navigate(`/sunglasses/${otherProduct.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={sunglassesImages[otherProduct.image2]}
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

export default SunglassesDetail;
