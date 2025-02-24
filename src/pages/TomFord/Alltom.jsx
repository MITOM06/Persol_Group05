import React, { useState, useEffect } from "react"; 
import { useParams, Link } from "react-router-dom";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logot from "../../components/Logot";
import Navbart from "../../components/Navbart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../styles/Tomford/Alltom.css"

// Import dữ liệu từ 4 file JSON
import newproducts from "../../data/Tomford/newproducts.json";
import saleproduct from "../../data/Tomford/saleproduct.json";
import glasses from "../../data/Tomford/glasses.json";
import eyewearProducts from "../../data/Tomford/glasses_eyewear.json";

const Alltom= ({ addToCart = () => {} }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState("");

  // Gộp tất cả sản phẩm từ 4 file JSON
  const allProducts = [...newproducts, ...saleproduct, ...glasses, ...eyewearProducts];

  useEffect(() => {
    // Tìm sản phẩm có id khớp (so sánh dạng chuỗi để đảm bảo)
    const foundProduct = allProducts.find((p) => String(p.id) === id);
    // Nếu sản phẩm không có mảng images nhưng có thuộc tính image, bọc nó vào mảng
    if (foundProduct) {
      if (!foundProduct.images && foundProduct.image) {
        foundProduct.images = [foundProduct.image];
      }
    }
    setProduct(foundProduct);
  }, [id, allProducts]);

  if (!product) {
    return <div>No product found.</div>;
  }

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const formatDescription = (description) => {
    if (!description) return "Product has no description";
    return description.split('\n').map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const downloadProductDoc = async () => {
    try {
      const imagePromises = product.images.map(async (imageUrl) => {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const buffer = await blob.arrayBuffer();
        return buffer;
      });

      const imageBuffers = await Promise.all(imagePromises);
      const imageRuns = imageBuffers.map(buffer => new ImageRun({
        data: buffer,
        transformation: { width: 200, height: 200 },
      }));

      const doc = new Document({
        sections: [{
          children: [
            new Paragraph({ children: [new TextRun({ text: "Product Information", bold: true, size: 28 })] }),
            ...imageRuns.map(image => new Paragraph({ children: [image] })),
            new Paragraph(`Name: ${product.name || "N/A"}`),
            new Paragraph(`Price: ${product.price || "N/A"}`),
            new Paragraph(`Available: ${product.Available || "N/A"}`),
            new Paragraph("Description:"),
            new Paragraph(product.description || "N/A"),
            new Paragraph("Additional Info: N/A"),
          ],
        }],
      });

      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "product-info.docx");
        showNotification("File downloaded successfully! ✅");
      });
    } catch (error) {
      console.error("Error generating document:", error);
      showNotification("Error downloading file ❌");
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showNotification("Product added to cart! 🛒");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Lấy một số sản phẩm khuyến nghị (loại bỏ sản phẩm hiện tại)
  const recommendedProducts = allProducts.filter(p => String(p.id) !== id).slice(0, 4);

  return (
    <>
      <Logot />
      <p></p>
      <Navbart />
      <p></p>
      <div className="product-container">
        {notification && <div className="notification">{notification}</div>}
        {product.images && product.images.length > 0 ? (
          <Slider {...sliderSettings}>
            {product.images.map((image, index) => (
              <div key={index} className="inner-slide">
                <img src={image} alt={`${product.name} view ${index + 1}`} className="tf2" />
              </div>
            ))}
          </Slider>
        ) : (
          <p>No images available</p>
        )}
        <h1 className="tf3">{product.name}</h1>
        <h1 className="tf4">{product.price}</h1>
        <h1 className="tf5">{product.Available}</h1>
        <div className="quantity-control">
          <button className="count-2" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span className="count-3">{quantity}</span>
          <button className="count-1" onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="add-to-bag" onClick={handleAddToCart}>ADD TO BAG</button>
        <div className="details-section-2" onClick={toggleDetails} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', borderBottom: '1px solid #ccc', padding: '5px', maxWidth: '150px' }}>
          <span className="details-section">DETAILS</span>
          <span>{isOpen ? '\u25B2' : '\u25BC'}</span>
        </div>

        {isOpen && (
          <div className="product-detailstomford" style={{ maxHeight: "500px", overflowY: "auto", padding: '5px', borderTop: '1px solid #ccc', maxWidth: '1100px' }}>
            <h1>Product Description:</h1>
            <p className="product-description">{formatDescription(product.description)}</p>
          </div>
        )}
        <button className="download-doc" onClick={downloadProductDoc} style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}>DOWNLOAD</button>

        <div className="row">
          <h1>YOU MAY ALSO LIKE</h1>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "50px"
            }}
          >
            {recommendedProducts.map((recProduct) => (
              <SwiperSlide key={recProduct.id}>
                <div className="center">
                  <Link to={`/allglassesdetail/${recProduct.id}`}>
                    <div className="hover-img">
                      {recProduct.image ? (
                        <img
                          src={process.env.PUBLIC_URL + recProduct.image}
                          width="500"
                          height="400"
                          alt={recProduct.name}
                          onError={(e) => (e.target.src = "/images/default-image.jpg")}
                        />
                      ) : (
                        <p>Image not available</p>
                      )}
                      <h1 className="non-link">{recProduct.name}</h1>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <footer />
      </div>
    </>
  );
};

export default Alltom;
