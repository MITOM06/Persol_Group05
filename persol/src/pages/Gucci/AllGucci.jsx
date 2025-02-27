import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imgtransprort from '../../imgs/imgdetails/transport.png';
import refund from '../../imgs/imgdetails/refund.png';
import telemarker from '../../imgs/imgdetails/telemarketer-customer-service-svgrepo-com.png';
import Logog from "../../components/Logog";
import Navbarg from "../../components/Navbarg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Gucci/details.css";

// Import tất cả dữ liệu sản phẩm
import GucciEyeGlasses from "../../data/Gucci/Eyeglasses/glasses.json";
import GucciSunglasses from "../../data/Gucci/Sunglasses/glasses.json";
import GucciSaleProducts from "../../data/Gucci/Saleglasses/glasses.json";
import GucciNewProducts from "../../data/Gucci/Newproduct/glasses.json";

const GucciProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [details, setDetails] = useState(false);
  const [count, setCount] = useState(1);

  // Gộp tất cả sản phẩm từ các danh mục
  const allProducts = [
    ...GucciEyeGlasses,
    ...GucciSunglasses,
    ...GucciSaleProducts,
    ...GucciNewProducts
  ];

  useEffect(() => {
    // Tìm sản phẩm có id trùng với giá trị truyền vào URL
    const foundProduct = allProducts.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, allProducts]);

  const tang = () => setCount(count + 1);
  const giam = () => count > 1 && setCount(count - 1);

  if (!product) {
    return <div>Sorry, the product you are looking for is not available!</div>;
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

  return (
    <>
      <Logog />
      <Navbarg />
      <div className="BackGroundDetails">
        <table className="DetailsContainer1">
          <div className="GucciDetailsLeft">
            <Slider {...carousel}>
              <div><img src={product.image} alt="Slide 1" /></div>
              <div><img src={product.image1} alt="Slide 2" /></div>
              <div><img src={product.image2} alt="Slide 3" /></div>
              <div><img src={product.image3} alt="Slide 4" /></div>
            </Slider>
          </div>
          <div className="line"></div>
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
                  <img src={imgtransprort} width={50} alt="Fast delivery" />
                </td>
                <td>
                  <img src={refund} width={50} alt="Return Policy" />
                </td>
                <td>
                  <img src={telemarker} width={50} alt="Support" />
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
                <td className="btn-details-1" onClick={() => setDetails(!details)}>Details</td>
                <td>
                  <button onClick={() => setDetails(!details)} className="btn-details-2">+</button>
                </td>
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
                <button>Download</button>
              </div>
            )}
          </div>
        </table>
      </div>
    </>
  );
};

export default GucciProductDetails;
