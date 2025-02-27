import React from 'react';
import RaybanEyeGlasses from "../../data/Rayban/Eyeglasses/eyeglasses.json"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbarr from "../../components/Navbarr";
import Logor from "../../components/Logoray";
import Rating from 'react-rating';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../styles/Rayban/homepage.css";

const RaybanEyeGlassesHomePage = () => {
  const [star, setStar] = useState(RaybanEyeGlasses.star);

  const handleRatingChange = (newStar) => {
    setStar(newStar);

  };

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


  return (
    <>
      <Logor />
      <p></p>
      <Navbarr />
      <p></p>
      <div className='back-page'>
        <Link to={`/RaybanHomePage`} className='btn-back-page'>Back to Home</Link>
        <div className='btn-back-page'> / </div>
        <Link to={`/RaybanEyeGlasses`} className='btn-back-page'>EyeGlasses</Link>
      </div>



      <h1>EyeGlasses</h1>
      <table className='RaybanHomePage'>

        {RaybanEyeGlasses.map((EyeGlasses) => (
          <tr key={EyeGlasses.id}> {/*giúp React nhận diện từng phần tử trong danh sách là duy nhất dựa trên*/}
            <th>
              {/* Sử dụng hình ảnh từ thư mục public */}
              <div class="rayban-image-container">
                <Link to={`/RaybanEyeGlasses/${EyeGlasses.id}`}> {/* chèn giá trị vào trong chuỗi*/}
                  <img src={EyeGlasses.image} style={{ width: '300px', height: 'auto', borderRadius: '30px' }} className='rayban-hover-image' /> {/**gọi hàm và truyền product.id vào tham số productId*/}
                </Link>
              </div>
              <div className='rayban-text'>
                <div>{EyeGlasses.name}</div>
                <div style={{ color: 'red' }}>{EyeGlasses.price}</div>
              </div>
              <Rating
                initialRating={EyeGlasses.star} // Cài đặt số sao ban đầu từ dữ liệu sản phẩm
                onChange={handleRatingChange} // Hàm xử lý khi thay đổi đánh giá
                emptySymbol="fa fa-star-o" // Sao trống
                fullSymbol="fa fa-star" // Sao đầy đủ
              />
              <p>Current Rating: {EyeGlasses.star}-star</p>
            </th>
          </tr>
        ))}
      </table>

    </>
  );
};

export default RaybanEyeGlassesHomePage;