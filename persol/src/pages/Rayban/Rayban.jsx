import React from 'react';
import RaybanNewProduct from "../../data/Rayban/Newproduct/newproduct.json";
import 'swiper/css'; // Import CSS cơ bản của Swiper
import 'swiper/css/navigation'; // Import CSS cho navigation
import 'swiper/css/pagination'; // Import CSS cho pagination
import 'swiper/css/autoplay'; // Import CSS cho autoplay
import Swipercss from '../../styles/Rayban/swiper.module.css';  // Import module CSS cho Swiper
import Homepagecss from '../../styles/Rayban/homepage.module.css';
import { Link } from 'react-router-dom';
import Navbarr from "../../components/Navbarr";
import Logor from "../../components/Logoray";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper & SwiperSlide

// Các module cần thiết từ Swiper
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Rayban = () => {
  return (
    <>
      <Logor />
      <p></p>
      <Navbarr />
      <p></p>
      <div className={Homepagecss["video-container"]}>
        <video width="100%" height="auto" autoPlay muted>
          <source src="/raybanimg/homepage/video1.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p />
      <div className={Homepagecss['image-homepage']}>
        <img width="100%" height="auto" src="/raybanimg/homepage/h1.png" />
        <h3 className={Homepagecss['image-homepage-text']}><Link to={`/RaybanSaleProduct`} className={Homepagecss["react-link"]}> ENJOY YOUR DAY SAVINGS STARTING AT 20% OFF!</Link></h3>
        <button className={Homepagecss["image-homepage-button"]}><Link to={`/RaybanSaleProduct`} className={Homepagecss["react-link"]}>SALE PRODUCTS</Link></button>
      </div>
      <p />
      <div className={Homepagecss['image-homepage-1']}>
        <img width="100%" height="auto" src="/raybanimg/homepage/h2.png" />
        <h3 className={Homepagecss['image-homepage-text-1']}><Link to={`/RaybanSunglasses`} className={Homepagecss["react-link"]}> "Stylish sunglasses with UV protection for all-day comfort."</Link></h3>
        <button className={Homepagecss["image-homepage-button-1"]}><Link to={`/RaybanSunglasses`} className={Homepagecss["react-link"]}>SHOP SUNGLASSES</Link></button>
      </div>
      <p />
      <h2><Link to={`/RaybanNewProduct`} className={Homepagecss["react-link"]}>New Arrivals</Link></h2>

      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
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
        {RaybanNewProduct.map((Newproduct) => (
          <SwiperSlide key={Newproduct.id} className={Swipercss.swiperSlide}>  {/* Class swiperSlide */}
            <div className={Homepagecss['rayban-image-container']}>
              <div className={Homepagecss['rayban-hover-image']}>
                <Link to={`/RaybanNewproduct/${Newproduct.id}`}>
                  <img src={Newproduct.image} className={Swipercss.swiperImage} /> {/* Class swiperImage */}
                </Link>
                <div className={Homepagecss['rayban-newproduct']}>NEW</div>
              </div>
            </div>
            <div>{Newproduct.name}</div>
            <div style={{ color: 'red' }}>{Newproduct.price}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p />

    </>
  );
};

export default Rayban;
