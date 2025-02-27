import { Link } from "react-router-dom";
import React from "react";
import "../../styles/Tomford/tomfordnewproducts.css";
import products from "../../data/Tomford/newproducts.json";


import Logot from "../../components/Logot";
import Navbart from '../../components/Navbart';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import saleproduct from "../../data/Tomford/saleproduct.json"
import { useState } from "react";
const imageUrl = "/img2/sp.jpg";
const imageUrl1 = "/img2/sp2.jpg";
const imageUrl2 = "/img2/sp3.jpg";
const imageUrl3 = "/img2/sp4.jpg";
const imageUrl4 = "/img3/bg1.jpg";
const imageUrl5 = "/img3/bg2.jpg";

const TomfordNewproduct = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [allProductsShown, setAllProductsShown] = useState(false);




  const showMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 3, products.length));
    if (visibleProducts + 3 >= products.length) {
      setAllProductsShown(true);

    }
  };

  return (
    <>
      <Logot/>
      <p></p>
      <Navbart/>
      <p></p>
      <div>


        <img src={imageUrl1} className="responsive-image" alt="Banner 1" />



      </div>

      <Link className="non-decor" to='/sunglassesTomford'>

        <img src={imageUrl3} className="responsive-image" alt="Banner 3" />

        <div className="shopping">  SUNGLASSES SHOP NOW </div>
      </Link>




      <div className="row">
        <h4> NEW ARRIVALS </h4>
        {products.slice(0, visibleProducts).map((product) => (

          <div className="col" key={product.id}>
            <div className="center">
              <Link className="non-decor" to={`/newproductstomford/${product.id}`}>
                <div className="hover-img">
                  {product.image ? (


                    <img
                      src={product.image}
                      className="product-image"
                      alt={product.name}
                      onError={(e) => (e.target.src = "/images/default-image.jpg")}
                    />


                  ) : (
                    <p>Image not available</p>
                  )}
                  <h1 className="non-decor">{product.name}</h1>
                </div>
              </Link>
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={showMoreProducts}
            className="show-more-btn"
            disabled={allProductsShown} // Khi hết sản phẩm, nút bị vô hiệu hóa
          >
            {allProductsShown ? "No more product to display" : "View More"}
          </button>
        </div>
      </div>




      <Link className="non-decor" to='/saleproductTomford'>
        {/* <img src={imageUrl4} align="center" height="1300" width="1255" /> */}
        <img src={imageUrl4} className="responsive-image" alt="Banner 4" />
        <div className="shoppingsaleproduct"> SALE SHOP NOW </div>
      </Link>


      <Link className="non-decor" to='/eyeglassesTomford'>
        {/* <img src={imageUrl5} align="center" height="1300" width="1255" /> */}
        <img src={imageUrl2} className="responsive-image" alt="Banner 5" />
        <div className="shoppingeyeglasses"> EYEWEAR SHOP NOW </div>
      </Link>

      <div className="row">
        <h4>SALE PRODUCT</h4>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={400}
          slidesPerView={1} 
          breakpoints={{
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
            1440: { slidesPerView: 4 } 
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          style={{
            "--swiper-navigation-color": "black",
            "--swiper-navigation-size": "50px"
          }}
        >


          {saleproduct.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="center">
                <Link className="non-decor" to={`/saleproductTomford/${product.id}`}>
                  <div className="hover-img">
                    {product.image ? (
                      <img
                        src={product.image}
                        width="400"
                        height="300"
                        alt={product.name}
                        onError={(e) => (e.target.src = "/images/default-image.jpg")}
                      />
                    ) : (
                      <p>Image not available</p>
                    )}
                    <h1 className="non-decor">{product.name}</h1>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );
};

export default TomfordNewproduct;
