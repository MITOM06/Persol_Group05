import React from 'react';
import GucciNewproducts from "../../data/Gucci/Newproduct/glasses.json"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logog from "../../components/Logog";
import Navbarg from "../../components/Navbarg"
import Rating from 'react-rating';

import "../../styles/Gucci/homepage.css"


const Gucci = () => {
  
  const [star, setStar] = useState( GucciNewproducts.star);

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
       {/* New Product Section */}
       <div className="product-section">
       <div className='back-page'>
    <Link to={`/GucciHomePage`} className='btn-back-page'>Back to Home</Link>
        <div className='btn-back-page'> / </div>         
    <Link to={`/GucciNewproduct` } className='btn-back-page'>New Products</Link>
    </div>
    <p/>
    <h1>New Products</h1>
          <div className="product-items">
            {GucciNewproducts.map((Newproduct) => (
              <div key={Newproduct.id} className="product-item">
                <Link to={`/GucciNewproduct/${Newproduct.id}`}>
                  <img src={Newproduct.image} alt={Newproduct.name} />
                </Link>
                <div className="product-overlay">NEW</div>
                <div className="product-info">
                  <div>{Newproduct.name}</div>
                  <div>{Newproduct.price}</div>
                  <Rating 
        initialRating={Newproduct.star} // Cài đặt số sao ban đầu từ dữ liệu sản phẩm
        onChange={handleRatingChange} // Hàm xử lý khi thay đổi đánh giá
        emptySymbol="fa fa-star-o" // Sao trống
        fullSymbol="fa fa-star" // Sao đầy đủ
      />
      <p>Current Rating: {Newproduct.star}-star</p>
                  <Link to={`/GucciNewproduct/${Newproduct.id}`}>
                    <button className="btn-of-page">Details</button>
                  </Link>
                  <button className="btn-of-page" onClick={handleAddtocart}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
     
    </>
  );
};

export default Gucci;