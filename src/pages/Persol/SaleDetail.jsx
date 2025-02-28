import React, { useRef, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import SaleData from "../../data/Persol/sale.json";
import "../../styles/Persol/SaleDetail.css";
import Logop from "../../components/Logop";
import Navbarp from "../../components/Navbarp";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";
import { saveAs } from "file-saver";
// Hằng chứa ảnh chính (sử dụng image2 để hiển thị trang detail)
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
// Helper function để lấy URL ảnh thực sự (trường hợp require trả về đối tượng có thuộc tính default)
const getImageUrl = (img) => {
  if (typeof img === "string") return img;
  if (img && img.default) return img.default;
  return img;
};


const SaleDetail = () => {
  const { id } = useParams();
  const sliderRef = useRef(null);

  // Cuộn trang về đầu khi id thay đổi
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Tìm sản phẩm theo id (với owner là persol)
  const product = SaleData.find(
    (item) => item.id.toString() === id && item.owner === "persol"
  );
  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Tạo mảng chứa ảnh biến thể nếu có
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


  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      cart[index].quantity += 1;
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.newPrice ? product.newPrice : product.price,
        image: product.image1, // Sử dụng image1 cho giỏ hàng
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
       const imageUrl = getImageUrl(saleImages[product.image2]);
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
               new Paragraph(`newPrice: ${product.newPrice || "N/A"}`),
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
            {/* Ảnh chính hiển thị dựa trên product.image2 */}
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
                <span className="detail-value">
                  {product["Bridge choice & nosepad"]}
                </span>
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
          <Link to="/compare"><FaExchangeAlt className="iconc" /></Link>
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
