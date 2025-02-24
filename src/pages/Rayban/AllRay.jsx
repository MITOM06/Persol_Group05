import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import Logor from "../../components/Logoray";
import Navbarr from "../../components/Navbarr";
import "../../styles/Rayban/details.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";

// Import dữ liệu sản phẩm trực tiếp từ các file JSON của Rayban
import RaybanEyeGlasses from "../../data/Rayban/Eyeglasses/eyeglasses.json";
import RaybanSunglasses from "../../data/Rayban/Sunglasses/glasses.json";
import RaybanSaleProducts from "../../data/Rayban/Sale/sale.json";
import RaybanNewProducts from "../../data/Rayban/Newproduct/newproduct.json";

const RaybanProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [notification, setNotification] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Gộp dữ liệu từ tất cả các nguồn sản phẩm Rayban
  const allProducts = [
    ...RaybanEyeGlasses,
    ...RaybanSunglasses,
    ...RaybanSaleProducts,
    ...RaybanNewProducts,
  ];

  // Tìm sản phẩm có id trùng với giá trị từ URL (so sánh kiểu số)
  useEffect(() => {
    const foundProduct = allProducts.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Không tìm thấy sản phẩm.</div>;
  }

  // Cấu hình slider sử dụng react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    setNotification(`Your item ${count} has been added to the cart!`);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const toggleDetails = () => setShowDetails(!showDetails);

  // Hàm chuyển hình ảnh sang base64 để chèn vào file Word
  const getBase64Image = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Cho phép lấy ảnh từ nguồn khác nếu cần
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.onerror = (err) => {
        reject(err);
      };
      img.src = url;
    });
  };

  // Hàm tạo và tải file Word chứa thông tin sản phẩm
  const handleDownload = async (product) => {
    try {
      const imageBase64 = await getBase64Image(product.image);
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [new TextRun(`Name: ${product.name}`)],
              }),
              new Paragraph({
                children: [new TextRun(`Price: ${product.price}`)],
              }),
              new Paragraph({
                children: [
                  new ImageRun({
                    data: imageBase64,
                    transformation: { width: 300, height: 300 },
                  }),
                ],
              }),
              new Paragraph({
                children: [new TextRun("Details:")],
              }),
              new Paragraph({
                children: [
                  new TextRun("• Shiny light brown tortoiseshell acetate frame"),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun(
                    "• Shiny light brown tortoiseshell acetate temples with Interlocking G detail"
                  ),
                ],
              }),
              new Paragraph({
                children: [new TextRun("• Solid lilac lens")],
              }),
              new Paragraph({
                children: [new TextRun("• 100% UVA/UVB protection")],
              }),
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, `${product.name}.docx`);
    } catch (error) {
      console.error("Lỗi khi tạo file Word:", error);
    }
  };

  return (
    <>
      <Logor />
      <p></p>
      <Navbarr />
      <p></p>
      {/* Thanh điều hướng ngược */}
      <div className="back-page">
        <Link to="/RaybanHomePage" className="btn-back-page">
          Back to Home
        </Link>
        <div className="btn-back-page"> / </div>
        <Link to="/RaybanEyeGlasses" className="btn-back-page">
          EyeGlasses
        </Link>
        <div className="btn-back-page"> / </div>
        <span className="btn-back-page-1">{product.name}</span>
      </div>

      {/* Slider hiển thị các hình ảnh sản phẩm */}
      <Slider {...sliderSettings}>
        <div>
          <img src={product.image} alt="Slide 1" />
        </div>
        <div>
          <img src={product.image1} alt="Slide 2" />
        </div>
        <div>
          <img src={product.image2} alt="Slide 3" />
        </div>
        <div>
          <img src={product.image3} alt="Slide 4" />
        </div>
        <div>
          <img src={product.image4} alt="Slide 5" />
        </div>
      </Slider>

      {/* Thông tin sản phẩm */}
      <div className="rayban-product-container">
        <div className="rayban-product-info-text">
          <h1>{product.name}</h1>
          <h2 style={{ color: "red" }}>{product.price}</h2>
        </div>
        <div className="rayban-button-count">
          <div className="rayban-button-count-1">
            <button
              className="rayban-button-count-2"
              onClick={decreaseCount}
            >
              -
            </button>
            {count}
            <button
              className="rayban-button-count-2"
              onClick={increaseCount}
            >
              +
            </button>
          </div>
          <button
            className="rayban-add-to-cart-button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>

        {isVisible && (
          <div className="rayban-add-to-cart-notification">
            {notification}
          </div>
        )}

        {/* Nút và toggle hiển thị chi tiết sản phẩm */}
        <div className="rayban-btn-details">
          <div
            className="btn-details-container"
            onClick={toggleDetails}
          >
            <span className="btn-details-1">Details</span>
            <button className="btn-details-2">
              {showDetails ? "-" : "+"}
            </button>
          </div>
        </div>

        {showDetails && (
          <div className="rayban-dropdown-details">
            <h4>Name: {product.name}</h4>
            <h4>Model: {product.model}</h4>
            <ul>
              <li>Shiny light brown tortoiseshell acetate frame</li>
              <li>
                Shiny light brown tortoiseshell acetate temples with Interlocking G detail
              </li>
              <li>Solid lilac lens</li>
              <li>100% UVA/UVB protection</li>
            </ul>
            <button
              className="rayban-btn-download"
              onClick={() => handleDownload(product)}
            >
              Download
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RaybanProductDetail;
