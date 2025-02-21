import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import imgtransprort from '../../imgs/imgdetails/transport.png';
import refund from '../../imgs/imgdetails/refund.png';
import telemarker from '../../imgs/imgdetails/telemarketer-customer-service-svgrepo-com.png';
import Logog from "../../components/Logog";
import Navbarg from "../../components/Navbarg"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../styles/Gucci/details.css";
import { Link } from "react-router-dom";




const GucciEyeGlassesDetails = ({ GucciEyeGlassesDetails }) => {
  const [count, setcount] = useState(1);
  const tang = () => setcount(count + 1);
  const giam = () => { if (count > 1) setcount(count - 1); };
  const [details, setdetails] = useState(false);
  const toggleDetails = () => setdetails(!details);
  
  const { id } = useParams(); // Lấy id từ url bên app: product/:id
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = GucciEyeGlassesDetails.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, GucciEyeGlassesDetails]);

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
      <p></p>
      <Navbarg/>
      <p></p>
      <div className="BackGroundDetails">
        <div className="DetailsContainer1">
          {/* Phần trái cho Carousel */}
          <div className="GucciDetailsLeft">
            <Slider {...carousel} >
              <div><img src={product.image} alt="Slide 1" /></div>
              <div><img src={product.image1} alt="Slide 2" /></div>
              <div><img src={product.image2} alt="Slide 3" /></div>
              <div><img src={product.image3} alt="Slide 4" /></div>
   
            </Slider>
          </div>

          {/* Phần phải cho chi tiết sản phẩm */}
          <div className="GucciDetailsRight">
          <div className='back-page'>
    <Link to={`/GucciHomePage`} className='btn-back-page'>Back to Home</Link>
        <div className='btn-back-page'> / </div>         
    <Link to={`/GucciEyeGlasses` } className='btn-back-page'>EyeGlasses</Link>
        <div className='btn-back-page'> / </div>
        <div style={{fontSize:'18px'}}> {product.name} </div>
    </div>

<p />
            <h1>{product.name}</h1>
            <h2 style={{ color: "red" }}>{product.price}</h2>
            <h4>Promo Code</h4>
            <table className="promocode">
              <tr><td>GUCCI100</td></tr>
              <tr><td>$100 discount on orders from $500 (lenses not applicable)</td></tr>
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
              <tr><td><img src={imgtransprort} width={50} /></td><td><img src={refund} width={50} /></td><td><img src={telemarker} width={50} /></td></tr>
              <tr style={{ fontWeight: 'bold' }}><th>Fast delivery</th><th>Return Policy</th><th>Support</th></tr>
              <tr><td>Only from 2 days for inner city areas</td><td>Return support</td><td>Hotline: 0000 0000</td></tr>
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
                <button>Download</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GucciEyeGlassesDetails;
