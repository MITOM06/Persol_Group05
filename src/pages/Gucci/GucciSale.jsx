import React from 'react';
import GucciSaleproducts from "../../data/Gucci/Saleglasses/glasses.json"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logog from "../../components/Logog";
import Navbarg from "../../components/Navbarg"
import "../../styles/Gucci/homepage.css"
import Rating from 'react-rating';

const Gucci = () => {


  const [notification, setNotification] = useState(''); // Thông báo hiển thị

  const [isVisible, setIsVisible] = useState(false); // Kiểm tra trạng thái hiển thị của thông báo
  const handleAddtocart = () => {
    setNotification(`Your item has been added to the cart!`); // Cập nhật thông báo
    setIsVisible(true); // Hiển thị thông báo

    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Thông báo sẽ biến mất sau 3 giây
  };
  const [star, setStar] = useState(GucciSaleproducts.star);

  const handleRatingChange = (newStar) => {
    setStar(newStar);

  };
  return (
    <>
      <Logog />
      <p></p>
      <Navbarg />
      <p></p>

      {/* Sale Product Section */}
      <div className="product-section">
        <div className='back-page'>
          <Link to={`/GucciHomePage`} className='btn-back-page'>Back to Home</Link>
          <div className='btn-back-page'> / </div>
          <Link to={`/GucciSaleproducts`} className='btn-back-page'>Sale Products</Link>
        </div>
        <p />
        <h1>Sale Products</h1>
        <div className="product-items">
          {GucciSaleproducts.map((Saleproducts) => (
            <div key={Saleproducts.id} className="product-item">
              <Link to={`/GucciSaleproducts/${Saleproducts.id}`}>
                <img src={Saleproducts.image} alt={Saleproducts.name} />
              </Link>
              <div className="product-overlay">SALE</div>
              <div className="product-info">
                <div>{Saleproducts.name}</div>

                <div style={{ color: '#555', textDecoration: 'line-through' }}>{Saleproducts.oldprice}</div>
                <div className='product-info-price'>{Saleproducts.price}</div>
                <Rating
                  initialRating={Saleproducts.star} // Cài đặt số sao ban đầu từ dữ liệu sản phẩm
                  onChange={handleRatingChange} // Hàm xử lý khi thay đổi đánh giá
                  emptySymbol="fa fa-star-o" // Sao trống
                  fullSymbol="fa fa-star" // Sao đầy đủ
                />
                <p>Current Rating: {Saleproducts.star}-star</p>
                <Link to={`/GucciSaleproducts/${Saleproducts.id}`}>
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