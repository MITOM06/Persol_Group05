import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import Navbarr from "../../components/Navbarr";
import Logor from "../../components/Logoray";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../../styles/Rayban/details.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";

// Hàm tải hình ảnh và chuyển thành base64
const getBase64Image = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // CORS nếu hình ảnh từ nguồn khác
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png"); // Chuyển thành base64
      resolve(dataURL);
    };
    img.onerror = (err) => {
      reject(err);
    };
    img.src = url;
  });
};

const RaybanSaleProducts = ({ RaybanSaleDetails }) => {
  const [count, setcount] = useState(1);

  const carousel = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };


  const tang = () => {
    setcount(count + 1);
  };

  const giam = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };
  const [notification, setNotification] = useState(''); // Thông báo hiển thị

  const [isVisible, setIsVisible] = useState(false); // Kiểm tra trạng thái hiển thị của thông báo
  const handleAddtocart = () => {
    setNotification(`Your item ${count} has been added to the cart!`); // Cập nhật thông báo
    setIsVisible(true); // Hiển thị thông báo

    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Thông báo sẽ biến mất sau 3 giây
  };




  const [details, setdetails] = useState(null);
  const toggleDetails = () => {
    setdetails(!details);
  };

  const { id } = useParams(); // Lấy id từ url bên app: product/:id
  const [product, setProduct] = useState(null);

  useEffect(() => {
    {/* tìm sản phẩm đã lấy giá trị id từ hàm useParams */ }
    const foundProduct = RaybanSaleDetails.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);



  }, [id, RaybanSaleDetails]);



  {/*  cú pháp của useEffect : useEffect(() => { ... }, [id, products]); */ }

  if (!product) {
    return <div>Không tìm thấy sản phẩm.</div>;
  }
  // Hàm tải và tạo file Word có hình ảnh
const handleDownload = async (product) => {
  try {
    // Tải hình ảnh và chuyển thành base64 từ thư mục public
    const imageBase64 = await getBase64Image(product.image);

    // Tạo tài liệu Word
const doc = new Document({
sections: [
  {
    properties: {},
    children: [
      // Thêm tên và giá sản phẩm
      new Paragraph({
        children: [
          new TextRun(`Name: ${product.name}`),
        ],
      }),

      new Paragraph({
        children: [
          new TextRun(`Price: ${product.price}`),
        ],
      }),

      // Chèn hình ảnh từ base64
      new Paragraph({
        children: [
          new ImageRun({
            data: imageBase64,
            transformation: { width: 300, height: 300 },
          }),
        ],
      }),

      // Thêm chi tiết sản phẩm
      new Paragraph({
        children: [
          new TextRun("Details:"),
        ],
      }),

      // Các chi tiết của sản phẩm dưới dạng danh sách
      new Paragraph({
        children: [
          new TextRun("• Shiny light brown tortoiseshell acetate frame"),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun("• Shiny light brown tortoiseshell acetate temples with Interlocking G detail"),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun("• Solid lilac lens"),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun("• 100% UVA/UVB protection"),
        ],
      }),
    ],
  },
],
});

    // Tạo file Word và tải về
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
      <div className='back-page'>
        <Link to={`/RaybanHomePage`} className='btn-back-page'>Back to Home</Link>
        <div className='btn-back-page'> / </div>
        <Link to={`/RaybanSaleProduct`} className='btn-back-page'>Sale Products</Link>
        <div className='btn-back-page'> / </div>
        <Link className='btn-back-page-1'>{product.name}</Link>
      </div>



      <Slider {...carousel} >

        <div><img src={product.image} alt="Slide 3" /></div>
        <div><img src={product.image1} alt="Slide 1" /></div>
        <div><img src={product.image2} alt="Slide 2" /></div>
        <div><img src={product.image3} alt="Slide 3" /></div>
        <div><img src={product.image4} alt="Slide 2" /></div>

      </Slider>


      <div className="rayban-product-container">


        <div className="rayban-product-info-text">

          <h1>{product.name}</h1>
          <h2 style={{ color: "#555555", textDecoration: "line-through" }}>{product.oldprice}</h2>
          <h2 style={{ color: "red" }}>{product.price}</h2>
        </div>
        <div className="rayban-button-count">
          <div className="rayban-button-count-1">
            <button className="rayban-button-count-2" onClick={giam}>-</button>
            {count}
            <button className="rayban-button-count-2" onClick={tang}>+</button>
          </div>
          <button className="rayban-add-to-cart-button" onClick={handleAddtocart}>Add to Cart</button>
        </div>


        {/* Hiển thị thông báo nếu có */}
        {isVisible && (

          <div className="rayban-add-to-cart-notification">
            {notification}
          </div>
        )}
        <div className="rayban-btn-details">
          <tr>
            <td className="btn-details-1" onClick={() => toggleDetails()}>Details</td>
            <td><button onClick={() => toggleDetails()} className="btn-details-2">+</button></td>
          </tr>
        </div>
        {details && (
          <div className="rayban-dropdown-details">
            <h4>Name: {product.name}</h4>
            <h4>{product.price}</h4>
            <ul>
              <li>Shiny light brown tortoiseshell acetate frame</li>
              <li>Shiny light brown tortoiseshell acetate temples with Interlocking G detail</li>
              <li>Solid lilac lens</li>
              <li>100% UVA/UVB protection</li>
            </ul>
            <button className="rayban-btn-download" onClick={() => handleDownload(product)}>Download</button>
          </div>

        )}
      </div>

    </>
  );
};

export default RaybanSaleProducts;