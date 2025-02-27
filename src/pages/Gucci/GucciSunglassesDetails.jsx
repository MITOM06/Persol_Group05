import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import imgtransprort from '../../imgs/imgdetails/transport.png'
import refund from '../../imgs/imgdetails/refund.png'
import telemarker from '../../imgs/imgdetails/telemarketer-customer-service-svgrepo-com.png'
import Logog from "../../components/Logog";
import Navbarg from "../../components/Navbarg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../styles/Gucci/details.css";
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
const GucciSunglassesDetails = ({ GucciSunglasses }) => {
  const [count, setcount] = useState(1);

  const tang = () => {
    setcount(count + 1);
  };

  const giam = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };


  const [details, setdetails] = useState(null);
  const toggleDetails = () => {
    setdetails(!details);
  };

  const { id } = useParams(); // Lấy id từ url bên app: product/:id
  const [product, setProduct] = useState(null);

  useEffect(() => {
    {/* tìm sản phẩm đã lấy giá trị id từ hàm useParams */ }
    const foundProduct = GucciSunglasses.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, GucciSunglasses]);
  {/*  cú pháp của useEffect : useEffect(() => { ... }, [id, products]); */ }

  if (!product) {
    return <div>Không tìm thấy sản phẩm.</div>;
  }



  const carousel = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true
  };

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
      <Logog />
      <p></p>
      <Navbarg />
      <p></p>
      <div className="BackGroundDetails">

        <table className="DetailsContainer1">
          <div className="GucciDetailsLeft">
            <Slider {...carousel} >
              <div><img src={product.image} alt="Slide 1" /></div>
              <div><img src={product.image1} alt="Slide 2" /></div>
              <div><img src={product.image2} alt="Slide 3" /></div>
              <div><img src={product.image3} alt="Slide 4" /></div>

            </Slider>
          </div>

          <div class="line"></div> {/*Đường phân chia */}



          <div className="GucciDetailsRight">
            <h1>{product.name}</h1>
            <h2 style={{ color: "red" }}>{product.price}</h2>

            <h4>Promo Code</h4>

            <table className="promocode">
              <tr>
                <td>GUCCI100</td>
              </tr>
              <tr>
                <td>$100 discount on orders from $500 (lenses not applicable)</td>
              </tr>
            </table>

            <p />


            <div className="container-button">

              <div className="container-button-1">
                <button onClick={giam} className="btn-count">-</button>
                {count}
                <button onClick={tang} className="btn-count">+</button>
              </div>

              <button className="btn-add-to-cart">Add to cart</button>

            </div>

            <hr />
            <table className="imgtransport">
              <tr>
                <td>
                  <img src={imgtransprort} width={50} />
                </td>

                <td>
                  <img src={refund} width={50} />
                </td>

                <td>
                  <img src={telemarker} width={50} />
                </td>

              </tr>
              <tr style={{ fontWeight: 'bold' }}>
                <th>Fast delivery</th>
                <th>Return Policy</th>
                <th>Support</th>
              </tr>

              <tr>
                <td>Only from 2 days for inner city areas</td>
                <td>Return support</td>
                <td>Hotline: 0000 0000</td>
              </tr>
            </table>
            <hr />

            <table className="btn-details">
              <tr>
                <td className="btn-details-1" onClick={() => toggleDetails()}>Details</td>
                <td><button onClick={() => toggleDetails()} className="btn-details-2">+</button></td>
              </tr>
            </table>
            {details && (
              <div className="dropdown-details">


                <h4>Name: {product.name}</h4>

                <ul>
                  <li>Shiny light brown tortoiseshell acetate frame</li>
                  <li>Shiny light brown tortoiseshell acetate temples with Interlocking G detail</li>
                  <li>Solid lilac lens</li>
                  <li>100% UVA/UVB protection</li>
                </ul>
                <button onClick={() => handleDownload(product)}>Download</button>
              </div>
            )}
          </div>
        </table>

      </div>

    </>
  );
};

export default GucciSunglassesDetails;