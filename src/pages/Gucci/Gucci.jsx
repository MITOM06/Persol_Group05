import React from 'react';
import GucciNewproducts from "../../data/Gucci/Newproduct/glasses.json"
import GucciHomepage from "../../data/Gucci/Homepage/carousel.json"
import 'swiper/css'; // Import CSS cơ bản của Swiper
import 'swiper/css/navigation'; // Import CSS cho navigation
import 'swiper/css/pagination'; // Import CSS cho pagination
import 'swiper/css/autoplay'; // Import CSS cho autoplay
import Swipercss from '../../styles/Rayban/swiper.module.css';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper & SwiperSlide
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Gucci/homepage.css";
import Logog from "../../components/Logog";
import Navbarg from "../../components/Navbarg"



const Gucci = () => {
  const [notification, setNotification] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleAddtocart = () => {
    setNotification(`Your item has been added to the cart!`);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <>
      <Logog />
      <p></p>
      <Navbarg />
      <p></p>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        className={Swipercss.swiperContainer} // Sử dụng class từ CSS module
      >

        {GucciHomepage.map((Homepage) => (
          <SwiperSlide key={Homepage.id} className={Swipercss.swiperSlide}> {/* Apply CSS class for slide */}

            <img src={Homepage.image} width="100%" height="650px"  />

          </SwiperSlide>
        ))}

      </Swiper>



      <p />
      <div className="product-container-img">
        <div className="product-img">
          <img src="/gucciimg/homepage/6.png" alt="" />
          <div className="overlay-text">"Trendy sunglasses offering full UV protection and clear vision."</div>
          <button class="btn-stylish"><Link to={`/GucciSunglasses`} className="react-link">SUNGLASSES</Link></button>
        </div>
        <div className="product-img">
          <img src="/gucciimg/homepage/7.png" alt="" />
          <div className="overlay-text">"Exclusive sale on select products – limited time only!"</div>
          <button class="btn-stylish"><Link to={`/GucciSaleproducts`} className="react-link">SALE PRODUCTS</Link></button>
        </div>
      </div>
      <div className="product-container">

        {/* New Product Section */}
        <div className="product-section">
          <center> <Link to={`/GucciNewproduct`} style={{ textDecoration: 'none' }}>
            <h2>New Product</h2>
          </Link> </center>
          <div className="product-items">
            {GucciNewproducts.map((Newproduct) => (
              <div key={Newproduct.id} className="product-item">
                <Link to={`/GucciNewproduct/${Newproduct.id}`}>
                  <img src={Newproduct.image} alt={Newproduct.name} />
                </Link>
                <div className="product-overlay">NEW</div>
                <div className="product-info">
                  <div>{Newproduct.name}</div>
                  <div className='product-info-price'>{Newproduct.price}</div>
                  <Link to={`/GucciNewproduct/${Newproduct.id}`}>
                    <button className="btn-of-page">Details</button>
                  </Link>
                  <button className="btn-of-page" onClick={handleAddtocart}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
          <center> <button class="btn-footer"><Link to={`/GucciProducts`} className="react-link">MORE</Link></button> </center>

        </div>


        <p />


      </div>

      {/* Display notification */}
      {isVisible && (
        <div className="rayban-add-to-cart-notification">
          {notification}
        </div>
      )}

      <p />
    </>
  );
};


export default Gucci;
