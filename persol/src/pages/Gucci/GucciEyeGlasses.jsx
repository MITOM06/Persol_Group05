import React from 'react';
import GucciEyeGlasses from "../../data/Gucci/Eyeglasses/glasses.json"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Gucci/homepage.css"
import Rating from 'react-rating';
import Logog from "../../components/Logog";
import Navbarg from "../../components/Navbarg"
const Gucci = () => {
  const [star, setStar] = useState(GucciEyeGlasses.star);

  const handleRatingChange = (newStar) => {
    setStar(newStar);

  };

  const [notification, setNotification] = useState(''); // Thông báo hiển thị

  const [isVisible, setIsVisible] = useState(false); // Kiểm tra trạng thái hiển thị của thông báo
  const handleAddtocart = () => {
    setNotification(`Your item has been added to the cart!`); // Cập nhật thông báo
    setIsVisible(true); // Hiển thị thông báo

    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Thông báo sẽ biến mất sau 3 giây
  };

  return (
    <>
      <Logog />
      <p></p>
      <Navbarg/>
      <p></p>
      {/* Eyeglasses Section */}
      <div className="product-section">
        <div className='back-page'>
          <Link to={`/GucciHomePage`} className='btn-back-page'>Back to Home</Link>
          <div className='btn-back-page'> / </div>
          <Link to={`/GucciEyeGlasses`} className='btn-back-page'>EyeGlasses</Link>
        </div>

        <p />
        <h1>EyeGlassses</h1>
        <div className="product-items">
          {GucciEyeGlasses.map((EyeGlasses) => (
            <div key={EyeGlasses.id} className="product-item">
              <Link to={`/GucciEyeGlasses/${EyeGlasses.id}`}>
                <img src={EyeGlasses.image} alt={EyeGlasses.name} />
              </Link>
              <div className="product-info">
                <div>{EyeGlasses.name}</div>
                <div className='product-info-price'>{EyeGlasses.price}</div>
                <Rating
                  initialRating={EyeGlasses.star} // Cài đặt số sao ban đầu từ dữ liệu sản phẩm
                  onChange={handleRatingChange} // Hàm xử lý khi thay đổi đánh giá
                  emptySymbol="fa fa-star-o" // Sao trống
                  fullSymbol="fa fa-star" // Sao đầy đủ
                />
                <p>Current Rating: {EyeGlasses.star}-star</p>
                <Link to={`/GucciEyeGlasses/${EyeGlasses.id}`}>
                  <button className="btn-of-page">Details</button>
                </Link>
                <button className="btn-of-page" onClick={handleAddtocart}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Display notification */}
      {isVisible && (
        <div className="rayban-add-to-cart-notification">
          {notification}
        </div>
      )}
    </>
  );
};

export default Gucci;